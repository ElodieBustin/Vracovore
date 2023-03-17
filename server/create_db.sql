BEGIN;

DROP TABLE IF EXISTS "users",
"favorite_items",
"items",
"ingredients",
"recipes",
"steps",
"recipe_steps";

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "last_name" VARCHAR(128),
    "first_name" VARCHAR(128),
    "email" VARCHAR(255) UNIQUE,
    "password" VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS "items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(60),
    "image" TEXT,
    "category" VARCHAR(60),
    "priceKilo" MONEY,
    "unityPrice" MONEY,
    "weight" VARCHAR(42),
    "description" TEXT
);

CREATE TABLE IF NOT EXISTS "ingredients" (
    "id" SERIAL PRIMARY KEY,
    "recette_id" INT REFERENCES "recipe"("id"),
    "item_id" INT REFERENCES "items"("id"),
    "quantity" VARCHAR(10)
);

CREATE TABLE IF NOT EXISTS "steps" (
    "id" SERIAL PRIMARY KEY,
    "description" TEXT
);

CREATE TABLE IF NOT EXISTS "favorite_items" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "users"("id"),
    "item_id" INT REFERENCES "items"("id")
);

CREATE TABLE IF NOT EXISTS "recipes" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(128),
    "image" VARCHAR(255),
    "duration" VARCHAR(42),
    "number_person" INT
);

CREATE TABLE IF NOT EXISTS "recipe_steps" (
    "id" SERIAL PRIMARY KEY,
    "recipe_id" INT REFERENCES "recipe"("id"),
    "step_id" INT REFERENCES "steps"("id")
);

INSERT INTO "users" ("last_name", "first_name", "email", "password") VALUES 
('Testa', 'Testy', 'test@test.com', 'tartanpion');

