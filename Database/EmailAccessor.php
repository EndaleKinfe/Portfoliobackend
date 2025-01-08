<?php

class EmailAccessor extends Database{
    public function get_email($id)
    {
        $query = "select * from emails where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $Emailarray = array();
        foreach ($result as $row) {
            $Email = new Email();
            $Email->set_email_text($row["email"]);
            $Email->set_name($row["name"]);
            $Email->set_is_subscribed($row["is_subscribed"]);
            $Email->set_id($row["id"]);
            $Emailarray[] = $Email;
        }
        return $Emailarray;
    }

    public function get_all_email()
    {
        $query = "select * from emails ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $Emailarray = array();
        foreach ($result as $row) {
            $Email = new Email();
            $Email->set_email_text($row["email"]);
            $Email->set_name($row["name"]);
            $Email->set_is_subscribed($row["is_subscribed"]);
            $Email->set_id($row["id"]);
            $Emailarray[] = $Email;
        }
        return $Emailarray;
    }

    public function create_email(Email $email)
    {
        $query = "INSERT INTO emails(name,email,is_subscribed ) VALUES(:name,:email_text, :issubscribed)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":name", $email->get_name());
        $statment->bindParam(":email_text", $email->get_email_text());
        $statment->bindParam(":issubscribed", $email->get_is_subscribed());
        $statment->execute();
    }

    public function update_email(Email $email)
    {
        $query = "UPDATE emails SET name = :name ,email= :email_text,  is_subscribed = :issubscribed WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $email->get_id());
        $statment->bindParam(":name", $email->get_name());
        $statment->bindParam(":email_text", $email->get_email_text());
        $statment->bindParam(":issubscribed", $email->get_is_subscribed());

        $statment->execute();
    }

    public function delete_email($id)
    {
        $query = "DELETE from emails WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}