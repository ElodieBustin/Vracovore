BEGIN;

DROP TABLE IF EXISTS "users";

CREATE TABLE IF NOT EXISTS "users" (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(128),
    first_name VARCHAR(128),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(128)
);

INSERT INTO "users" ("last_name", "first_name", "email", "password") VALUES 
('Testa', 'Testy', 'test@test.com', 'tartanpion');

COMMIT;