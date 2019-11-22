CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username character varying(80) NOT NULL UNIQUE,
    password character varying(1000) NOT NULL,
    user_type integer NOT NULL DEFAULT 0
);