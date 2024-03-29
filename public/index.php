<?php

  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  class Tools{

    public function object_to_array($data){
      if(is_array($data) || is_object($data)){
        $result = array();
        foreach($data as $key => $value)
        {
          $result[$key] = $this->object_to_array($value);
        }
        return $result;
      }
      return $data;
    }

  }

  $tools = new Tools();

  $SERVER_NAME = $_SERVER['SERVER_NAME'];
  $siteArr = explode('.', $SERVER_NAME);
  if(count($siteArr) == 3) $site = $siteArr[1];
  else $site = $siteArr[0];
  if(count($siteArr) == 3) $subdomain = $siteArr[0];

  $siteroot = '/var/www/teachingstash/public/sites/' . $site;

  $subdomainSegment = '/';
  if( isset($subdomain) ) {
    $subdomainSegment = '/subdomains/' . $subdomain . '/';
  }

  $pathToJson = $siteroot . $subdomainSegment . 'data.json';

  $jsonArray =  $tools->object_to_array(json_decode((file_get_contents( $pathToJson ))));
?>

<!DOCTYPE html>
<html>
  <head>

  <meta charset="utf-8">
  <title><?php echo $jsonArray['title']?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $jsonArray['description']?>">
  <meta name="keywords" content="<?php echo $jsonArray['keywords']?>">
  <meta name="author" content="John Doe">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="js/shoji/shoji.css">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://pictographr.com/js/lib/toast/jquery.toast.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">


    <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="57x57" href="favicons/apple-touch-icon-57x57.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="60x60" href="favicons/apple-touch-icon-60x60.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="72x72" href="favicons/apple-touch-icon-72x72.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="76x76" href="favicons/apple-touch-icon-76x76.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="114x114" href="favicons/apple-touch-icon-114x114.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="120x120" href="favicons/apple-touch-icon-120x120.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-touch-icon-144x144.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="152x152" href="favicons/apple-touch-icon-152x152.png?v=E669WPdJYb">
  <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon-180x180.png?v=E669WPdJYb">
  <link rel="icon" type="image/png" href="favicons/favicon-32x32.png?v=E669WPdJYb" sizes="32x32">
  <link rel="icon" type="image/png" href="favicons/android-chrome-192x192.png?v=E669WPdJYb" sizes="192x192">
  <link rel="icon" type="image/png" href="favicons/favicon-96x96.png?v=E669WPdJYb" sizes="96x96">
  <link rel="icon" type="image/png" href="favicons/favicon-16x16.png?v=E669WPdJYb" sizes="16x16">
  <link rel="manifest" href="favicons/manifest.json?v=E669WPdJYb">
  <link rel="mask-icon" href="favicons/safari-pinned-tab.svg?v=E669WPdJYb" color="#5bbad5">
  <link rel="shortcut icon" href="favicons/favicon.ico?v=E669WPdJYb">
  <meta name="apple-mobile-web-app-title" content="Pictographr">
  <meta name="application-name" content="Pictographr">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="msapplication-TileImage" content="favicons/mstile-144x144.png?v=E669WPdJYb">
  <meta name="msapplication-config" content="favicons/browserconfig.xml?v=E669WPdJYb">
  <meta name="theme-color" content="#ffffff">

  <!-- The following script will pull in an external Bluebird Promise Library,
       so that you will be able to use Promise on IE -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.3.5/bluebird.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  <!-- Must keep bootstrap to 3.2.0 cause 3.3.7 disables Shoji -->
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

      console.log('index.php');

      var subdomain = <?php
        $site = $_SERVER['SERVER_NAME'];
        $siteArr = explode('.', $site);
        if(count($siteArr) == 3) echo "'" .$siteArr[0] . "'";
        else echo 'undefined';
      ?>;

      var site = <?php
        $site = $_SERVER['SERVER_NAME'];
        $siteArr = explode('.', $site);
        if(count($siteArr) == 3) echo "'" .$siteArr[1] . "'";
        else echo "'" .$siteArr[0] . "'";
      ?>;

      var subdomainSegment = ( typeof(subdomain) !== 'undefined' && subdomain !== 'www'
          ? '/subdomains/' + subdomain + '/' : '/');

      var useDemo = <?php echo ( isset($jsonArray['useDemo']) && $jsonArray['useDemo'] !== '' ? $jsonArray['useDemo']: 1) ?>;

      var host = 'https://pictographr.com/';

      <?php if( !isset($jsonArray['useDemo']) ||
                $jsonArray['useDemo'] == 1){ ?>

        var resources = host
            + 'sites/teachingstash/';

      <?php } else { ?>

        var resources = host
            + 'sites/'
            + site
            + subdomainSegment;

      <?php } ?>

    </script>
    <?php $version=uniqid(); ?>
    <?php $version=223456; ?>
    <script src="app.min.js?version=<?php echo $version; ?>"></script>
  </body>
</html>
