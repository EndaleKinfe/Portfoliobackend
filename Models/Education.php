<?php

class Education{
    private $id;
    private $type;
    private $institution;
    private $gpa;
    private $study_field;
    private $start_date;
    private $finish_date;
    private $details;


    public function get_id()
    {
        return $this->id;
    }
    public function get_type()
    {
        return $this->type;
    }
    public function get_institution()
    {
        return $this->institution;
    }
    public function get_gpa()
    {
        return $this->gpa;
    }
    public function get_start_date()
    {
        return $this->start_date;
    }
    public function get_finish_date()
    {
        return $this->finish_date;
    }

    public function get_details()
    {
        return $this->details;
    }
    public function get_study_field()
    {
        return $this->study_field;
    }


    public function set_details( $details)
    {
        $this->details = $details;
    }
    public function set_study_field( $study_field)
    {
        $this->study_field = $study_field;
    }

    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_type(string $type)
    {
        $this->type = $type;
    }
    public function set_institution(string $institution)
    {
        $this->institution = $institution;
    }
    public function set_gpa($gpa)
    {
        $this->gpa = $gpa;
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