<?php

class MessageAccessor extends Database{
    public function get_message($id)
    {
        $query = "select * from messages where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $Messagearray = array();
        foreach ($result as $row) {
            $Message = new Message();
            $Message->set_email($row["email"]);
            $Message->set_first_name($row["first_name"]);
            $Message->set_last_name($row["last_name"]);
            $Message->set_messagetext($row["messages"]);
            $Message->set_id($row["id"]);
            $Messagearray[] = $Message;
        }
        return $Messagearray;
    }

    public function get_all_message()
    {
        $query = "select * from messages ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $Messagearray = array();
        foreach ($result as $row) {
            $Message = new Message();
            $Message->set_email($row["email"]);
            $Message->set_first_name($row["first_name"]);
            $Message->set_last_name($row["last_name"]);
            $Message->set_messagetext($row["messages"]);
            $Message->set_id($row["id"]);
            $Messagearray[] = $Message;
        }
        return $Messagearray;
    }

    public function create_message(Message $message)
    {
        $query = "INSERT INTO messages(email,first_name,last_name,messages ) VALUES(:email,:first_name,:last_name, :messagetext)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $em = $message->get_email();
        $fn = $message->get_first_name();
        $ln = $message->get_last_name();
        $mt = $message->get_messagetext();
        $statment->bindParam(":email", $em);
        $statment->bindParam(":first_name", $fn);
        $statment->bindParam(":last_name", $ln);
        $statment->bindParam(":messagetext", $mt);
        $statment->execute();
    }

    public function update_message(Message $message)
    {
        $query = "UPDATE messages SET email = :email ,first_name,= :first_name,last_name = :lastf_name , message_text = :messagetext WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $id  =$message->get_id();
        $em = $message->get_email();
        $fn =$message->get_first_name();
        $ln =$message->get_last_name();
        $mt = $message->get_messagetext();
        $statment->bindParam(":id", $id);
        $statment->bindParam(":email", $em );
        $statment->bindParam(":first_name", $fn );
        $statment->bindParam(":last_name",$ln );
        $statment->bindParam(":messagetext",$mt );

        $statment->execute();
    }

    public function delete_message($id)
    {
        $query = "DELETE from messages WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    } 
}