<?php

class Experence 
{
    private $id;
    private $position;
    private $company;
    private $description;
    private $start_date;
    private $finish_date;

    public function get_id()
    {
        return $this->id;
    }
    public function get_position()
    {
        return $this->position;
    }
    public function get_company()
    {
        return $this->company;
    }
    public function get_description()
    {
        return $this->description;
    }
    public function get_start_date()
    {
        return $this->start_date;
    }
    public function get_finish_date()
    {
        return $this->finish_date;
    }


    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_position(string $position)
    {
        $this->position = $position;
    }
    public function set_company(string $company)
    {
        $this->company = $company;
    }
    public function set_description($description)
    {
        $this->description = $description;
    }
    public function set_start_date(string $start_date)
    {
        $this->start_date = $start_date;
    }
    public function set_finish_date(string $finish_date)
    {
        $this->finish_date = $finish_date;
    }
}
