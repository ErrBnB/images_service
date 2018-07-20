CREATE DATABASE IF NOT EXISTS images;

USE images;

SET FOREIGN_KEY_CHECKS = 0;

CREATE TABLE IF NOT EXISTS rooms (
  id int NOT NULL AUTO_INCREMENT,
  room_name varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS images (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(100) NOT NULL,
  description varchar(200),
  room_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- mysql -u root < schema.sql