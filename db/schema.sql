-- drop database
DROP DATABASE IF EXISTS burgers_db;
-- create database
CREATE DATABASE burgers_db;
-- use database
USE burgers_db;

-- create table
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);