INSERT INTO "items"("name", "image", "category", "priceKilo", "unityPrice", "weight", "description") VALUES
('Beurre moulé Bio', 'https://cdn.pixabay.com/photo/2016/06/11/04/09/butter-1449453_1280.jpg', 'Beurre', '8', '2', '250g', 'Beurre de baratte Bio moulé, origine France'),
('Flocons d''avoine', 'https://cdn.pixabay.com/photo/2016/05/14/11/13/oat-1391682_1280.jpg', 'Céréales', '5', '1', '200g', 'Ces flocons se consomment tels quels, au petit déjeuner (mueslis, porridge...) ou cuits ajoutés dans des potages, gratins, dans la pâte pour confectionner des galettes végétales, gâteaux et pains'),
('Corn Flakes', 'https://cdn.pixabay.com/photo/2016/12/18/12/53/corn-flakes-1915632_1280.jpg', 'Céréales', '20', '5', '250g', 'Pétales de blé souflés et sucrés. Fabriqué en France'),
('Farine de blé T60', 'https://cdn.pixabay.com/photo/2020/07/18/11/03/wheat-5416897_1280.jpg', 'Farine', '3', '1,5', '500g', 'Farine de blé Bio T60 100% Origine France idéale pour la patisserie'),
('Farine de blé T100', 'https://cdn.pixabay.com/photo/2020/07/18/11/03/wheat-5416897_1280.jpg', 'Farine', '3', '1,5', '500g', 'Farine de blé Bio T60 100% Origine France idéale pour réaliser vos pains maison'),
('Riz blanc', 'https://cdn.pixabay.com/photo/2014/10/22/18/43/rice-498688_960_720.jpg', 'Féculents', '3', '1,5', '500g', 'Riz basmati long grain de qualité supérieure'),
('Fusili', 'https://cdn.pixabay.com/photo/2010/12/13/10/00/pasta-2093_960_720.jpg', 'Féculents', '2,5', '1,25', '500g', 'Pâtes alimentaires de qualité supérieure'),
('Pommes', 'https://cdn.pixabay.com/photo/2020/05/17/19/43/apple-5183288_960_720.jpg', 'Fruits', '3', '1,5', '500g', 'Pommes Pink Lady catégorie 1, Origine France'),
('Fraises Gariguette', 'https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_960_720.jpg', 'Fruits', '20', '5', '250g', 'Fraises gariguettes Bio catégorie 2. Origine France'),
('Abricots secs', 'https://cdn.pixabay.com/photo/2021/11/11/16/06/apricots-6786615_1280.jpg', 'Fruits secs', '25', '5', '200g', 'Abricots secs, réhydratés à 35% d''humidité. Tendrement moelleux. En encas ou à incorporer dans un muesli'),
('Framboises sèches', 'https://cdn.pixabay.com/photo/2022/09/30/14/51/dried-raspberries-7489584_1280.jpg', 'Fruits secs', '30', '3', '100g', 'Framboisés cultivées et séchées en France. Idéale pour les petits déjeuners (Muesli)'),
('Noix de Grenoble', 'https://cdn.pixabay.com/photo/2017/05/14/16/52/walnuts-2312506_1280.jpg', 'Fruits secs', '10', '2,5', '250g', 'Véritables noix de Grenoble (AOP) entières, a incorporer dans vos pains, patisseries ou petits déjeuners'),
('Carottes', 'https://cdn.pixabay.com/photo/2016/07/11/00/18/carrots-1508847_960_720.jpg', 'Légumes', '4', '3', '750g', 'Carottes cultivées selon les principes de l''agroécologie.Cultivées sans insecticides de synthèse et sans fongicides'),
('champignons de Paris', 'https://cdn.pixabay.com/photo/2017/05/06/15/45/paris-mushrooms-2290157_1280.jpg', 'Légumes', '12', '3', '250g', 'Champignons de Paris, origine France, catégorie 1'),
('Oignons rouges', 'https://cdn.pixabay.com/photo/2014/10/22/21/53/red-onions-vegetables-499066_1280.jpg', 'Légumes', '8', '2', '250g', 'Oignons rouges, origine France, catégorie 1'),
('Courgettes', 'https://cdn.pixabay.com/photo/2016/09/10/13/25/zucchini-1659094_1280.jpg', 'Légumes', '3', '1,5', '500g', 'Courgettes vertes bio, Origine France'),
('Savon de Marseille', 'https://cdn.pixabay.com/photo/2015/03/14/13/56/soap-673176_960_720.jpg', 'Produits ménagers', '15', '4,5', '300g', 'Savon de Marseille Traditionnel cuit au chaudron par un maitre savonnier Français'),
('Cristaux de soude', 'https://cdn.pixabay.com/photo/2019/02/24/13/52/soda-4017615_960_720.jpg', 'Produits ménagers', '10', '2,5', '250g', 'Fabriqués à partir de sel et de craie, ils sont votre allié incontournable pour les gros travaux du sol au plafond'),
('Acide citrique', 'https://cdn.pixabay.com/photo/2019/02/24/13/52/gloves-4017614_1280.jpg', 'Produits ménagers', '50', '12,5', '250g', 'Acide citrique en poudre pour préparations et produits ménagers'),
('Café Equitable Bio en grains', 'https://cdn.pixabay.com/photo/2016/03/30/21/59/coffee-beans-1291656_1280.jpg', 'Thé/Café', '24', '6', '250g', 'Grains issus d''Ouganda, du Honduras et du Pérou cultivés par des coopératives et rigoureusement sélectionnés'),
('Café Equitable Bio Moulu', 'https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_1280.jpg', 'Thé/Café', '26', '6,5', '250g', 'Grains issus d''Ouganda, du Honduras et du Pérou cultivés par des coopératives et rigoureusement sélectionnés'),
('Thé de Ceylan', 'https://cdn.pixabay.com/photo/2016/11/29/12/44/tea-1869594_1280.jpg', 'Thé/Café', '100', '10', '100g', 'Appelé poudre à canon, ce thé de Chine possède en effet des feuilles enroulées sur elles-mêmes. C’est le thé qui est souvent utilisé pour réaliser le thé à la menthe, dans le rituel marocain');

COMMIT;