<?php

class Carosel 
{
    private $id;
    private $title;
    private $description;
    private $image_link;


    public function get_id()
    {
        return $this->id;
    }
    public function get_title()
    {
        return $this->title;
    }
    public function get_description()
    {
        return $this->description;
    }
    public function get_image_link()
    {
        return $this->image_link;
    }



    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_title(string $title)
    {
        $this->title = $title;
    }
    public function set_description(string $description)
    {
        $this->description = $description;
    }
    public function set_image_link(string $image_link)
    {
        $this->image_link = $image_link;
    }
}
