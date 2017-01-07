import {Observable} from 'rxjs/Rx';

export default class CrossDomService {

	constructor(){

		this.nameOfThisFile = 'crossdomfile';
	  this.initiateMessaging();

	}

	testObserable(){

	  var values: Array<number> = [];
	  var anyErrors: boolean;
	  var finished: boolean;

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
      	function( value ){
      		console.log( value );
      	},
      	function( error ){
      		console.log( error );
      	},
      	function(){
      		console.log('observable completed');
      	}
      );

	}

	initiateMessaging(){

     	tools.crossdom.init('iframe_messaging_conduit', 'https://pictographr.com/partners/iframeSrcPostMsgConduit.html');
     	this.setReceiver();

	}

	setReceiver(){

		var that = this;


		tools.crossdom.receive = function(msg) {

			if( typeof( msg.data.split ) != 'function') return;

			var msgObj = this.unserialize(msg.data.split(','));

			if( typeof( msgObj.msgFrom) != 'undefined' && msgObj.purpose == 'retrieveGoogleIdDomain' ){ // ONLY LISTEN FOR MSG FROM PICTOGRAPHR

			  //console.log(JSON.stringify(  msgObj   , null, 2 ));

			  if( typeof( msgObj.google_id ) != 'undefined')   {

			  		console.log(msgObj.google_id);}

			  if( msgObj.appInstalled == 'true'){

			      if( msgObj.exist == 'true'){  // user is in database

			        console.log('user is in database');
			        that.google_id = msgObj.google_id;

			      }else{

			        console.log('not in pictographr DB');

			      };

			  } else{

			      console.log('user has not installed app');

			  };

			};


			if( typeof( msgObj.msgFrom) != 'undefined' && msgObj.purpose == 'whenUserHasAccountThen' ){

				console.log('whenUserHasAccountThen');
				clearInterval(that.poll3sec);

				that.google_id = msgObj.google_id;
			};

		};

	}

	userIsLoggedIn(){
		return ( typeof(this.google_id) != 'undefined' );
	}

	launchPictographrFile( fileId: string){

		this.fileId = fileId;

		var url = 'https://pictographr.com/app?new_width=620&new_height=500&pollrefresh=true&state=%7B%22ids%22:%5B%22'
				+ this.fileId + '%22%5D,%22action%22:%22open%22,%22userId%22:%22' + this.google_id + '%22%7D';

		var msgObj: any;
		msgObj = {};
		msgObj.msgFrom = this.nameOfThisFile;
		msgObj['purpose'] = 'edit';
		msgObj['google_id'] = this.google_id;
		msgObj['fileId'] = this.fileId;
		tools.crossdom.send(msgObj);

	}

	popSignUpWindow( callback ){

		var that = this;

    let app = new App();

    app.createNewPictographrUser();

	}
}
