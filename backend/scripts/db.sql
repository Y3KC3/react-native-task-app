CREATE DATABASE IF NOT EXISTS mobileTasks;

USE mobileTasks;

CREATE TABLE IF NOT EXISTS task (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY(id)
);

INSERT INTO task (title,description) VALUES 
('Estudiar','Necesito estudiar para el examen del viernes'),
('Hacer Tarea','Necesito hacer la tarea de lengua');