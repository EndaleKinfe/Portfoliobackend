<?php
require_once "autoloader.php";

class EducationController extends Controller
{
    private $reqest_method;
    private $error_resopnse;
    private $response_data;
    private $responseHeaders;
    private $strErrorHeader;
    private $user_access_object;

    public function __construct()
    {
        $this->reqest_method = $_SERVER["REQUEST_METHOD"];
        $this->user_access_object = new EducationAccessor();
    }
    public function sendData()
    {
        if ($this->reqest_method == "GET") {
            $this->get();
        } else if ($this->reqest_method == "POST") {
            $this->push();
        } else if ($this->reqest_method == "PUT") {
            $this->put();
        } else if ($this->reqest_method == "DELETE") {
            $this->delete();
        } else {
            $this->error_resopnse =  json_encode(["message" => 'unsupported request method']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 422 Unprocessable Entity'];
        }

        if (!$this->error_resopnse) {
            $this->sendResponse($this->response_data, $this->responseHeaders);
        } else {
            $this->sendResponse($this->error_resopnse, $this->strErrorHeader);
        }
    }
    private function get()
    {
        try {

            $data = $this->user_access_object->get_all_education();
            $all_educations = array();
            foreach ($data as $item) {
                $parsed_user = $this->parse_object($item);
                $all_educations[] = $parsed_user;
            }
            $this->response_data = json_encode($all_educations);
            $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 200 OK'];
        } catch (PDOException $ex) {
            $this->error_resopnse = json_encode(["message" => $ex->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function get_by_id($id)
    {
        try {

            $data = $this->user_access_object->get_education($id);
            $all_educations = array();
            foreach ($data as $item) {
                $parsed_education = $this->parse_object($item);
                $all_educations[] = $parsed_education;
            }
            $this->response_data = json_encode($all_educations);
            $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 200 OK'];
        } catch (PDOException $ex) {
            $this->error_resopnse = json_encode(["message" => $ex->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function push()
    {
        try {
            $u_request = file_get_contents("php://input");
            $u_request = json_decode($u_request, true);
            if (json_last_error()) {
                $this->error_resopnse = json_encode(["message" => "Invalid Json sent" . json_last_error_msg()]);
                $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 400 Bad Request'];
                $u_request = [];
            }
            if
            (
               isset($u_request["type"]) && isset($u_request["institution"]) && isset($u_request["details"]) 
               && isset($u_request["gpa"]) && isset($u_request["start_date"]) && isset($u_request["finish_date"])
            ) {
                $Education = new Education();
                $Education->set_type($u_request["type"]);
                $Education->set_institution($u_request["institution"]);
                $Education->set_details($u_request["details"]);
                $Education->set_gpa($u_request["gpa"]);
                $Education->set_study_field($u_request["study_field"]);
                $Education->set_start_date($u_request["start_date"]);
                $Education->set_finish_date($u_request["finish_date"]);
                $this->user_access_object->create_education($Education);
                $this->response_data = json_encode(["message" => "created successfull"]);
                $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 201 Created'];
            } else {
                $this->error_resopnse = json_encode(["message" => 'Something went wrong! Please contact support.']);
                $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 400 Bad Request'];
            }
        } catch (Exception $e) {
            $this->error_resopnse = json_encode(["message" => $e->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function put()
    {
        try {
            $u_request = file_get_contents("php://input");
            $u_request = json_decode($u_request, true);
            if (json_last_error()) {
                $this->error_resopnse = json_encode(["message" => "Invalid Json sent" . json_last_error_msg()]);
                $this->strErrorHeader = ['HTTP/1.1 400 Bad Request'];
                $u_request = [];
            }
            if
            (
                isset($u_request["id"]) && isset($u_request["type"]) && isset($u_request["institution"]) &&
                isset($u_request["details"]) && isset($u_request["gpa"]) && isset($u_request["start_date"])
                && isset($u_request["finish_date"])
            ) {
                $Education = new Education();
                $Education->set_type($u_request["type"]);
                $Education->set_institution($u_request["institution"]);
                $Education->set_details($u_request["details"]);
                $Education->set_gpa($u_request["gpa"]);
                $Education->set_start_date($u_request["start_date"]);
                $Education->set_finish_date($u_request["finish_date"]);
                $Education->set_id($u_request["id"]);
                $this->user_access_object->update_education($Education);
                $this->response_data = json_encode(["message" => "update successfull"]);
                $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 201 Created'];
            } else {
                $this->error_resopnse = json_encode(["message" => 'Something went wrong! Please contact support.']);
                $this->strErrorHeader = ['HTTP/1.1 400 Bad Request'];
            }
        } catch (Exception $e) {
            $this->error_resopnse = json_encode(["message" => $e->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function delete()
    {
        try {
            $u_request = file_get_contents("php://input");
            $u_request = json_decode($u_request, true);
            if (json_last_error()) {
                $this->error_resopnse = json_encode(["message" => "Invalid Json sent" . json_last_error_msg()]);
                $this->strErrorHeader = ['HTTP/1.1 400 Bad Request'];
                $u_request = [];
            }
            if (isset($u_request["id"])) {
                $this->user_access_object->delete_education($u_request["id"]);
                $this->response_data = json_encode(["message" => "deleted successfull"]);
                $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 201 Created'];
            } else {
                $this->error_resopnse = json_encode(["message" => 'Something went wrong! Please contact support.']);
                $this->strErrorHeader = ['HTTP/1.1 400 Bad Request'];
            }
        } catch (Exception $e) {
            $this->error_resopnse = json_encode(["message" => $e->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function parse_object($data)
    {
        return [
            "id" => $data->get_id(),
            "type" => $data->get_type(),
            "institution" => $data->get_institution(),
            "gpa" => $data->get_gpa(),
            "studyField" => $data->get_study_field(),
            "startDate" => $data->get_start_date(),
            "finishDate" => $data->get_finish_date()
        ];
    }
}