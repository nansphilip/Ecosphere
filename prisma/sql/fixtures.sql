USE `ecosphere-db`;

INSERT INTO
    `user` ( `id`, `username`, `password`, `points`, `createdAt`, `updatedAt` )
VALUES
    ( "1", "patatoide", "patatoide", "150", NOW(), NOW() ),
    ( "2", "patate", "patate", "100", NOW(), NOW() ),
    ( "3", "patatoid", "patatoid", "50", NOW(), NOW() );

INSERT INTO
    `dailychallenge` ( `id`, `name`, `description`, `difficulty`, `points`, `createdAt`, `updatedAt` )
VALUES
    ( "1", "5 fruits", "Manger 5 fruits différents", "1", "50", NOW(), NOW() ),
    ( "2", "5 légumes", "Manger 5 légumes différents", "2", "50", NOW(), NOW() ),
    ( "3", "5 fruits et légumes", "Manger 5 fruits et légumes différents", "3", "100", NOW(), NOW() );

INSERT INTO
    `fruit` ( `name`, `description`, `image`, `createdAt`, `updatedAt`)
VALUES
    ( "Kiwi", "Fruit exotique", "/images/kiwi.webp", NOW(), NOW()),
    ( "Mangue", "Fruit exotique", "/images/mangue.webp", NOW(), NOW()),
    ( "Ananas", "Fruit exotique", "/images/ananas.webp", NOW(), NOW());
