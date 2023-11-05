-- MariaDB dump 10.19-11.1.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: learnings
-- ------------------------------------------------------
-- Server version	11.1.2-MariaDB

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
INSERT INTO `privilages` VALUES
(1,'S'),
(2,'T'),
(3,'A');
/*!40000 ALTER TABLE `privilages` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprivilages`
--

LOCK TABLES `userprivilages` WRITE;
/*!40000 ALTER TABLE `userprivilages` DISABLE KEYS */;
INSERT INTO `userprivilages` VALUES
(1,1,1),
(2,2,1),
(3,3,2),
(4,4,2),
(5,5,2),
(7,5,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Piotr','Wyrwas','zaq1@WSX','jaPiotr@cos.com'),
(2,'Dosia','Wyrwas','ZAQ!2wsx','jaDosiak@cos.com'),
(3,'Maria','Curie','qwertyq','jaCurie@cos.com'),
(4,'Magdalena','Jasinska','zaq1@WSX','jaNieMagda@cos.com'),
(5,'Dorotea','Wyrwasinska','zaq1@WSX','NieLubieUczniuw@cos.com');
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

-- Dump completed on 2023-11-05 12:12:11
