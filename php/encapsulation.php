<?php
class Man {
    public $name;
    private $age;

    public function __construct ($age, $name) {
        $this->name = $name;
        $this->age = $age;

    }

    public function __destruct () {
        echo "Object deleted\n";
    }

    public function step ($duration) {
        print($this->name. " - I was wolked ".$duration/$this->age." metters.\n");
    }
    
    public function setAge($age) {
        $this->age = $age <= 0 ? 1 : $age;
    }
}
$first = new Man (18, "Ivan");
$first->setAge(0);
//$first->name = "Ivan";
$first->step(10);

$second = new Man (23, "Jhon");
//$second->age = 23;
//$second->name = "Jhon";
$second->step(20);

var_dump($first);
var_dump($second);


?>