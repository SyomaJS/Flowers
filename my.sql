CREATE TABLE `flowers`(
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) ,
    `color` VARCHAR(100) NOT NULL,
    `price` FLOAT(10, 2) NOT NULL
);
CREATE TABLE `customers`(
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL
);



CREATE TABLE `orders`(
    `id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `customer_id` INT NOT NULL,
    `flower_id` INT NOT NULL,
    `quantity` INT NOT NULL
);


ALTER TABLE
    `orders` ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY(`customer_id`) REFERENCES `customers`(`id`);
ALTER TABLE
    `orders` ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY(`customer_id`) REFERENCES `flowers`(`id`);s

    INSERT INTO `flowers` (`name`, `color`, `price`) VALUES
('Rose', 'Red', 12.99),
('Tulip', 'Yellow', 8.75),
('Lily', 'White', 9.50),
('Sunflower', 'Yellow', 6.99),
('Daisy', 'Pink', 5.25);
