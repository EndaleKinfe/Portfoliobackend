<?php

class Service 
{
    private $id;
    private $name;
    private $description;
    private $iconname;


    public function get_id()
    {
        return $this->id;
    }
    public function get_name()
    {
        return $this->name;
    }
    public function get_description()
    {
        return $this->description;
    }
    public function get_icon()
    {
        return $this->iconname;
    }



    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_name(string $name)
    {
        $this->name = $name;
    }
    public function set_description(string $description)
    {
        $this->description = $description;
    }
    public function set_icon(string $iconname)
    {
        $this->iconname = $iconname;
    }
   

}
