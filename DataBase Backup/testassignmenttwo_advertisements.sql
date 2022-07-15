-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: testassignmenttwo
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisements` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seller_id` varchar(255) NOT NULL,
  `advertisement_id` varchar(255) NOT NULL,
  `condition` enum('new','used') NOT NULL,
  `city` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `topic` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` int NOT NULL,
  `nagotiable` enum('yes','no') NOT NULL DEFAULT 'no',
  `Photo` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `tpno` varchar(255) NOT NULL,
  `hide_tpno` enum('yes','no') NOT NULL DEFAULT 'no',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisements`
--

LOCK TABLES `advertisements` WRITE;
/*!40000 ALTER TABLE `advertisements` DISABLE KEYS */;
INSERT INTO `advertisements` VALUES (1,'1657877954209','1657877954209_1657878093804','new','Monaragala','car','car for sale','new car is for sale , meka ganna epa',10000000,'yes','public\\images\\advertisements_images\\1657878093794.jpg','Lukshan','lukshan@testmail.com','0713388423','yes','2022-07-15 09:41:33','2022-07-15 09:41:33'),(2,'1657877954209','1657877954209_1657878157010','used','Monaragala','car','car for sale','new car is for sale , meka ganna epa gfhgujgjgbngbfhg',10000000,'yes','public\\images\\advertisements_images\\1657878157007.jpg','Lukshan','lukshan@testmail.com','0713388423','yes','2022-07-15 09:42:37','2022-07-15 09:42:37');
/*!40000 ALTER TABLE `advertisements` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-15 15:20:09
