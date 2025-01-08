<?php
require_once "autoloader.php";

class EmailController extends Controller
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
        $this->user_access_object = new EmailAccessor();
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

            $data = $this->user_access_object->get_all_email();
            $all_emails = array();
            foreach ($data as $item) {
                $parsed_user = $this->parse_object($item);
                $all_emails[] = $parsed_user;
            }
            $this->response_data = json_encode($all_emails);
            $this->responseHeaders = ['Content-Type: application/json', 'HTTP/1.1 200 OK'];
        } catch (PDOException $ex) {
            $this->error_resopnse = json_encode(["message" => $ex->getMessage() . 'Something went wrong! Please contact support.']);
            $this->strErrorHeader = ['Content-Type: application/json', 'HTTP/1.1 500 Internal Server Error'];
        }
    }
    private function get_by_id($id)
    {
        try {

            $data = $this->user_access_object->get_email($id);
            $all_emails = array();
            foreach ($data as $item) {
                $parsed_email = $this->parse_object($item);
                $all_emails[] = $parsed_email;
            }
            $this->response_data = json_encode($all_emails);
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
            if(isset($u_request["name"]) && isset($u_request["email_text"]) && isset($u_request["is_subscribed"])) {
                $Email = new Email();
                $Email->set_email_text($u_request["email_text"]);
                $Email->set_name($u_request["name"]);
                $Email->set_is_subscribed($u_request["is_subscribed"]);
                $this->user_access_object->create_email($Email);
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
            if (isset($u_request["name"]) && isset($u_request["email_text"]) && isset($u_request["is_subscribed"])&& isset($u_request["id"])) {
                $Email = new Email();
                $Email->set_email_text($u_request["email_text"]);
                $Email->set_name($u_request["name"]);
                $Email->set_is_subscribed($u_request["is_subscribed"]);
                $Email->set_id($u_request["id"]);
                $this->user_access_object->update_email($Email);
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
                $this->user_access_object->delete_email($u_request["id"]);
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
            "name" => $data->get_name(),
            "emailText" => $data->get_email_text(),
            "isSubscribed" => $data->get_is_subscribed()
        ];
    }
}
