DROP DATABASE IF EXISTS accDB;
CREATE DATABASE accDB;
USE accDB;


CREATE TABLE brand (
brand_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
brand VARCHAR(50) NOT NULL,
CONSTRAINT pk_brand PRIMARY KEY (brand_id)
);

CREATE TABLE watch (
    watch_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    watch VARCHAR(50) NOT NULL,
    brand_id TINYINT UNSIGNED NOT NULL,
    dial_type ENUM("ANALOG", "DIGITAL", "BOTH") DEFAULT "ANALOG",
    watch_desc TINYTEXT,
    price DECIMAL(12, 2) NOT NULL,     
    imgURL MEDIUMTEXT,
    CONSTRAINT pk_watch PRIMARY KEY (watch_id),
    CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brand (brand_id)
);


CREATE TABLE user (
    user_id MEDIUMINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(20) NOT NULL ,
    lName VARCHAR(20) NOT NULL,
    email VARCHAR(40) UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_user_id PRIMARY KEY (user_id)
);

