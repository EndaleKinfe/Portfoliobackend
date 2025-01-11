<?php
declare(strict_types=1);
require_once "autoloader.php";

class UserAccessor extends Database{
    public function get_user()
    {
        $query = "select * from users where username = :username";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $user = new User(); 
        $user->set_username($result["username"]);
        $user->set_email($result["email"]);
        $user->set_id($result["id"]);
        $user->set_login($result["login_time"]);
        return $user;
    }

    public function get_all_users()
    {
        $query = "select * from users";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $userarray = array();
        foreach($result as $row){
            $user = new User(); 
            $user->set_username($row["username"]);
            $user->set_email($row["email"]);
            $user->set_id($row["id"]);
            $userarray[] = $user;
        }
        return $userarray;
    }

    public function create_user(User $user)
    {
        $query = "INSERT INTO users(username, password, email) VALUES(:username, :password, :email)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $pa = $user->get_pass();
        $un =  $user->get_username();
        $em = $user->get_email();
        $statment->bindParam(":username", $un);
        $statment->bindParam(":email", $em);
        $statment->bindParam(":password", $pa);
        $statment->execute();
    }

    public function update_user(User $user)
    {
        $query = "UPDATE users SET username = :username, email = :email WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $id = $user->get_id();
        $un =  $user->get_username();
        $em = $user->get_email();
        $statment->bindParam(":id", $id);
        $statment->bindParam(":username",$un);
        $statment->bindParam(":email", $em);
        $statment->execute();
    }

    public function delete_user(int $id)
    {
        $query = "DELETE from users WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}