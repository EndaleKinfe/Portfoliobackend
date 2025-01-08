<?php
declare(strict_types=1);
class Database{
    private string $db_name = "portfolio";
    private string $host = "localhost";
    private string $user = 'end';
    private string $pass = 'endu123456';
    protected object $connection ;

    protected  function connect(){
        try{
        $this->connection  = new PDO("mysql:host=$this->host;dbname=$this->db_name",$this->user,$this->pass);
        $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch(PDOException $e){
            die("Database Error". $e->getMessage());
        }
    }
}