<?php

interface Eatable {
    public function eat ();
}

abstract class Man {
    public $age;
    public $name;
    private $birthday_date;

    public function eat () {
        echo "Eating by right hand\n";
    }
    public final function sleep () {
        echo "Good night!\n";
    }
    public abstract function okey ();
}

class Student extends Man implements Eatable {
    public $studet_group;

    public function study () {
        $this->birthday_date = "12.34.5678";
    }
    public function eat () {
        return false;
    }
    public function okey () {
        Man::okey;
    }
}

class GoodStudent extends Student {
    public function eat () {
    Man::eat();
    }
}


//$man = new Man ();
function eat(Eatable $eatable) {
    $eatable->eat();
}
 
$student = new Student ();

var_dump($man);
var_dump($student);
eat($student);
?>