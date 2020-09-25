CREATE DATABASE basexd;

use basexd;

CREATE TABLE persona(
    nombre VARCHAR(10) NOT NULL PRIMARY KEY,
    correo VARCHAR(20) NOT NULL,
    km INT(6)
);

