<?php

class Man {
    public $age;
    public $name;
    private $birthday_date;

    public function eat () {
        echo "Eating by right hand\n";
    }
    public final function sleep () {
        echo "Good night!\n";
    }
}

class Student extends Man {
    public $studet_group;

    public function study () {
        $this->birthday_date = "12.34.5678";
    }
    public function eat () {
        return false;
    }
}

class GoodStudent extends Student {
    public function eat () {
    Man::eat();
    }
}

function eat (Man $man) {
    $man->eat();
}

$man = new Man ();
$student = new Student ();

var_dump($man);
var_dump($student);
eat($student);
?>