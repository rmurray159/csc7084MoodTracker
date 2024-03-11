-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2024 at 11:07 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moodminder`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `first_name`, `last_name`, `email_address`, `password`) VALUES
(1, 'Test', 'Murray', 'rachel@email.com', 'password123'),
(2, 'Test', 'Murray', 'test@email.com', '$2b$10$AXLPftYGO31xhvIENr.RWOWykwyEL710jBRHmHDQV5V06os6J0/OC'),
(3, 'test1', 'test2', 'test1@email.om', '$2b$10$j1AKxQSSXFm2WxCRTGWf5O/MC7RPPXCyTwkK4vPRgvq0PuYgb/xY6'),
(4, 'Rachel', 't', 'test3@email.com', '$2b$10$k5qPv1baxmCtojWXFlBQXe/wthjTJt7EzWtj5YM7mpPqJnPfGTJLO'),
(5, 'Rachel', 'test4', 'test4@email.com', '$2b$10$DPu2JC.0Dkz0aCh.lnjeYegoUAYIqXG32VJkHgy1chhflMfFHhShm'),
(6, 'Testten', 'Testten', 'tes10@email.com', '$2b$10$8l0.MMW3V3OSb9QB4VW3ZupQ/3PNV3ZqrZ8GfjerMo202U6d0cOqe'),
(7, 'Rachel', 'Test', 'test12@email.com', '$2b$10$CP/3HnQWBgr8rd3ziX0CvO0agKBLv.wCm/ejFWSv6MGmFWlH8i5FK'),
(8, 'TestRachel', 'Test', 'test13@email.com', '$2b$10$7zZjPU5zC5xbGY8MfAWTD.JNsbknsgvvQ7xhbHmxTZkQ8VlhR913u'),
(9, 'Leo', 'Galway', 'test9@email.com', '$2b$10$axUUgOWsSq.57/FVWSctq.Henr5cOXloLOVNEefy8byeG1L36XHPy'),
(10, 'Matthew', 'Murray', 'matthew@email.com', '$2b$10$tpU0XfO39RFbQvBDMbRnEeaK8w/z9pd2UcqCUIaHSBeJJbx5TRuqG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
