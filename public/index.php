<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Templates for Teachers</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="js/shoji/shoji.css">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="https://pictographr.com/js/lib/toast/jquery.toast.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <!-- The following script will pull in an external Bluebird Promise Library,
       so that you will be able to use Promise on IE -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <!-- Must keey bootstrap to 3.2.0 cause 3.3.7 disables Shoji -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
  <script src="js/shoji/shoji.js"></script>
  <script src="https://pictographr.com/js/lib/toast/jquery.toast.min.js"></script>
  <script src="https://pictographr.com/partners/plugin.js"></script>
  </head>
  <body>
    <iframe
      style="display:none"
      id="iframe_messaging_conduit"
      width="0"
      height="0"
      tabindex="-1"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling="no"></iframe>
    <iframe
      style="display:none"
      id="iframe_logout"
      width="0"
      height="0"
      tabindex="-1"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling="no"></iframe>
    <div id="app"></div>
    <script type="text/javascript">
    	var test = '<?php echo $_SERVER['SERVER_NAME']; ?>';
    	console.log(test);
      var feed = (window.location.hostname.split('.')[0] === 'localhost' ?
          'teachingstash' : window.location.hostname.split('.')[0]);
      if(feed === 'www') feed = window.location.hostname.split('.')[1])
      var host = 'https://pictographr.com/';
      var feedersite = host
          + 'feed/'
          + feed
          + '/';
    </script>
    <!-- <script src="app.min.js"></script> -->
    <script type="text/javascript">
      var cacheBust = ['app.min.js'];
      for (var i=0; i < cacheBust.length; i++) {
           var el = document.createElement('script');
           el.src = cacheBust[i] + '?v=' + Math.random();
           document.getElementsByTagName('head')[0].appendChild(el);
      }
    </script>

  </body>
</html>
