1. Set up database
   Download Mysql and paste that code to run

CREATE TABLE `accounts` (
`username` varchar(45) NOT NULL,
`password` varchar(45) DEFAULT NULL,
PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `books` (
`id` int(11) NOT NULL,
`name` varchar(45) DEFAULT NULL,
`author` varchar(45) DEFAULT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

2. Run project

- Go to project
- npm install
- node app.js
