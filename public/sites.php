<?php
	class Sites{
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
			if($this->do == 'reset') $this->reset();
		}

		public function getSiteJson(){
			$this->JSON = file_get_contents($this->pathToJson);
			header('Access-Control-Allow-Origin: *');
			echo $this->JSON ;

		}

		public function setSiteJson(){
			$data['title'] = $this->title;
			$data['description'] = $this->description;
			$data['keywords'] = $this->keywords;
			$data['organization_id'] = $this->organization_id;
			$data['partner_id'] = $this->partner_id;
			$data['useDemo'] = $this->useDemo;
			$data['name'] = $this->organizationName;
			$this->JSON = file_put_contents($this->pathToJson, json_encode($data));
			$this->getSiteJson();
		}

		public function reset(){ // https://templatesforteachers.com/sites.php?do=reset&site=templatesforteachers

			$str = file_get_contents('http://pictographr.com/sites/listsubdomains/');

			$this->subdomainArray = json_decode($str, true);

			$data = [];

			echo "<pre>" . $this->subdomainArray . "</pre>";

			foreach( $this->subdomainArray  as $idx => $record){

				$data['subdomain_id'] = $record['id'];
				$data['name'] = $record['district'] . ' School District';
				$data['title'] = $data['name'] . " Graphic Templates";
				$data['description'] = 'Design Resources for Members of ' . $data['name'];
				$data['keywords'] = 'One, Two, Three, Four';
				$data['organization_id'] = '-1';
				$data['partner_id'] = '-1';
				$data['useDemo'] = '1';
				$this->subdomainSegment = '/subdomains/' . $record['name'] . '/';
				$this->subdomainPath = $this->siteroot . $this->subdomainSegment;
				$this->pathToJson =  $this->subdomainPath .  'data.json';

				$command = 'rm -f -R ' . $this->subdomainPath;
				echo "Executing: " . $command."<br />";
				exec($command .  ' 2>&1',$output,$retval);

				$command = 'mkdir ' . $this->subdomainPath;
				echo "Executing: " . $command."<br />";
				exec($command .  ' 2>&1',$output,$retval);

				echo "Writing into: " . $this->pathToJson. "</br>";

				file_put_contents($this->pathToJson, json_encode($data));
			}
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
