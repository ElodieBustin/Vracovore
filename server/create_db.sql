BEGIN;

DROP TABLE IF EXISTS "users";

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY, 
    "last_name" VARCHAR(128),
    "first_name" VARCHAR(128),
    "email" VARCHAR(255),
    "password" VARCHAR(128)
);

INSERT INTO "users" ("id", "last_name", "first_name", "email", "password" ) VALUES 
(1, 'Testa', 'Testy', 'test@test.com', 'tartanpion');

COMMIT;