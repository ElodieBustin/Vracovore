BEGIN;

DROP TABLE IF EXISTS "users",
"favorite_items",
"item",
"ingredients",
"recipe",
"steps",
"recipe_steps";

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "last_name" VARCHAR(128),
    "first_name" VARCHAR(128),
    "email" VARCHAR(255) UNIQUE,
    "password" VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS "ingredients" (
    "id" SERIAL PRIMARY KEY,
    "recette_id" INT REFERENCES "recipe"("id"),
    "item_id" INT REFERENCES "item"("id"),
    "quantity" VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS "steps" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR(42),
    "title" VARCHAR(42)
);

CREATE TABLE IF NOT EXISTS "favorite_items" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "users"(id),
    "item_id" INT REFERENCES "item"(id)
);

CREATE TABLE IF NOT EXISTS "item" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(42),
    "image" TEXT,
    "category" VARCHAR(42),
    "price" MONEY
);

CREATE TABLE IF NOT EXISTS "recipe" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(42),
    "image" VARCHAR(42),
    "duration" VARCHAR(42),
    "number_person" VARCHAR(42)
);

CREATE TABLE IF NOT EXISTS "recipe_steps" (
    "id" SERIAL PRIMARY KEY,
    "recipe_id" INT REFERENCES "recipe"("id"),
    "step_id" INT REFERENCES "step"("id")
);

INSERT INTO "users" ("last_name", "first_name", "email", "password") VALUES 
("Testa", "Testy", "test@test.com", "tartanpion");

INSERT INTO "item"("name", "image", "category", "price") VALUES
('Riz blanc', 'https://pixabay.com/fr/photos/riz-riz-blanc-cor%c3%a9e-aliments-3997767/', 'Féculents', '3'),
('Pâtes', 'https://pixabay.com/fr/photos/p%c3%a2tes-rotini-cru-non-cuit-2093/', 'Féculents', '2'),
('Pommes', 'https://pixabay.com/fr/photos/pomme-rouge-fruit-aliments-frais-1834639/', 'Fruits', '4,5');

COMMIT;