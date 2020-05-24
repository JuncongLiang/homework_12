-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS sequelize_fitness;
-- Creates the "todolist" database --
CREATE DATABASE sequelize_fitness;

CREATE TABLE Workouts (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(1024) DEFAULT NULL,
  date varchar(1024) DEFAULT NULL,
  createdAt varchar(1024) DEFAULT NULL,
  updatedAt varchar(1024) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;