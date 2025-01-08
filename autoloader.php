<?php

spl_autoload_register(function($class){
    $data = ["Models", "Controllers", "Database"];
    autoload($class, $data);
});

function autoload(string $class,array $dirs){
    $class_name = substr($class,  strrpos($class, "\\"));
    foreach($dirs as $dir){
        $classes = "$dir/".ucfirst($class_name).".php";
        if(file_exists($classes)) require_once $classes;
    }
}