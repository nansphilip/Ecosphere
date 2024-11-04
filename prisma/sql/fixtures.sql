USE `ecosphere-db`;

INSERT INTO
    `fruit` ( `name`, `description`, `image`, `createdAt`, `updatedAt`)
VALUES
    ( "Kiwi", "Fruit exotique", "/images/kiwi.webp", NOW(), NOW()),
    ( "Mangue", "Fruit exotique", "/images/mangue.webp", NOW(), NOW()),
    ( "Ananas", "Fruit exotique", "/images/ananas.webp", NOW(), NOW());
