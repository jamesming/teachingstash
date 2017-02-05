<?php
  class Sites {
    public function __construct() {
      $this->__paramIntoProperties($_GET);
      $this->subdomainSegment = '/';
      $this->siteroot = '/var/www/teachingstash/public/sites/' . $this->site;
      if( isset($this->subdomain) ) {
              $this->subdomainSegment = '/subdomains/' . $this->subdomain . '/';
      }

      $this->pathToJson = $this->siteroot . $this->subdomainSegment . 'data.json';

      if($this->do == 'get') $this->getSiteJson();
      if($this->do == 'set') $this->setSiteJson();

    }

    public function getSiteJson(){
      $this->JSON = file_get_contents($this->pathToJson);
      header('Access-Control-Allow-Origin: *');
      echo $this->JSON ;

    }

		public function setSiteJson(){
			$data['title'] = $this->title;
			$data['description'] = $this->discription;
			$data['keywords'] = $this->keywords;
			$this->JSON = file_put_contents($this->pathToJson, $data);
			header('Access-Control-Allow-Origin: *');
			echo json_encode($this->data);
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
