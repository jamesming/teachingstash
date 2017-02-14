import { Observable } from 'rxjs/Rx';
import { setUser, setSession, setJames } from './actions/userActions';
import store from './store';

export default class CrossDomService {

	constructor() {
		this.hasPopped = false;
		this.nameOfThisFile = 'crossdomfile';
		this.initiateMessaging();
	}

	testObserable() {
      const data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);

          setTimeout(() => {
              observer.next(43);
          }, 2000);

          setTimeout(() => {
              observer.next(44);
          }, 3000);

          setTimeout(() => {
              observer.complete();
          }, 4000);
      });

      data.subscribe(
				function(value) {
					console.log(value);
				},
				function(error) {
					console.log(error);
				},
				function(){
					console.log('observable completed');
				}
      );
	}

	initiateMessaging() {
		tools.crossdom.init('iframe_messaging_conduit', 'https://pictographr.com/partners/iframeSrcPostMsgConduit.html');
		this.setReceiver();
	}

	logout() {
		const src = 'https://accounts.google.com/Logout';

		$('#iframe_logout').attr('src', 'https://accounts.google.com/Logout').load(() => {
			$('#iframe_logout').attr('src', 'https://pictographr.com/auth/destroySessionP').unbind('load').load(() => {
				store.dispatch(setSession('none'));
				store.dispatch(setUser('', false, ''));
			});
		});
	}

	isJames(google_id) {
		if (google_id === '104384554224634036843') return true;
	}

	setReceiver() {
		const that = this;

		tools.crossdom.receive = function(msg) {

			if (typeof (msg.data.split) !== 'function') return;

			const msgObj = this.unserialize(msg.data.split(','));

			if (typeof (msgObj.msgFrom) !== 'undefined'
				&& msgObj.purpose === 'retrieveGoogleIdDomain') { // ONLY LISTEN FOR MSG FROM PICTOGRAPHR
				if (typeof (msgObj.google_id) !== 'undefined') { console.log(msgObj.google_id); }
					if (msgObj.appInstalled === 'true') {
						if (msgObj.exist === 'true') {  // user is in database
							console.log('user is in database');
							store.dispatch(setUser(msgObj.google_id, true, msgObj.name, msgObj.organization_id, msgObj.isOrgAdmin, msgObj.isSuper));
							if (that.isJames(msgObj.google_id)) store.dispatch(setJames(true));
							store.dispatch(setSession('established'));
						} else {
							console.log('User not in pictographr DB');
						}
					} else {
						console.log('User has not installed app');
					}
			}

			if (typeof (msgObj.msgFrom) !== 'undefined' && msgObj.purpose === 'whenUserHasAccountThen') {
				console.log('whenUserHasAccountThen');
				store.dispatch(setUser(msgObj.google_id, true, msgObj.name, msgObj.organization_id, msgObj.isOrgAdmin, msgObj.isSuper));
				if (that.isJames(msgObj.google_id)) store.dispatch(setJames(true));
				store.dispatch(setSession('initiated'));
				clearInterval(that.app.poll.polling);
				//that.launchPictographrFile(that.fileId);
			}
		};
	}

	launchPictographrFile(createNew) {
		console.log(createNew);
		const fileId = store.getState().files.activeFileId;
		const google_id = store.getState().user.google_id;

		const pictographr = 'https://pictographr.com/app?';
		const templateFileUrl =	`${pictographr}state=%7B%22ids%22:%5B%22${fileId}
															%22%5D,%22action%22:%22open%22,%22userId%22:%22${google_id}%22%7D`;
		const newFileUrl = `${pictographr}state=%7B%22newSerial%22:%20%22${Math.random()}
															%22,%20%22action%22:%22create%22,%22userId%22:%22${google_id}%22%7D`;
		const win = window.open((createNew === true ? newFileUrl : templateFileUrl), '_blank');
		win.focus();
		//window.location = url;
	}

	popSignUpWindow(fileId, partnerId) {
		if (!this.hasPopped) {
			this.hasPopped = true;
			this.fileId = fileId;
			this.app = new App();
			console.log(partnerId);
			if (typeof (partnerId) !== 'undefined') {
				const obj = {
					partner_id: partnerId
				};
			}
			this.app.createNewPictographrUser(obj);
		}
	}
}
