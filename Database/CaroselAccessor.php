<?php

class CaroselAccessor extends Database {
    public function get_carsol($id)
    {
        $query = "select * from carsols where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $Caroselarray = array();
        foreach ($result as $row) {
            $Carosel = new Carosel();
            $Carosel->set_title($row["title"]);
            $Carosel->set_description($row["description"]);
            $Carosel->set_image_link($row["image_link"]);
            $Carosel->set_id($row["id"]);
            $Caroselarray[] = $Carosel;
        }
        return $Caroselarray;
    }

    public function get_all_carsol()
    {
        $query = "select * from carsols ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $Caroselarray = array();
        foreach ($result as $row) {
            $Carosel = new Carosel();
            $Carosel->set_title($row["title"]);
            $Carosel->set_description($row["description"]);
            $Carosel->set_image_link($row["image_link"]);
            $Carosel->set_id($row["id"]);
            $Caroselarray[] = $Carosel;
        }
        return $Caroselarray;
    }

    public function create_carsol(Carosel $carosel)
    {
        $query = "INSERT INTO carsols(title,description,image_link ) VALUES(:title,:description, :image_link)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":title", $carosel->get_title());
        $statment->bindParam(":description", $carosel->get_description());
        $statment->bindParam(":image_link", $carosel->get_image_link());
        $statment->execute();
    }

    public function update_carsol(Carosel $carosel)
    {
        $query = "UPDATE carsols SET title = :title ,description= :description,  image_link = :image_link WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $carosel->get_id());
        $statment->bindParam(":title", $carosel->get_title());
        $statment->bindParam(":description", $carosel->get_description());
        $statment->bindParam(":image_link", $carosel->get_image_link());

        $statment->execute();
    }

    public function delete_carsol($id)
    {
        $query = "DELETE from carsols WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}
