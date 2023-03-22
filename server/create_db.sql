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
    "last_name" VARCHAR(255),
    "first_name" VARCHAR(255),
    "email" VARCHAR(255) UNIQUE,
    "password" VARCHAR(128)
);

CREATE TABLE IF NOT EXISTS "items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(128),
    "image" TEXT,
    "category" VARCHAR(60),
    "priceKilo" MONEY,
    "unityPrice" MONEY,
    "weight" VARCHAR(10),
    "description" TEXT
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
    "image" TEXT,
    "duration" VARCHAR(42),
    "number_person" INT
);

CREATE TABLE IF NOT EXISTS "recipe_steps" (
    "id" SERIAL PRIMARY KEY,
    "recipe_id" INT REFERENCES "recipes"("id"),
    "step_id" INT REFERENCES "steps"("id")
);

CREATE TABLE IF NOT EXISTS "ingredients" (
    "id" SERIAL PRIMARY KEY,
    "recette_id" INT REFERENCES "recipes"("id"),
    "item_id" INT REFERENCES "items"("id"),
    "quantity" VARCHAR(10)
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

INSERT INTO "recipes" ("title", "image", "duration", "number_person") VALUES
('Lessive', 'https://cdn.pixabay.com/photo/2016/07/06/06/53/washing-powder-1500058_960_720.jpg', '30min', '0'),
('Muesli aux fruits', 'https://cdn.pixabay.com/photo/2018/01/31/21/12/muesli-3121962_1280.jpg', '5min', '1'),
('Pain courgettes et noix', 'https://cdn.pixabay.com/photo/2018/09/08/10/09/meusli-3662217_1280.jpg', '25min', '4'),
('Tarte aux pommes', 'https://cdn.pixabay.com/photo/2015/12/01/08/13/apple-pie-1071747_1280.jpg', '30min', '4'),
('Poele paysanne', 'https://cdn.pixabay.com/photo/2018/03/18/20/06/vegetables-3238149_1280.jpg', '45min', '6'),
('CompotePommes', 'https://cdn.pixabay.com/photo/2014/11/24/21/56/apple-sauce-544676_1280.jpg', '35min', '4');

INSERT INTO "ingredients" ("recette_id", "item_id", "quantity") VALUES
('1', '17', '200g'),
('1', '18', '125g'),
('1', '19', '50g'),
('2', '2', '30g'),
('2', '3', '30g'),
('2', '10', '25g'),
('2', '11', '25g'),
('2', '12', '15g'),
('3', '4', '250g'),
('3', '12', '50g'),
('3', '16', '150g'),
('4', '1', '50g'),
('4', '4', '200g'),
('4', '8', '750g'),
('5', '1', '50g'),
('5', '6', '100g'),
('5', '13', '500g'),
('5', '14', '500g'),
('5', '15', '50g'),
('5', '16', '500g'),
('6', '8', '750g'),
('6', '9', '100g'),
('6', '10', '20g');

INSERT INTO "steps" ("description") VALUES
('Faites Bouillir 1,5 litre d''eau'),
('Ajoutez le savon de Marseille en copeaux'),
('Remuez jusqu''à obtenir un mélange homogène'),
('Ajoutez l''acide citrique et les cristaux de soude'),
('Remuez à nouveau et laisser reposer 24h avant utilisation'),
('Prenez un Grand bol'),
('Mélangez les flocons d''avoine et les corn flakes (environ la moitié du bol)'),
('Coupez les abricots secs en dés et incorporez-les avec les framboises'),
('Ajoutez quelques noix de Grenoble écrasées et un peu de lait'),
('Votre petit déjeuner est prêt !'),
('Dans un grand bol, fouetter 2 œufs, une cuillère à soupe de sucre et une d''huile'),
('Ajoutez 50g de beurre et 1/2 litre d''eau'),
('Laissez reposer 1/2h. Pendant ce temps, épluchez la courgette et coupez-la en rondelles'),
('Ajoutez les noix décortiquées et mélanger le tout avec la pâte'),
('Faites cuire au four traditionnel pendant 1h10 à 220°'),
('Beurrez le fond de votre plat à tarte'),
('Utilisez le reste du beurre, la farine, les œufs et de l''eau pour faire une pate'),
('Etalez votre pate au fond du moule'),
('Etalez une fine couche de compote de pomme'),
('Epluchez et coupez les pommes en rondelles fines'),
('Répartissez soigneusement les tranches dans le fond du plat'),
('Faites cuire pendant 45 minutes à 175° puis laissez refroidir'),
('Prenez un grand faitout et beurrez-le.'),
('Emincez les oignons et faites-les revenir à feu doux'),
('Epluchez les carottes et les courgettes puis coupez-les en rondelles fines'),
('Dans une autre casserole, faites cuire le riz'),
('Triez les champignons et coupez-les en quartiers grossiers'),
('Mélangez le tout et laissez mijoter pendant 20 min'),
('Epluchez les pommes et coupez-les en quartiers'),
('Dans une casserole, ajoutez du sucre et de l''eau puis faites cuire pendant 45min'),
('Ecrasez les pommes avec un presse purée. '),
('Soupoudrez de sucre et de cannelle'),
('Servez avec une framboise et un abricot');

INSERT INTO "recipe_steps" ("recipe_id", "step_id") VALUES
('1', '1'),
('1', '2'),
('1', '3'),
('1', '4'),
('1', '5'),
('2', '6'),
('2', '7'),
('2', '8'),
('2', '9'),
('2', '10'),
('3', '11'),
('3', '12'),
('3', '13'),
('3', '14'),
('3', '15'),
('4', '16'),
('4', '17'),
('4', '18'),
('4', '19'),
('4', '20'),
('4', '21'),
('4', '22'),
('5', '23'),
('5', '24'),
('5', '25'),
('5', '26'),
('5', '27'),
('5', '28'),
('6', '29'),
('6', '30'),
('6', '31'),
('6', '32'),
('6', '33');

COMMIT;