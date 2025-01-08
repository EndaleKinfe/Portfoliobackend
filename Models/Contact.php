<?php

class Contact 
{
    private $id;
    private $type;
    private $contact_info;
    private $icon;


    public function get_id()
    {
        return $this->id;
    }
    public function get_type()
    {
        return $this->type;
    }
    public function get_contact_info()
    {
        return $this->contact_info;
    }
    public function get_icon()
    {
        return $this->icon;
    }



    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_type(string $type)
    {
        $this->type = $type;
    }
    public function set_contact_info(string $contact_info)
    {
        $this->contact_info = $contact_info;
    }
    public function set_icon(string $icon)
    {
        $this->icon = $icon;
    }
}
