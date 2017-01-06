import React from "react"
import { connect } from "react-redux"
import { fetchTemplates } from "../actions/templatesActions"
import { addFiles } from "../actions/filesActions"
import {Observable} from 'rxjs/Rx';
import Folder from "./Folder"
import File from "./File"

@connect((store) => {
  return {
    templates: store.templates.templates,
    files: store.files.files,
    folder_title: store.files.folder_title,
  };
})

export default class Layout extends React.Component {


  componentWillMount() {

    this.getSession();

    this.props.dispatch(fetchTemplates())

    setTimeout( ()=>{
      this.props.dispatch(addFiles(this.props.templates[0].files, this.props.templates[0].title));
    }, 1000);

  }

  getSession(){

    var that = this;

    const nameOfThisFile = 'crossdomfile';

    tools.crossdom.init('iframe_messaging_conduit', 'https://pictographr.com/partners/iframeSrcPostMsgConduit.html');

    tools.crossdom.receive = function(msg) {

      if( typeof( msg.data.split ) != 'function') return;

      var msgObj = this.unserialize(msg.data.split(','));

      if( typeof( msgObj.msgFrom) != 'undefined' && msgObj.purpose == 'retrieveGoogleIdDomain' ){ // ONLY LISTEN FOR MSG FROM PICTOGRAPHR

        console.log(JSON.stringify(  msgObj   , null, 2 ));

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

  render() {

    const { templates, files, folder_title } = this.props;

    const FoldersComponents = templates.map( (folder) => {
      return <Folder key={ folder.id } folder={ folder } dispatch={this.props.dispatch}/>
    })

    const FilesComponents = files.map( (file) => {
      return <File key={file.id} file={file} dispatch={this.props.dispatch}/>
    })

    return (
      <div class="container-fluid ">
        <div class="row">
          <div class="col-md-3">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
             {FoldersComponents}
            </div>
          </div>
          <div class="col-md-9">
            <div><h3>TESTING JAMES</h3></div>
            <div><h3>{folder_title}</h3></div>
            {FilesComponents}
          </div>
        </div>
      </div>
    )
  }
}
