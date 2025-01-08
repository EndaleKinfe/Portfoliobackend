<?php

class Project 
{
    private $id;
    private $title;
    private $year;
    private $description;
    private $repository_link;
    private $live_link;

    public function get_id()
    {
        return $this->id;
    }
    public function get_title()
    {
        return $this->title;
    }
    public function get_year()
    {
        return $this->year;
    }
    public function get_description()
    {
        return $this->description;
    }
    public function get_repository_link()
    {
        return $this->repository_link;
    }
    public function get_live_link()
    {
        return $this->live_link;
    }


    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_title(string $title)
    {
        $this->title = $title;
    }
    public function set_year(string $year)
    {
        $this->year = $year;
    }
    public function set_description( $description)
    {
        $this->description = $description;
    }
    public function set_repository_link(string $repository_link)
    {
        $this->repository_link = $repository_link;
    }
    public function set_live_link(string $live_link)
    {
        $this->live_link = $live_link;
    }
}
