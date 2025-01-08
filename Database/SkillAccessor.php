<?php

require_once "autoloader.php";

class SkillAccessor extends Database{
    public function get_skill($id)
    {
        $query = "select * from skills where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $skillarray = array();
        foreach ($result as $row) {
            $skill = new Skill();
            $skill->set_name($row["name"]);
            $skill->set_expertise($row["expertiselevel"]);
            $skill->set_icon($row["iconname"]);
            $skillarray[] = $skill;
        }
        return $skillarray;
    }

    public function get_all_skill()
    {
        $query = "select * from skills ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $skillarray = array();
        foreach ($result as $row) {
            $skill = new Skill();
            $skill->set_id($row["id"]);
            $skill->set_name($row["name"]);
            $skill->set_expertise($row["expertiselevel"]);
            $skill->set_icon($row["iconname"]);
            $skillarray[] = $skill;
        }
        return $skillarray;
    }

    public function create_skill(Skill $skill)
    {
        $query = "INSERT INTO skills(name,expertiselevel,iconname ) VALUES(:name,:expertiselevel, :iconname)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":name", $skill->get_name());
        $statment->bindParam(":expertiselevel", $skill->get_expertise());
        $statment->bindParam(":iconname", $skill->get_icon());
        $statment->execute();
    }

    public function update_skill(Skill $skill)
    {
        $query = "UPDATE skills SET name = :name ,expertiselevel= :expertiselevel,  iconname = :iconname WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $skill->get_id());
        $statment->bindParam(":name", $skill->get_name());
        $statment->bindParam(":expertiselevel", $skill->get_expertise());
        $statment->bindParam(":iconname", $skill->get_icon());

        $statment->execute();
    }

    public function delete_skill(string $id)
    {
        $query = "DELETE skills WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}