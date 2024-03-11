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
-- Table structure for table `snapshot`
--

CREATE TABLE `snapshot` (
  `snapshot_id` int(11) NOT NULL,
  `enjoyment_level` int(11) NOT NULL,
  `surprise_level` int(11) NOT NULL,
  `contempt_level` int(11) NOT NULL,
  `sadness_level` int(11) NOT NULL,
  `fear_level` int(11) NOT NULL,
  `disgust_level` int(11) NOT NULL,
  `anger_level` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `timestamp` datetime NOT NULL,
  `notes` varchar(2500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `snapshot`
--

INSERT INTO `snapshot` (`snapshot_id`, `enjoyment_level`, `surprise_level`, `contempt_level`, `sadness_level`, `fear_level`, `disgust_level`, `anger_level`, `user_id`, `timestamp`, `notes`) VALUES
(1, 2, 3, 8, 1, 8, 2, 8, 1, '0000-00-00 00:00:00', ''),
(2, 2, 3, 7, 2, 8, 2, 8, 1, '2024-01-27 23:16:19', ''),
(4, 3, 9, 2, 9, 2, 8, 2, 1, '2024-01-28 00:06:17', 'please work'),
(5, 3, 9, 2, 9, 2, 8, 2, 1, '2024-01-28 00:17:04', 'please work'),
(6, 2, 7, 2, 8, 6, 1, 8, 1, '2024-01-28 16:21:43', 'testing checkboxes'),
(7, 2, 8, 0, 8, 1, 7, 1, 1, '2024-01-28 16:23:22', 'testing checkbox insert'),
(8, 2, 9, 1, 9, 2, 9, 2, 1, '2024-01-28 16:41:13', 'testing tsting to only add in the checked checkboxes'),
(9, 1, 8, 2, 8, 1, 8, 1, 1, '2024-01-28 16:56:23', 'test test seem to have broken something that was working before'),
(10, 1, 8, 1, 8, 2, 7, 2, 1, '2024-01-28 16:58:42', 'testing adding checkboxes as that seems to have broken but not getting an wrror'),
(11, 1, 3, 7, 2, 8, 1, 9, 1, '2024-01-28 20:33:38', 'Lets see if we can get the triggers inserted'),
(12, 1, 3, 7, 2, 8, 1, 9, 1, '2024-01-28 20:38:08', 'Lets see if we can get the triggers inserted'),
(13, 1, 2, 3, 4, 5, 6, 7, 1, '2024-01-28 20:45:51', 'testing with console logs to see if the checkboxes actually check'),
(14, 1, 4, 7, 3, 6, 3, 7, 1, '2024-01-28 21:03:08', 'testing with the html updated to include name in the checkbox input type'),
(15, 2, 8, 4, 7, 3, 8, 2, 1, '2024-01-28 21:11:59', 'test test'),
(16, 9, 2, 8, 1, 9, 1, 8, 1, '2024-01-28 21:13:41', 'please let this work before i lose my mind'),
(17, 2, 9, 1, 9, 4, 7, 6, 1, '2024-01-28 21:25:43', 'losing the will'),
(18, 2, 8, 3, 9, 2, 1, 3, 1, '2024-01-28 21:26:48', 'actually losing my mind'),
(19, 3, 4, 6, 3, 6, 3, 7, 1, '2024-01-28 21:32:06', 'going round in circles'),
(20, 1, 9, 3, 8, 2, 8, 2, 1, '2024-01-28 21:36:34', 'good god this is driving me insane'),
(21, 1, 3, 8, 1, 9, 2, 9, 1, '2024-01-28 21:48:04', 'dear god let it work some time soon'),
(22, 1, 2, 7, 2, 8, 1, 8, 1, '2024-01-28 21:53:35', 'meh'),
(23, 5, 5, 7, 5, 5, 5, 5, 1, '2024-01-28 22:42:49', 'test'),
(24, 7, 5, 6, 5, 5, 5, 5, 1, '2024-01-28 23:12:34', 'testing summary results'),
(25, 6, 2, 7, 2, 7, 2, 7, 1, '2024-01-28 23:14:07', 'ok so i can get it to render now what'),
(26, 7, 5, 5, 5, 5, 5, 5, 1, '2024-01-28 23:31:42', 'testing with one slider'),
(27, 7, 2, 7, 3, 7, 3, 7, 1, '2024-01-28 23:37:37', 'a'),
(28, 1, 2, 3, 6, 4, 6, 3, 1, '2024-01-28 23:39:16', 'think it needs something in here or it falls over'),
(29, 9, 8, 7, 6, 5, 4, 3, 1, '2024-01-28 23:42:48', 'a'),
(30, 7, 2, 7, 0, 7, 3, 7, 1, '2024-01-28 23:50:01', 'need to update so that it always sends something through, even if empty'),
(31, 7, 2, 7, 3, 6, 6, 4, 1, '2024-01-28 23:53:10', 'aa'),
(32, 3, 8, 1, 7, 6, 5, 5, 1, '2024-01-28 23:59:04', 'forgot to close a bracket, letes see if i can get it working'),
(33, 2, 8, 2, 8, 6, 5, 5, 1, '2024-01-28 23:59:23', ''),
(34, 2, 7, 2, 7, 2, 8, 8, 1, '2024-01-29 00:12:57', 'testing the triggers now'),
(35, 2, 7, 2, 7, 2, 8, 8, 1, '2024-01-29 00:13:28', 'testing the triggers now'),
(36, 2, 8, 8, 2, 8, 7, 3, 1, '2024-01-29 00:26:37', 'time for bed'),
(37, 2, 8, 8, 2, 8, 7, 3, 1, '2024-01-29 00:28:45', 'time for bed'),
(38, 2, 8, 8, 2, 8, 7, 3, 1, '2024-01-29 00:28:49', 'time for bed'),
(39, 7, 7, 3, 3, 7, 3, 7, 1, '2024-01-29 00:52:21', 'test'),
(40, 2, 8, 2, 7, 3, 7, 2, 1, '2024-01-29 12:43:05', 'trying something else'),
(41, 2, 8, 2, 7, 3, 7, 2, 1, '2024-01-29 12:46:59', 'trying something else'),
(42, 2, 9, 3, 7, 2, 9, 2, 1, '2024-01-29 13:07:40', 'just work'),
(43, 7, 2, 8, 3, 8, 3, 7, 1, '2024-01-29 14:01:35', 'does this work?'),
(44, 8, 1, 6, 5, 2, 5, 5, 1, '2024-01-29 14:02:58', 'and again'),
(45, 7, 2, 7, 3, 8, 2, 7, 1, '2024-01-29 14:05:31', 'blah blah '),
(46, 2, 8, 2, 9, 1, 9, 8, 1, '2024-01-29 14:07:03', 'maybe this time?'),
(47, 7, 3, 7, 3, 8, 2, 8, 1, '2024-01-29 14:15:06', 'now?'),
(48, 1, 9, 2, 8, 1, 10, 2, 1, '2024-01-29 14:17:59', 'are the checkboxes disabled now'),
(49, 1, 6, 7, 8, 2, 2, 2, 1, '2024-01-29 14:20:21', 'maybe now it will work with all of them'),
(50, 8, 2, 8, 2, 7, 2, 7, 1, '2024-01-29 17:09:37', 'fdfdsf'),
(51, 2, 8, 2, 8, 2, 3, 7, 1, '2024-01-29 17:17:55', 'should see 27'),
(52, 2, 9, 2, 8, 3, 6, 5, 1, '2024-01-29 17:18:47', ''),
(53, 2, 5, 5, 5, 5, 5, 5, 1, '2024-01-29 17:19:44', 'test'),
(54, 1, 8, 1, 8, 2, 8, 1, 1, '2024-01-29 17:23:38', 'fdwfwef'),
(55, 3, 8, 2, 5, 5, 5, 5, 1, '2024-01-29 17:25:59', 'try again'),
(56, 1, 8, 2, 7, 1, 8, 2, 1, '2024-01-29 20:22:01', 'does this work?'),
(57, 7, 4, 3, 2, 3, 5, 5, 1, '2024-01-29 20:23:01', 'here we go again\r\n'),
(58, 1, 8, 1, 7, 3, 2, 7, 1, '2024-01-29 20:40:40', 'making progress i think'),
(59, 2, 8, 1, 8, 2, 7, 6, 1, '2024-01-29 20:44:14', 'i hate this'),
(60, 7, 7, 3, 3, 2, 2, 7, 1, '2024-01-29 20:46:01', 'working now?'),
(61, 1, 1, 1, 1, 5, 7, 6, 1, '2024-01-29 20:47:50', 'so tedious'),
(62, 2, 8, 1, 7, 5, 5, 5, 1, '2024-01-29 20:51:33', 'and again'),
(63, 0, 9, 3, 7, 5, 5, 5, 1, '2024-01-29 20:52:44', 'sadsad'),
(64, 7, 2, 9, 7, 7, 7, 5, 1, '2024-01-29 20:54:59', 'getting closer'),
(65, 7, 2, 9, 2, 8, 6, 5, 1, '2024-01-29 20:57:54', 'dasdas'),
(66, 7, 2, 7, 2, 2, 5, 5, 1, '2024-01-29 21:07:00', 'blah blah'),
(67, 5, 5, 5, 8, 1, 8, 2, 1, '2024-01-29 21:08:32', 'gtrgtrg'),
(68, 2, 7, 2, 8, 9, 2, 5, 1, '2024-01-29 21:23:57', 'dasdasd'),
(69, 2, 9, 2, 8, 2, 7, 2, 1, '2024-01-29 21:26:10', 'fdsfs'),
(70, 5, 2, 5, 8, 5, 5, 5, 1, '2024-01-29 21:31:29', 'saSas'),
(71, 2, 7, 5, 2, 5, 7, 5, 1, '2024-01-29 21:45:00', 'dsadasd'),
(72, 1, 4, 5, 5, 7, 3, 3, 1, '2024-01-29 21:46:45', 'dasdas'),
(73, 2, 8, 5, 5, 3, 8, 5, 1, '2024-01-29 21:51:24', 'saSAsa'),
(74, 0, 6, 6, 2, 3, 4, 5, 1, '2024-01-29 21:52:54', 'dasdsad'),
(75, 5, 5, 3, 8, 5, 8, 5, 1, '2024-01-29 21:55:34', 'tttt'),
(76, 1, 9, 2, 5, 5, 4, 7, 1, '2024-01-29 21:56:39', ''),
(77, 1, 8, 5, 5, 2, 5, 6, 1, '2024-01-29 21:57:34', 'asdSDA'),
(78, 2, 9, 1, 9, 2, 8, 2, 1, '2024-01-29 22:04:20', 'please let it work'),
(79, 2, 7, 2, 8, 3, 3, 5, 1, '2024-01-29 22:11:22', 'ftftf'),
(80, 2, 2, 6, 7, 3, 7, 7, 1, '2024-01-29 22:23:45', 'dsdas'),
(81, 1, 7, 8, 3, 7, 7, 7, 1, '2024-01-29 22:26:56', 'dasdas'),
(82, 1, 8, 1, 5, 8, 2, 2, 1, '2024-01-29 22:37:58', 'dsadas'),
(83, 1, 6, 5, 7, 7, 3, 5, 1, '2024-01-29 22:39:21', 'dasdsa'),
(84, 1, 8, 8, 2, 8, 8, 5, 1, '2024-01-29 22:52:17', 'dasdsad'),
(85, 1, 5, 7, 1, 8, 2, 7, 1, '2024-01-29 22:56:52', 'please still be working'),
(86, 2, 9, 8, 5, 2, 5, 3, 1, '2024-01-29 23:02:08', 'fdfsdf'),
(93, 2, 9, 2, 3, 7, 3, 5, 1, '2024-02-20 22:51:55', 'wrking with sessions'),
(94, 2, 8, 2, 8, 2, 5, 5, 1, '2024-02-20 23:44:35', 'with sessions'),
(95, 3, 5, 5, 5, 5, 5, 5, 2, '2024-02-20 23:57:10', 'with sessions'),
(96, 2, 8, 2, 7, 5, 5, 5, 2, '2024-02-20 23:58:16', 'why is the summary not working?'),
(97, 1, 8, 2, 8, 2, 5, 5, 2, '2024-02-21 00:00:05', 'summary not rendering with the detail needed'),
(99, 2, 8, 5, 5, 5, 5, 5, 2, '2024-02-21 00:16:50', 'trying to get these isLoggedIn working'),
(100, 3, 8, 6, 5, 5, 5, 5, 2, '2024-02-21 00:17:06', ''),
(101, 4, 3, 5, 5, 5, 5, 5, 2, '2024-02-21 00:17:18', 'dsadas'),
(102, 3, 7, 5, 3, 5, 5, 5, 2, '2024-02-21 00:17:31', 'fdsfadfda'),
(104, 3, 7, 3, 5, 5, 5, 5, 5, '2024-02-25 19:35:02', 'test'),
(105, 4, 6, 3, 6, 3, 5, 5, 5, '2024-02-25 19:36:39', 'test'),
(106, 3, 6, 3, 7, 3, 8, 3, 5, '2024-02-25 20:06:54', 'test'),
(107, 1, 7, 2, 7, 5, 4, 5, 5, '2024-02-25 20:23:28', 'aaaaa'),
(108, 5, 5, 5, 5, 5, 5, 5, 5, '2024-02-27 00:13:40', 'aa'),
(109, 2, 7, 3, 7, 2, 5, 7, 5, '2024-02-27 00:14:04', 'aa'),
(110, 3, 7, 3, 6, 2, 6, 0, 5, '2024-02-27 00:16:48', 'bbb'),
(111, 2, 6, 3, 5, 2, 7, 2, 5, '2024-02-27 00:17:16', 'ab'),
(112, 3, 7, 2, 7, 3, 7, 1, 5, '2024-02-27 00:17:57', 'abcdef'),
(113, 1, 7, 3, 7, 3, 7, 3, 5, '2024-02-27 00:19:33', 'will it allow spaces now'),
(114, 3, 7, 4, 5, 5, 3, 5, 5, '2024-02-29 00:01:27', 'testing helmet'),
(115, 3, 7, 2, 7, 3, 7, 2, 5, '2024-03-02 12:10:40', 'testing'),
(116, 1, 8, 2, 9, 1, 7, 2, 5, '2024-03-03 20:40:14', 'Getting sliders to work again'),
(117, 3, 6, 3, 7, 5, 3, 6, 5, '2024-03-03 21:04:46', 'ok sliders wok again'),
(118, 5, 2, 8, 2, 8, 2, 2, 5, '2024-03-03 21:09:36', 'Cannot wait until this is done'),
(120, 2, 7, 3, 7, 3, 7, 7, 5, '2024-03-03 23:31:39', 'i need a holiday after al this'),
(121, 2, 7, 2, 4, 5, 5, 4, 5, '2024-03-03 23:35:52', 'so tired and ready for bed'),
(122, 5, 5, 5, 5, 5, 5, 5, 5, '2024-03-04 00:13:18', 'think the buttons are working now'),
(123, 3, 7, 5, 7, 5, 5, 7, 5, '2024-03-04 00:14:50', 'buttons kind of working'),
(124, 4, 7, 2, 6, 2, 2, 7, 5, '2024-03-04 00:16:53', 'what was disallowed?'),
(125, 2, 7, 2, 8, 5, 5, 5, 5, '2024-03-04 00:18:41', 'checking all going into database'),
(126, 3, 8, 1, 8, 8, 2, 8, 5, '2024-03-04 00:20:17', 'testing again'),
(127, 3, 8, 5, 1, 8, 3, 8, 5, '2024-03-04 00:21:41', 'should be snapshot 126'),
(128, 2, 9, 1, 8, 2, 7, 1, 5, '2024-03-04 00:22:44', '128'),
(129, 5, 5, 5, 5, 5, 5, 5, 5, '2024-03-04 00:36:17', 'so confused about the disallowed charatcters'),
(130, 2, 8, 7, 2, 7, 3, 8, 5, '2024-03-04 00:36:45', 'testing with just one box'),
(131, 3, 7, 2, 8, 5, 5, 5, 5, '2024-03-04 00:38:35', 'test with just one button friends'),
(132, 2, 9, 3, 7, 1, 7, 8, 5, '2024-03-04 00:39:41', 'with study'),
(133, 2, 8, 1, 9, 2, 7, 3, 5, '2024-03-04 00:40:31', 'with study and hungry'),
(134, 2, 7, 2, 7, 2, 7, 2, 5, '2024-03-04 00:44:44', 'I hate this project'),
(135, 5, 5, 5, 5, 5, 5, 5, 5, '2024-03-04 00:45:52', 'why wont the labels work'),
(136, 3, 7, 2, 7, 5, 5, 5, 5, '2024-03-04 00:48:01', 'is it working now'),
(137, 3, 7, 5, 7, 5, 5, 5, 5, '2024-03-04 00:54:37', 'looks slightly different'),
(138, 5, 5, 5, 5, 5, 3, 7, 5, '2024-03-04 00:54:58', 'rafadc'),
(139, 3, 7, 4, 6, 7, 7, 3, 7, '2024-03-04 23:20:02', 'going to test the password change next'),
(140, 5, 5, 5, 5, 5, 5, 5, 8, '2024-03-04 23:43:45', 'not sure why this is not working'),
(141, 3, 8, 2, 8, 3, 5, 5, 8, '2024-03-04 23:45:37', 'now to make it look prettier'),
(142, 2, 7, 5, 3, 7, 1, 5, 5, '2024-03-08 12:24:51', 'really hard to tell if they are selected'),
(143, 2, 5, 8, 5, 5, 5, 5, 5, '2024-03-08 12:31:36', 'test with let\'s'),
(144, 3, 8, 2, 5, 5, 5, 5, 5, '2024-03-08 21:23:47', 'trying to get scripts out'),
(149, 1, 8, 4, 5, 6, 2, 7, 5, '2024-03-09 15:40:35', 'getting summary to work'),
(151, 7, 2, 7, 3, 4, 8, 9, 5, '2024-03-09 21:04:53', 'on the home stretch i hope'),
(152, 2, 7, 9, 2, 8, 2, 8, 5, '2024-03-09 22:24:06', 'let it be over soon');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `snapshot`
--
ALTER TABLE `snapshot`
  ADD PRIMARY KEY (`snapshot_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `snapshot`
--
ALTER TABLE `snapshot`
  MODIFY `snapshot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `snapshot`
--
ALTER TABLE `snapshot`
  ADD CONSTRAINT `FK_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
