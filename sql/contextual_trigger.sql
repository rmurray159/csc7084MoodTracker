-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2024 at 11:06 PM
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
-- Table structure for table `contextual_trigger`
--

CREATE TABLE `contextual_trigger` (
  `trigger_id` int(11) NOT NULL,
  `trigger_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contextual_trigger`
--

INSERT INTO `contextual_trigger` (`trigger_id`, `trigger_name`) VALUES
(1, 'Family'),
(2, 'Work'),
(3, 'Sleep'),
(4, 'Exercise'),
(5, 'Weather'),
(6, 'Friends'),
(7, 'Date'),
(8, 'Study'),
(9, 'Holiday'),
(10, 'Volunteer'),
(11, 'Healthy Food'),
(12, 'Hungry');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contextual_trigger`
--
ALTER TABLE `contextual_trigger`
  ADD PRIMARY KEY (`trigger_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contextual_trigger`
--
ALTER TABLE `contextual_trigger`
  MODIFY `trigger_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
