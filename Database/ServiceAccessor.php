<?php

class ServiceAccessor extends Database{
    public function get_service($id)
    {
        $query = "select * from services where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        foreach ($result as $row) {
            $service = new Service();
            $service->set_name($row["name"]);
            $service->get_description($row["description"]);
            $service->set_icon($row["iconname"]);
            $servicearray[] = $service;
        }
        return $servicearray;
    }

    public function get_all_service()
    {
        $query = "select * from services ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $servicearray = array();
        foreach ($result as $row) {
            $service = new Service();
            $service->set_id($row["id"]);
            $service->set_name($row["name"]);
            $service->get_description($row["description"]);
            $service->set_icon($row["iconname"]);
            $servicearray[] = $service;
        }
        return $servicearray;
    }

    public function create_service(Service $service)
    {
        $query = "INSERT INTO services(name,description,iconname ) VALUES(:name,:description, :iconname)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":name", $service->get_name());
        $statment->bindParam(":description", $service->get_description());
        $statment->bindParam(":iconname", $service->get_icon());
        $statment->execute();
    }

    public function update_service(Service $service)
    {
        $query = "UPDATE services SET name = :name ,description= :description,  iconname = :iconname WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $service->get_id());
        $statment->bindParam(":name", $service->get_name());
        $statment->bindParam(":description", $service->get_description());
        $statment->bindParam(":iconname", $service->get_icon());

        $statment->execute();
    }

    public function delete_service($id)
    {
        $query = "DELETE from services WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}