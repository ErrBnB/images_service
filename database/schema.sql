DROP DATABASE IF EXISTS images;

CREATE DATABASE images;

USE images;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE rooms (
id int NOT NULL AUTO_INCREMENT,
room_name varchar(50) NOT NULL,
location varchar(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE images (
id int NOT NULL AUTO_INCREMENT,
url varchar(100) NOT NULL,
description varchar(200),
room_id int NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (room_id) REFERENCES room(id)
);

-- mysql -u root < schema.sql
