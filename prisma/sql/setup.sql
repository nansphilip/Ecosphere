-- Creates an user and a password
CREATE USER 'ecosphere-user'@'localhost' IDENTIFIED BY 'ecosphere-password';

-- Allows user to connect to database
GRANT ALL PRIVILEGES ON *.* TO 'ecosphere-user'@'localhost';