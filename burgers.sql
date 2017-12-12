USE burgers_db;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name  varchar(200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    todaydate  TIMESTAMP,
	PRIMARY KEY (id)
);

USE burgers_db;

INSERT INTO burgers (burger_name) VALUES ('chicken');
INSERT INTO burgers (burger_name) VALUES ('beef');
INSERT INTO burgers (burger_name, devoured) VALUES ('veggie', true);
INSERT INTO burgers (burger_name) VALUES ('turkey');
