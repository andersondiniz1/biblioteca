CREATE DATABASE teste_typeorm;

USE teste_typeorm;

CREATE TABLE usuarios (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

SELECT * from usuarios;
