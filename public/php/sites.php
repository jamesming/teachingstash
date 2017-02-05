<?php
class Sites{
	public function __construct() {
		$this->__paramIntoProperties($_GET);
		$this->siteroot = __DIR__. '/sites/' . $this->site;
		$this->subdomainSegment = '/';
		if( $_SERVER['HTTP_HOST'] != 'localhost' ) $this->siteroot = '/var/www/teachingstash/public/sites/' . $this->site;
		if( isset($this->subdomain) ) {
			$this->subdomainSegment = '/subdomains/' . $this->subdomain . '/';
		}


		$url = 'http://staging.pictographr.com/sites/generateMenu?site=teachingstash&parentFolderId=0B1nKK3UKG5hjbk5Ba2dLNE9zUW8';
		echo '<pre>'; print_r( json_decode($this->getSiteJson($url)) ); echo '</pre>';
	}

	public function getSiteJsonZ(){
		$pathToJson = $this->siteroot . $this->subdomainSegment . 'site.json';
		echo $pathToJson;
		$this->JSON = file_get_contents($pathToJson);
		header('Access-Control-Allow-Origin: *');
		echo $this->JSON ;

	}

	public function getSiteJson($url){
   	$ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;

	}


	private function __paramIntoProperties($input) {
			foreach ($input as $k => $v) {
				$this->{$k} = $v;
			}
			return $this;
	}

}
new Sites();
?>