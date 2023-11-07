-- MySQL dump 10.19  Distrib 10.3.38-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: learnings
-- ------------------------------------------------------
-- Server version	10.3.38-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `privilages`
--

DROP TABLE IF EXISTS `privilages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `privilages` (
  `id_p` int(11) NOT NULL AUTO_INCREMENT,
  `TYPE` char(1) DEFAULT NULL CHECK (`TYPE` = 'S' or `TYPE` = 'T' or `TYPE` = 'A'),
  PRIMARY KEY (`id_p`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privilages`
--

LOCK TABLES `privilages` WRITE;
/*!40000 ALTER TABLE `privilages` DISABLE KEYS */;
INSERT INTO `privilages` VALUES (1,'S'),(2,'T'),(3,'A');
/*!40000 ALTER TABLE `privilages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(500) NOT NULL,
  `answer` varchar(100) NOT NULL,
  `type` varchar(10) NOT NULL DEFAULT 'add',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,'2+2=','4','add'),(2,'10+11=','21','add'),(3,'30+100=','130','add'),(4,'20+12','32','add'),(5,'100+231','32','add'),(6,'10+40','50','add'),(7,'1+3','4','add'),(8,'7+6','13','add'),(9,'17+8','25','add'),(10,'100-10','90','sub'),(11,'99-4','95','sub'),(12,'178-32','146','sub'),(13,'10-4','6','sub'),(14,'12-4','8','sub'),(15,'12-9','3','sub'),(16,'45-19','26','sub'),(17,'133-33','100','sub'),(18,'92-56','36','sub'),(19,'2462-470','1992','sub'),(20,'29-18','11','sub'),(21,'84-48','36','sub'),(22,'1*1','1','multi'),(23,'1*2','2','multi'),(24,'1*245','245','multi'),(25,'2*2','4','multi'),(26,'4*4','16','multi'),(27,'4*3','12','multi'),(28,'5*5','25','multi'),(29,'7*8','56','multi'),(30,'6*7','42','multi'),(31,'9*3','27','multi'),(32,'2*5','15','multi'),(33,'0*63403','0','multi'),(34,'100+231','32','add'),(35,'10+40','50','add'),(36,'1+3','4','add'),(37,'7+6','13','add'),(38,'17+8','25','add'),(39,'100-10','90','sub'),(40,'99-4','95','sub'),(41,'178-32','146','sub'),(42,'10-4','6','sub'),(43,'12-4','8','sub'),(44,'12-9','3','sub'),(45,'45-19','26','sub'),(46,'133-33','100','sub'),(47,'92-56','36','sub'),(48,'2462-470','1992','sub'),(49,'29-18','11','sub'),(50,'84-48','36','sub'),(51,'1*1','1','multi'),(52,'1*2','2','multi'),(53,'1*245','245','multi'),(54,'2*2','4','multi'),(55,'4*4','16','multi'),(56,'4*3','12','multi'),(57,'5*5','25','multi'),(58,'7*8','56','multi'),(59,'6*7','42','multi'),(60,'9*3','27','multi'),(61,'2*5','15','multi'),(62,'0*63403','0','multi');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userAnswers`
--

DROP TABLE IF EXISTS `userAnswers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userAnswers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `taskID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `postDate` date NOT NULL,
  `answer` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userAnswers`
--

LOCK TABLES `userAnswers` WRITE;
/*!40000 ALTER TABLE `userAnswers` DISABLE KEYS */;
INSERT INTO `userAnswers` VALUES (1,1,1,'2023-11-07',0),(2,1,1,'2023-11-07',1),(3,1,1,'2023-11-07',0),(4,2,1,'2023-11-07',0),(5,36,1,'2023-11-07',1),(6,6,1,'2023-11-07',1),(7,35,1,'2023-11-07',0),(8,25,1,'2023-11-07',0),(9,15,1,'2023-11-07',1),(10,25,1,'2023-11-07',1),(11,25,1,'2023-11-07',0),(12,25,1,'2023-11-07',1),(13,25,1,'2023-11-07',1),(14,25,1,'2023-11-07',0),(15,15,2,'2023-11-07',1),(16,15,2,'2023-11-07',0),(17,15,2,'2023-11-07',0),(18,15,2,'2023-11-07',0),(19,15,2,'2023-11-07',0),(20,25,2,'2023-11-07',0),(21,25,2,'2023-11-07',0),(22,25,2,'2023-11-07',0),(23,25,2,'2023-11-07',0),(24,25,2,'2023-11-07',0),(25,25,2,'2023-11-07',0),(26,25,2,'2023-11-07',1),(27,25,2,'2023-11-07',1),(28,25,2,'2023-11-07',1),(29,25,2,'2023-11-07',0),(30,15,10,'2023-11-07',1),(31,15,10,'2023-11-07',1),(32,15,10,'2023-11-07',1),(33,15,10,'2023-11-07',1),(34,15,10,'2023-11-07',0),(35,15,10,'2023-11-07',0),(36,15,10,'2023-11-07',1),(37,15,10,'2023-11-07',0),(38,25,10,'2023-11-07',1),(39,25,10,'2023-11-07',1),(40,25,10,'2023-11-07',1),(41,15,9,'2023-11-07',1),(42,15,9,'2023-11-07',1),(43,25,9,'2023-11-07',0),(44,25,9,'2023-11-07',0),(45,25,9,'2023-11-07',0),(46,25,9,'2023-11-07',1),(47,25,9,'2023-11-07',1),(48,15,8,'2023-11-07',1),(49,15,8,'2023-11-07',1),(50,15,8,'2023-11-07',1),(51,15,8,'2023-11-07',1),(52,15,8,'2023-11-07',0),(53,25,8,'2023-11-07',1),(54,25,8,'2023-11-07',0),(55,25,8,'2023-11-07',0),(56,25,8,'2023-11-07',1),(57,25,8,'2023-11-07',1),(58,25,8,'2023-11-07',1),(59,15,7,'2023-11-07',1),(60,25,7,'2023-11-07',0),(61,25,7,'2023-11-07',1),(62,25,7,'2023-11-07',1),(63,25,7,'2023-11-07',1),(64,56,1,'2023-11-07',1),(65,55,1,'2023-11-07',1),(66,18,1,'2023-11-07',0),(67,17,1,'2023-11-07',1),(68,8,10,'2023-11-07',1),(69,35,10,'2023-11-07',1),(70,12,10,'2023-11-07',1),(71,30,10,'2023-11-07',1),(72,31,10,'2023-11-07',0),(73,51,10,'2023-11-07',1);
/*!40000 ALTER TABLE `userAnswers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userprivilages`
--

DROP TABLE IF EXISTS `userprivilages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userprivilages` (
  `id_up` int(11) NOT NULL AUTO_INCREMENT,
  `id_u` int(11) NOT NULL,
  `id_p` int(11) NOT NULL,
  PRIMARY KEY (`id_up`),
  KEY `FK_users` (`id_u`),
  KEY `FK_privilages` (`id_p`),
  CONSTRAINT `FK_privilages` FOREIGN KEY (`id_p`) REFERENCES `privilages` (`id_p`),
  CONSTRAINT `FK_users` FOREIGN KEY (`id_u`) REFERENCES `users` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprivilages`
--

LOCK TABLES `userprivilages` WRITE;
/*!40000 ALTER TABLE `userprivilages` DISABLE KEYS */;
INSERT INTO `userprivilages` VALUES (1,1,1),(2,2,1),(3,3,2),(4,4,2),(5,5,2),(7,5,3),(8,6,1),(9,7,1),(10,8,1),(11,9,1),(12,10,1);
/*!40000 ALTER TABLE `userprivilages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(25) NOT NULL,
  `SURNAME` varchar(50) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL,
  `EMAIL` varchar(70) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Piotr','Wyrwas','zaq1@WSX','jaPiotr@cos.com'),(2,'Dosia','Wyrwas','ZAQ!2wsx','jaDosiak@cos.com'),(3,'Maria','Curie','qwertyq','jaCurie@cos.com'),(4,'Magdalena','Jasinska','zaq1@WSX','jaNieMagda@cos.com'),(5,'Dorotea','Wyrwasinska','zaq1@WSX','NieLubieUczniuw@cos.com'),(6,'Mariiana','Przybylek','zaq1@WSX','jaMarianka@cos.com'),(7,'Andrzej','Pomylka','zaq1@WSX','jaAndrzej@cos.com'),(8,'Mateusz','Morwaiwcki','zaq1@WSX','niePytaj@cos.com'),(9,'Milosz','Pokrzywa','zaq1@WSX','jaPokrzywa@cos.com'),(10,'Mariusz','Pudzianowkis','zaq1@WSX','Mari@cos.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-07 16:13:13
