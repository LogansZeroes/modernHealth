DROP TABLE IF EXISTS sections, programs;

CREATE TABLE programs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    description VARCHAR(255)
);

CREATE TABLE sections (
    id SERIAL,
    program_id INTEGER,
    order_index INTEGER,
    name VARCHAR (100),
    description VARCHAR (255),
    img VARCHAR (255),
    content TEXT ARRAY,
    completed BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY (program_id) REFERENCES programs (id)
);

GRANT SELECT ON ALL TABLES IN SCHEMA public TO modern;
