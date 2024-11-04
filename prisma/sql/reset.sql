-- Deletes the database user
DROP USER 'ecosphere-user' @'localhost';

-- Delete the database
DROP DATABASE `ecosphere-db`;

-- Shows users privileges
SHOW GRANTS FOR 'ecosphere-user'@'localhost';
-- or for server
SHOW GRANTS FOR 'ecosphere-user'@'%';

-- Shows all tables for the database
SHOW TABLES FROM `ecosphere-db`;

-- Shows all users
SELECT User FROM mysql.user;

-- Shows all databases
SHOW DATABASES;