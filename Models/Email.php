<?php

class Email 
{
    private $id;
    private $name;
    private $email_text;
    private $is_subscribed;

    public function get_id()
    {
        return $this->id;
    }
    public function get_name()
    {
        return $this->name;
    }
    public function get_email_text()
    {
        return $this->email_text;
    }
    public function get_is_subscribed()
    {
        return $this->is_subscribed;
    }



    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_name(string $name)
    {
        $this->name = $name;
    }
    public function set_email_text(string $email_text)
    {
        $this->email_text = $email_text;
    }
    public function set_is_subscribed(string $is_subscribed)
    {
        $this->is_subscribed = $is_subscribed ;
    }
   
}
