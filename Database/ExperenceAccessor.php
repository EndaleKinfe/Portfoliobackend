<?php

class ExperenceAccessor extends Database{
    public function get_experence($id)
    {
        $query = "select * from experences where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $Experencearray = array();
        foreach ($result as $row) {
            $Experence = new Experence();
            $Experence->set_position($row["position"]);
            $Experence->set_company($row["company"]);
            $Experence->set_description($row["description"]);
            $Experence->set_start_date($row["start_date"]);
            $Experence->set_finish_date($row["finish_date"]);
            $Experence->set_id($row["id"]);
            $Experencearray[] = $Experence;
        }
        return $Experencearray;
    }

    public function get_all_experence()
    {
        $query = "select * from experences ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $Experencearray = array();
        foreach ($result as $row) {
            $Experence = new Experence();
            $Experence->set_position($row["position"]);
            $Experence->set_company($row["company"]);
            $Experence->set_description($row["description"]);
            $Experence->set_start_date($row["start_date"]);
            $Experence->set_finish_date($row["finish_date"]);
            $Experence->set_id($row["id"]);
            $Experencearray[] = $Experence;
        }
        return $Experencearray;
    }

    public function create_experence(Experence $experence)
    {
        $query = "INSERT INTO experences(position,company, start_date, finish_date,description ) VALUES(:position,:company,:start_date, :finish_date, :description)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":position", $experence->get_position());
        $statment->bindParam(":company", $experence->get_company());
        $statment->bindParam(":description", $experence->get_description());
        $statment->bindParam(":start_date", $experence->get_start_date());
        $statment->bindParam(":finish_date", $experence->get_finish_date());
        $statment->execute();
    }

    public function update_experence(Experence $experence)
    {
        $query = "UPDATE experences SET position = :position ,company= :company,  start_date = :start_date , finish_date = :finish_date , description = :description WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $experence->get_id());
        $statment->bindParam(":position", $experence->get_position());
        $statment->bindParam(":company", $experence->get_company());
        $statment->bindParam(":description", $experence->get_description());
        $statment->bindParam(":start_date", $experence->get_start_date());
        $statment->bindParam(":finish_date", $experence->get_finish_date());
        $statment->execute();
    }

    public function delete_experence($id)
    {
        $query = "DELETE from experences WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}