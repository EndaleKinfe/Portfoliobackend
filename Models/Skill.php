<?php

class Skill 
{
    private $id;
    private $name;
    private $expertiselevel;
    private $iconname;

    public function get_id()
    {
        return $this->id;
    }
    public function get_name()
    {
        return $this->name;
    }
    public function get_expertise()
    {
        return $this->expertiselevel;
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
    public function set_expertise(string $expertiselevel)
    {
        $this->expertiselevel = $expertiselevel;
    }
    public function set_icon(string $iconname)
    {
        $this->iconname = $iconname;
    }
   

    
}
