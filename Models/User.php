<?php

class User {
    private $id;
    private $username;
    private $email;
    private $pass;
    private $logintime; 
    public function get_id(){
        return $this->id;
    }
    public function get_email()
    {
        return $this->email;
    }
    public function get_pass()
    {
        return $this->pass;
    }
    public function get_login()
    {
        return $this->logintime;
    }
    public function get_username()
    {
        return $this->username;
    }


    public function set_id(int $id)
    {
        $this->id = $id;
    }
    public function set_email(string $email)
    {
        $this->email = $email;
    }
    public function set_pass(string $pass)
    {
        $this->pass = $pass;
    }
    public function set_login(DateTime $logintime)
    {
        $this->logintime = $logintime;
    }
    public function set_username(string $username)
    {
        $this->username = $username;
    }


}