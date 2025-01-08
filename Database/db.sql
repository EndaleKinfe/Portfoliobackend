create table users(
    id int primary key AUTO_INCREMENT,
    username varchar(100) not null,
    email varchar(100) not null,
    password varchar(255) not null,
    login_time datetime 
);

create table skills(
    id int primary key AUTO_INCREMENT,
    name varchar(255) not null,
    expertiselevel varchar(255) not null,
    iconname varchar(255) not null
);

create table services(
    id int primary key AUTO_INCREMENT,
    name varchar(255) not null,
    description varchar(255) not null,
    iconname varchar(255) not null
);

create table projects(
    id int primary key AUTO_INCREMENT,
    title varchar(255) not null,
    year varchar(255) not null,
    description text not null,
    repository_link varchar(255) not null,
    live_link varchar(255) not null
);

create table messages(
    id int primary key AUTO_INCREMENT,
    email varchar(255) not null,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    messages text not null
)

create table experences(
    id int primary key AUTO_INCREMENT,
    position varchar(255) not null,
    start_date datetime not null,
    finish_date datetime ,
    company varchar(255) not null,
    description text not null
);

create table educations(
    id int primary key AUTO_INCREMENT,
    type varchar(255) not null,
    start_date datetime not null,
    finish_date datetime ,
    institution varchar(255) not null,
    details text not null,
    study_field varchar(255) not null,
    gpa float 
)

create table emails(
    id int primary key AUTO_INCREMENT,
    name varchar(255) not null,
    email varchar(255) not null,
    is_subscribed boolean not null
);

create table contacts(
    id int primary key AUTO_INCREMENT,
    type varchar(255) not null,
    contact_info varchar(255) not null,
    icon varchar(255) not null
);

create table carsols(
    id int primary key AUTO_INCREMENT,
    title varchar(255) not null,
    description varchar(255) not null,
    image_link varchar(255) not null
);