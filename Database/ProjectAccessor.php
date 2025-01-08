<?php

class ProjectAccessor extends Database{
    public function get_project(int $id)
    {
        $query = "select * from projects where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $projectarray = array();
        foreach ($result as $row) {
            $project = new Project();
            $project->set_title($row["title"]);
            $project->set_year($row["year"]);
            $project->set_description($row["description"]);
            $project->set_repository_link($row["repository_link"]);
            $project->set_live_link($row["live_link"]);
            $project->set_id($row["id"]);
            $projectarray[] = $project;
        }
        return $projectarray;
    }

    public function get_all_project()
    {
        $query = "select * from projects ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $projectarray = array();
        foreach ($result as $row) {
            $project = new Project();
            $project->set_title($row["title"]);
            $project->set_year($row["year"]);
            $project->set_description($row["description"]);
            $project->set_repository_link($row["repository_link"]);
            $project->set_live_link($row["live_link"]);
            $project->set_id($row["id"]);
            $projectarray[] = $project;
        }
        return $projectarray;
    }

    public function create_project(Project $project)
    {
        $query = "INSERT INTO projects(title,year,repository_link, live_link, description ) VALUES(:title,:year, :repository_link, :live_link, :description)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":title", $project->get_title());
        $statment->bindParam(":year", $project->get_year());
        $statment->bindParam(":description", $project->get_description());
        $statment->bindParam(":repository_link", $project->get_repository_link());
        $statment->bindParam(":live_link", $project->get_live_link());
        $statment->execute();
    }

    public function update_project(Project $project)
    {
        $query = "UPDATE projects SET title = :title ,year= :year,  repository_link = :repository_link , live_link = :live_link , description = :description WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $project->get_id());
        $statment->bindParam(":title", $project->get_title());
        $statment->bindParam(":year", $project->get_year());
        $statment->bindParam(":description", $project->get_description());
        $statment->bindParam(":repository_link", $project->get_repository_link());
        $statment->bindParam(":live_link", $project->get_live_link());
        $statment->execute();
    }

    public function delete_project($id)
    {
        $query = "DELETE from projects WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}