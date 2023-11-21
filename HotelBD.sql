-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `Email` varchar(255) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitaciones`
--

DROP TABLE IF EXISTS `habitaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `habitaciones` (
  `codTipo` int NOT NULL,
  `nrohabitacion` int NOT NULL,
  `nropiso` int DEFAULT NULL,
  PRIMARY KEY (`codTipo`,`nrohabitacion`),
  CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`codTipo`) REFERENCES `tipohabitaciones` (`codTipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitaciones`
--

LOCK TABLES `habitaciones` WRITE;
/*!40000 ALTER TABLE `habitaciones` DISABLE KEYS */;
INSERT INTO `habitaciones` VALUES (1,1,1),(1,4,2),(1,7,3),(2,2,1),(2,5,2),(2,8,3),(3,3,1),(3,6,2),(3,9,3);
/*!40000 ALTER TABLE `habitaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva`
--

DROP TABLE IF EXISTS `reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserva` (
  `email` varchar(255) NOT NULL,
  `nroAleatorio` int NOT NULL,
  `codTipo` int NOT NULL,
  `nroHabitacion` int NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `cantDias` int DEFAULT NULL,
  `fec_ini` date DEFAULT NULL,
  `fec_fin` date DEFAULT NULL,
  PRIMARY KEY (`email`,`nroAleatorio`,`codTipo`,`nroHabitacion`),
  KEY `codTipo` (`codTipo`,`nroHabitacion`),
  CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`email`) REFERENCES `clientes` (`Email`),
  CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`codTipo`, `nroHabitacion`) REFERENCES `habitaciones` (`codTipo`, `nrohabitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva`
--

LOCK TABLES `reserva` WRITE;
/*!40000 ALTER TABLE `reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `codServicio` int NOT NULL,
  `desc_servicio` varchar(255) NOT NULL,
  `valorServicio` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`codServicio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (1,'Gimnasio',800.00),(2,'Pileta',0.00);
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios_reserva`
--

DROP TABLE IF EXISTS `servicios_reserva`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios_reserva` (
  `codServicio` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `nroAleatorio` int NOT NULL,
  `codTipo` int NOT NULL,
  `nroHabitacion` int NOT NULL,
  PRIMARY KEY (`codServicio`,`email`,`nroAleatorio`,`codTipo`,`nroHabitacion`),
  KEY `email` (`email`,`nroAleatorio`,`codTipo`,`nroHabitacion`),
  CONSTRAINT `servicios_reserva_ibfk_1` FOREIGN KEY (`codServicio`) REFERENCES `servicios` (`codServicio`),
  CONSTRAINT `servicios_reserva_ibfk_2` FOREIGN KEY (`email`, `nroAleatorio`, `codTipo`, `nroHabitacion`) REFERENCES `reserva` (`email`, `nroAleatorio`, `codTipo`, `nroHabitacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios_reserva`
--

LOCK TABLES `servicios_reserva` WRITE;
/*!40000 ALTER TABLE `servicios_reserva` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicios_reserva` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipohabitaciones`
--

DROP TABLE IF EXISTS `tipohabitaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipohabitaciones` (
  `codTipo` int NOT NULL,
  `desc_tipo` varchar(255) NOT NULL,
  PRIMARY KEY (`codTipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipohabitaciones`
--

LOCK TABLES `tipohabitaciones` WRITE;
/*!40000 ALTER TABLE `tipohabitaciones` DISABLE KEYS */;
INSERT INTO `tipohabitaciones` VALUES (1,'SIMPLE'),(2,'DOBLES'),(3,'TRIPLES');
/*!40000 ALTER TABLE `tipohabitaciones` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-10 11:52:28
