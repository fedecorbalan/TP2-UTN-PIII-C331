-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: musicaldbutn
-- ------------------------------------------------------
-- Server version	9.0.1

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
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Ricardo','Iorio','2024-11-25 19:40:59','2024-11-25 19:40:59'),(2,'Car Seat','Headrest','2010-05-15 14:00:00','2024-11-25 20:07:02'),(3,'Kendrick','Lamar','2004-01-01 09:00:00','2024-11-25 20:18:18'),(4,'Jim','Morrison','1943-12-08 15:00:00','2024-11-25 20:22:03'),(5,'Lana','Del Rey','1985-06-01 12:00:00','2024-11-25 20:26:24'),(6,'Pink','Floyd','1985-06-01 12:00:00','2024-11-25 20:27:25'),(7,'Thom','Yorke','1968-10-07 09:00:00','2024-11-25 20:39:52'),(8,'John','Lennon','2024-11-25 20:44:19','2024-11-25 20:44:19');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `artistId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `artistId` (`artistId`),
  CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'De los pagos del tiempo','Heavy Metal','active','2024-11-25 00:00:00','2024-11-25 19:49:55',1),(2,'El Pibe Tigre','Heavy Metal','active','2024-11-25 19:54:12','2024-11-25 19:54:12',1),(3,'Cute Thing','Indie Rock','active','2024-11-25 20:47:04','2024-11-25 20:47:04',2),(4,'Humble','Hip Hop','active','2024-11-25 20:48:03','2024-11-25 20:48:03',3),(5,'King Kunta','Hip Hop','active','2024-11-25 20:48:16','2024-11-25 20:48:16',3),(6,'Jungle Tarzan','Rock','inactive','2024-11-25 20:51:32','2024-11-25 20:51:32',4),(7,'The Eraser','Electronic','active','2024-11-25 20:54:58','2024-11-25 20:54:58',7),(8,'Black Swan','Electronic','active','2024-11-25 20:55:13','2024-11-25 20:55:13',7),(9,'Fearless','Psych Rock','active','2024-11-25 20:55:39','2024-11-25 20:55:39',6),(10,'Wish You Were Here','Psych Rock','active','2024-11-25 20:55:55','2024-11-25 20:55:55',6),(11,'Imagine','Pop','active','2024-11-25 21:00:44','2024-11-25 21:00:44',8),(12,'Summertime Sadness','Pop','inactive','2024-11-25 21:02:03','2024-11-25 21:06:32',5);
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-25 20:31:06
