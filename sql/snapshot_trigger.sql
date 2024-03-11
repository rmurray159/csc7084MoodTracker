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
-- Table structure for table `snapshot_trigger`
--

CREATE TABLE `snapshot_trigger` (
  `snapshot_trigger_id` int(11) NOT NULL,
  `snapshot_id` int(11) DEFAULT NULL,
  `trigger_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `snapshot_trigger`
--

INSERT INTO `snapshot_trigger` (`snapshot_trigger_id`, `snapshot_id`, `trigger_id`) VALUES
(1, 7, 1),
(2, 7, 2),
(3, 7, 3),
(4, 7, 4),
(5, 7, 5),
(6, 7, 6),
(7, 7, 7),
(8, 7, 8),
(9, 7, 9),
(10, 7, 10),
(11, 7, 11),
(12, 7, 12),
(13, 22, 8),
(14, 23, 7),
(15, 24, 1),
(16, 25, 5),
(17, 26, 2),
(18, 28, 4),
(19, 29, 3),
(20, 30, 8),
(21, 31, 6),
(22, 32, 5),
(23, 33, 6),
(24, 34, 1),
(25, 35, 1),
(26, 36, 3),
(27, 36, 8),
(28, 37, 3),
(29, 37, 8),
(30, 38, 3),
(31, 38, 8),
(32, 39, 1),
(33, 39, 3),
(34, 40, 2),
(35, 40, 6),
(36, 41, 2),
(37, 41, 6),
(38, 42, 3),
(39, 43, 4),
(40, 43, 7),
(41, 44, 2),
(42, 44, 8),
(43, 45, 7),
(44, 45, 8),
(45, 46, 8),
(46, 47, 6),
(47, 47, 9),
(48, 48, 3),
(49, 48, 5),
(50, 49, 3),
(51, 49, 6),
(52, 50, 7),
(53, 51, 2),
(54, 51, 4),
(55, 56, 5),
(56, 58, 1),
(57, 58, 3),
(58, 58, 6),
(59, 59, 6),
(60, 59, 7),
(61, 60, 3),
(62, 62, 7),
(63, 62, 8),
(64, 63, 9),
(65, 63, 10),
(66, 64, 8),
(67, 64, 9),
(68, 65, 8),
(69, 65, 9),
(70, 66, 5),
(71, 67, 4),
(72, 67, 5),
(73, 68, 6),
(74, 70, 5),
(75, 70, 8),
(76, 71, 4),
(77, 71, 5),
(78, 72, 4),
(79, 72, 5),
(80, 73, 4),
(81, 73, 6),
(82, 74, 4),
(83, 74, 6),
(84, 75, 10),
(85, 76, 4),
(86, 76, 6),
(87, 77, 9),
(88, 78, 4),
(89, 79, 5),
(90, 79, 7),
(91, 80, 7),
(92, 81, 3),
(93, 81, 5),
(94, 81, 9),
(95, 82, 1),
(96, 82, 3),
(97, 83, 1),
(98, 83, 3),
(99, 84, 1),
(100, 84, 3),
(101, 85, 1),
(102, 85, 4),
(103, 85, 7),
(104, 85, 10),
(105, 85, 12),
(128, 86, 1),
(129, 86, 4),
(135, 93, 6),
(136, 93, 9),
(137, 94, 8),
(138, 94, 9),
(140, 97, 11),
(141, 97, 12),
(146, 100, 8),
(147, 100, 10),
(148, 102, 5),
(149, 102, 8),
(153, 105, 3),
(154, 106, 8),
(155, 107, 5),
(156, 109, 6),
(157, 109, 7),
(158, 110, 1),
(159, 110, 3),
(160, 111, 6),
(161, 111, 12),
(162, 112, 3),
(163, 112, 5),
(164, 113, 4),
(165, 114, 3),
(166, 114, 7),
(167, 115, 3),
(168, 115, 5),
(169, 116, 3),
(170, 116, 10),
(171, 117, 3),
(172, 117, 8),
(173, 118, 8),
(178, 120, 9),
(179, 121, 12),
(180, 122, 3),
(181, 122, 6),
(182, 122, 10),
(183, 123, 3),
(184, 123, 6),
(185, 123, 8),
(186, 124, 1),
(187, 124, 3),
(188, 125, 1),
(189, 125, 7),
(190, 125, 12),
(191, 126, 1),
(192, 126, 4),
(193, 126, 7),
(194, 127, 1),
(195, 127, 4),
(196, 127, 7),
(203, 128, 1),
(204, 128, 3),
(205, 128, 4),
(206, 128, 5),
(207, 128, 6),
(208, 128, 11),
(209, 130, 6),
(210, 132, 8),
(211, 133, 8),
(212, 133, 12),
(213, 134, 4),
(214, 134, 6),
(215, 135, 2),
(216, 135, 7),
(217, 136, 4),
(218, 136, 8),
(219, 137, 8),
(220, 138, 2),
(221, 138, 9),
(222, 139, 6),
(223, 139, 7),
(224, 141, 4),
(225, 142, 7),
(226, 142, 12),
(227, 143, 7),
(228, 143, 11),
(243, 151, 3),
(244, 151, 7),
(245, 152, 3),
(246, 152, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `snapshot_trigger`
--
ALTER TABLE `snapshot_trigger`
  ADD PRIMARY KEY (`snapshot_trigger_id`),
  ADD KEY `FK_contextual_trigger_trigger_id` (`trigger_id`),
  ADD KEY `FK_snapshot_snapshot_id` (`snapshot_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `snapshot_trigger`
--
ALTER TABLE `snapshot_trigger`
  MODIFY `snapshot_trigger_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `snapshot_trigger`
--
ALTER TABLE `snapshot_trigger`
  ADD CONSTRAINT `FK_contextual_trigger_trigger_id` FOREIGN KEY (`trigger_id`) REFERENCES `contextual_trigger` (`trigger_id`),
  ADD CONSTRAINT `FK_snapshot_snapshot_id` FOREIGN KEY (`snapshot_id`) REFERENCES `snapshot` (`snapshot_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
