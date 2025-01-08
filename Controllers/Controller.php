<?php

class Controller
{

    public function __call($name, $arguments)
    {
        $this->sendResponse('', "http/1.1 404 Not Found");
    }

    public function getUrlSegment($url)
    {
        $url = parse_url($url, PHP_URL_PATH);
        $url = explode("/", $url);
        return $url;
    }

    public function getqueries()
    {
        return parse_str($_SERVER["QUERY_STRING"], $queries);
    }

    public function sendResponse($data, $httpHeaders = array())
    {
        header_remove("Set-Cookie");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PUT , DELETE");
        header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");
        if (is_array($httpHeaders) && count($httpHeaders)) {
            foreach ($httpHeaders as $header) {
                header($header);
            }
        }
        echo $data;
        exit;
    }
}
