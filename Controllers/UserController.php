<?php
require_once "autoloader.php";

class UserController extends Controller{
    private $reqest_method;
    private $error_resopnse;
    private $response_data;
    private $responseHeaders;
    private $strErrorHeader;
    private $user_access_object;

    public function __construct()
    {
        $this->reqest_method = $_SERVER["REQUEST_METHOD"];
        $this->user_access_object = new UserAccessor();
    }
    public function sendData(){
        if($this->reqest_method == "GET"){
            $this->get();
        } else if ($this->reqest_method == "POST") {
            $this->push();
        } else if ($this->reqest_method == "PUT") {
            $this->put();
        }
        else if ($this->reqest_method == "DELETE") {
            $this->delete();
        }
        else{
            $this->error_resopnse =  json_encode(["message"=>'unsupported request method']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 422 Unprocessable Entity'];
        }

        if (!$this->error_resopnse) {
            $this->sendResponse($this->response_data, $this->responseHeaders);
        } else {
            $this->sendResponse( $this->error_resopnse, $this->strErrorHeader);
        }

    }
    private function get(){
        try{

            $data = $this->user_access_object->get_all_users();
            $all_users = array();
            foreach($data as $item){
                $parsed_user = $this->parse_object($item);
                $all_users[] = $parsed_user;
            }
            $this->response_data = json_encode($all_users);
            $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 200 OK'];
        }
        catch(PDOException $ex){
            $this->error_resopnse = json_encode(["message"=>$ex->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }

    }
    private function get_by_id($id){
        try {

            $data = $this->user_access_object->get_user($id);
            $all_users = array();
            foreach ($data as $item) {
                $parsed_user = $this->parse_object($item);
                $all_users[] = $parsed_user;
            }
            $this->response_data = json_encode($all_users);
            $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 200 OK'];
        } catch (PDOException $ex) {
            $this->error_resopnse = json_encode(["message" => $ex->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function push(){
        try {
            $u_request = file_get_contents("php://input");
            $u_request = json_decode($u_request, true);
            if (json_last_error()) {
                $this->error_resopnse = json_encode(["message"=>"Invalid Json sent" . json_last_error_msg()]);
                $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 400 Bad Request'];
                $u_request = [];
            }
            if (isset($u_request["username"])&& isset($u_request["password"]) && isset($u_request["email"])&& filter_var($u_request["email"], FILTER_VALIDATE_EMAIL) ) {
                $user = new User();
                $user->set_pass(password_hash($u_request["password"], PASSWORD_BCRYPT));
                $user->set_username($u_request["username"]);
                $user->set_email($u_request["email"]);
                $this->user_access_object->create_user($user);
                $this->response_data = json_encode(["message"=>"created successfull"]);
                $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 201 Created'];
            } else {
                $this->error_resopnse = json_encode(["message"=>'Something went wrong! Please contact support.']);
                $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 400 Bad Request'];
            }
        } catch (Exception $e) {
            $this->error_resopnse = json_encode(["message" => $e->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function put(){
        try {
            $u_request = file_get_contents("php://input");
            $u_request = json_decode($u_request, true);
            if (json_last_error()) {
                $this->error_resopnse = json_encode(["message" => "Invalid Json sent" . json_last_error_msg()]);
                $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 400 Bad Request'];
                $u_request = [];
            }
            if (isset($u_request["username"]) && isset($u_request["id"]) && isset($u_request["email"]) && filter_var($u_request["email"], FILTER_VALIDATE_EMAIL)) {
                $user = new User();
                $user->set_id($u_request["id"]);
                $user->set_username($u_request["username"]);
                $user->set_email($u_request["email"]);
                $this->user_access_object->update_user($user);
                $this->response_data = json_encode(["message" => "update successfull"]);
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
    private function delete(){
        try {
            $u_request = file_get_contents("php://input");
            $u_request = json_decode($u_request, true);
            if (json_last_error()) {
                $this->error_resopnse = json_encode(["message" => "Invalid Json sent" . json_last_error_msg()]);
                $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 400 Bad Request'];
                $u_request = [];
            }
            if (isset($u_request["id"])) {
                $this->user_access_object->delete_user(intval($u_request["id"]));
                
                $this->response_data = json_encode(["message" => "deleted successfull"]);
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
    private function parse_object($data){
        return [
            "id" => $data->get_id(),
            "username" => $data->get_username(),
            "email" => $data->get_email(),
            "loginTime" => $data->get_id()
        ];
    }

}