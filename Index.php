<?php
require_once "./autoloader.php";
$supported = ['users'];

$url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$url = explode("/", $url);

if (isset($url[3]) && $url[3] == "users"  && $url[4] = "list") { 
    $userc = new UserController();
    $userc->sendData();
}
else if(
    isset($url[3]) && $url[3] == "skills"  && $url[4] = "list"
){
    $skillc = new SkillController();
    $skillc->sendData();
}
else if(
    isset($url[3]) && $url[3] == "services"  && $url[4] = "list"
){
    $skillc = new ServiceController();
    $skillc->sendData();
} else if (
    isset($url[3]) && $url[3] == "projects"  && $url[4] = "list"
) {
    $skillc = new ProjectController();
    $skillc->sendData();
} else if (
    isset($url[3]) && $url[3] == "messages"  && $url[4] = "list"
) {
    $skillc = new MessageController();
    $skillc->sendData();
} else if (
    isset($url[3]) && $url[3] == "experences"  && $url[4] = "list"
) {
    $skillc = new ExperenceController();
    $skillc->sendData();
} else if (
    isset($url[3]) && $url[3] == "emails"  && $url[4] = "list"
) {
    $skillc = new EmailController();
    $skillc->sendData();
} else if (
    isset($url[3]) && $url[3] == "educations"  && $url[4] = "list"
) {
    $skillc = new EducationController();
    $skillc->sendData();
} else if (
    isset($url[3]) && $url[3] == "contacts"  && $url[4] = "list"
) {
    $skillc = new ContactController();
    $skillc->sendData();
}
else if(
    isset($url[3]) && $url[3] == "carosels"  && $url[4] = "list"
){
    $skillc = new CaroselController();
    $skillc->sendData();
} 
else{
    header("HTTP/1.1 404 Not Found");
}


