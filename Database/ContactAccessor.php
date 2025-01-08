<?php

class ContactAccessor extends Database{
    public function get_contact($id)
    {
        $query = "select * from contacts where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $Contactarray = array();
        foreach ($result as $row) {
            $Contact = new Contact();
            $Contact->set_type($row["type"]);
            $Contact->set_contact_info($row["contact_info"]);
            $Contact->set_icon($row["icon"]);
            $Contact->set_id($row["id"]);
            $Contactarray[] = $Contact;
        }
        return $Contactarray;
    }

    public function get_all_contact()
    {
        $query = "select * from contacts ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $Contactarray = array();
        foreach ($result as $row) {
            $Contact = new Contact();
            $Contact->set_type($row["type"]);
            $Contact->set_contact_info($row["contact_info"]);
            $Contact->set_icon($row["icon"]);
            $Contact->set_id($row["id"]);
            $Contactarray[] = $Contact;
        }
        return $Contactarray;
    }

    public function create_contact(Contact $contact)
    {
        $query = "INSERT INTO contacts(type,contact_info,icon ) VALUES(:type,:contact_info, :icon)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":type", $contact->get_type());
        $statment->bindParam(":contact_info", $contact->get_contact_info());
        $statment->bindParam(":icon", $contact->get_icon());
        $statment->execute();
    }

    public function update_contact(Contact $contact)
    {
        $query = "UPDATE contacts SET type = :type ,contact_info= :contact_info,  icon = :icon WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $contact->get_id());
        $statment->bindParam(":type", $contact->get_type());
        $statment->bindParam(":contact_info", $contact->get_contact_info());
        $statment->bindParam(":icon", $contact->get_icon());

        $statment->execute();
    }

    public function delete_contact($id)
    {
        $query = "DELETE from contacts WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}