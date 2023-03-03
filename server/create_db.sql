BEGIN;

DROP TABLE IF EXISTS "user";

CREATE TABLE IF NOT EXISTS "user" (
    "id" INT PRIMARY KEY, 
    -- serialisation à faire plus tard
    "last_name" VARCHAR(128),
    "first_name" VARCHAR(128),
    "email" VARCHAR(255),
    "password" VARCHAR(128)
);

INSERT INTO "user" ("id", "last_name", "first_name", "email", "password" ) VALUES 
(1, 'Testa', 'Testy', 'test@test.com', 'tartanpion');

COMMIT;