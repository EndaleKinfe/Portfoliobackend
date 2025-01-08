<?php

class Message 
{
    private $id;
    private $email;
    private $first_name;
    private $messagetext;
    private $last_name;



    public function get_id()
    {
        return $this->id;
    }
    public function get_email()
    {
        return $this->email;
    }
    public function get_first_name()
    {
        return $this->first_name;
    }
    public function get_last_name()
    {
        return $this->last_name;
    }
    public function get_messagetext()
    {
        return $this->messagetext;
    }



    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_email(string $email)
    {
        $this->email = $email;
    }
    public function set_first_name(string $first_name)
    {
        $this->first_name = $first_name;
    }
    public function set_last_name($last_name)
    {
        $this->last_name = $last_name;
    }
    public function set_messagetext(string $messagetext)
    {
        $this->messagetext = $messagetext;
    }
}
