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
    "priceKilo" MONEY,
    "unity" VARCHAR(5)
    "weight" VARCHAR(42),
    "description" TEXT
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

INSERT INTO "item"("name", "image", "category", "priceKilo") VALUES
('Riz blanc', 'https://cdn.pixabay.com/photo/2014/10/22/18/43/rice-498688_960_720.jpg', 'Féculents', '3'),
('Pâtes', 'https://cdn.pixabay.com/photo/2010/12/13/10/00/pasta-2093_960_720.jpg', 'Féculents', '2'),
('Pommes', 'https://cdn.pixabay.com/photo/2020/05/17/19/43/apple-5183288_960_720.jpg', 'Fruits', '4,5'),
('Carotte', 'https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_960_720.jpg', 'Légumes', '3,5'),
('Fraise', 'https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_960_720.jpg', 'Fruits', '4,8'),
('Farine de blé T100', 'https://cdn.pixabay.com/photo/2016/08/09/22/23/flour-1581967_960_720.jpg', 'Farine', '1,9'),
('Savon de Marseille', 'https://cdn.pixabay.com/photo/2015/03/14/13/56/soap-673176_960_720.jpg', 'Savon', '10'),
('Cristaux de soude', 'https://cdn.pixabay.com/photo/2019/02/24/13/52/soda-4017615_960_720.jpg', 'Produits ménagers', '5.35' );

COMMIT;