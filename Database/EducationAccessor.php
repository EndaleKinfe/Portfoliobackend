<?php

class EducationAccessor extends Database{
    public function get_education($id)
    {
        $query = "select * from educations where id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
        $result = $statment->fetch(PDO::FETCH_ASSOC);
        $Educationarray = array();
        foreach ($result as $row) {
            $Education = new Education();
            $Education->set_type($row["type"]);
            $Education->set_institution($row["institution"]);
            $Education->set_details($row["details"]);
            $Education->set_gpa($row["gpa"]);
            $Education->set_study_field($row["study_field"]);
            $Education->set_start_date($row["start_date"]);
            $Education->set_finish_date($row["finish_date"]);
            $Education->set_id($row["id"]);
            $Educationarray[] = $Education;
        }
        return $Educationarray;
    }

    public function get_all_education()
    {
        $query = "select * from educations ";
        $this->connect();
        $statment  = $this->connection->query($query);
        $statment->execute();
        $result = $statment->fetchAll(PDO::FETCH_ASSOC);
        $Educationarray = array();
        foreach ($result as $row) {
            $Education = new Education();
            $Education->set_type($row["type"]);
            $Education->set_institution($row["institution"]);
            $Education->set_details($row["details"]);
            $Education->set_gpa($row["gpa"]);
            $Education->set_study_field($row["study_field"]);
            $Education->set_start_date($row["start_date"]);
            $Education->set_finish_date($row["finish_date"]);
            $Education->set_id($row["id"]);
            $Educationarray[] = $Education;
        }
        return $Educationarray;
    }

    public function create_education(Education $education)
    {
        $query = "INSERT INTO educations(type,institution, gpa, study_field, start_date, finish_date, details ) VALUES(:type,:institution, :gpa, :study_field, :start_date, :finish_date, :details)";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":type", $education->get_type());
        $statment->bindParam(":details", $education->get_details());
        $statment->bindParam(":institution", $education->get_institution());
        $statment->bindParam(":gpa", $education->get_gpa());
        $statment->bindParam(":study_field", $education->get_study_field());
        $statment->bindParam(":start_date", $education->get_start_date());
        $statment->bindParam(":finish_date", $education->get_finish_date());
        $statment->execute();
    }

    public function update_education(Education $education)
    {
        $query = "UPDATE educations SET type = :type ,institution= :institution, gpa = :gpa, study_field = :study_field, start_date = :start_date , finish_date = :finish_date, details = :details  WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $education->get_id());
        $statment->bindParam(":type", $education->get_type());
        $statment->bindParam(":details", $education->get_details());
        $statment->bindParam(":institution", $education->get_institution());
        $statment->bindParam(":gpa", $education->get_gpa());
        $statment->bindParam(":study_field", $education->get_study_field());
        $statment->bindParam(":start_date", $education->get_start_date());
        $statment->bindParam(":finish_date", $education->get_finish_date());
        $statment->execute();
    }

    public function delete_education($id)
    {
        $query = "DELETE from educations WHERE id = :id";
        $this->connect();
        $statment  = $this->connection->prepare($query);
        $statment->bindParam(":id", $id);
        $statment->execute();
    }
}