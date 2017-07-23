-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-07-23 07:30:26
-- 服务器版本： 5.7.17
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oct_user`
--

-- --------------------------------------------------------

--
-- 表的结构 `category1_data`
--

CREATE TABLE `category1_data` (
  `imgname` text COLLATE utf8_bin NOT NULL,
  `title` text COLLATE utf8_bin NOT NULL,
  `price` int(255) NOT NULL,
  `color` text COLLATE utf8_bin NOT NULL,
  `salecount` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- 转存表中的数据 `category1_data`
--

INSERT INTO `category1_data` (`imgname`, `title`, `price`, `color`, `salecount`) VALUES
('category1_1', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 251, '黑色', 188),
('category1_2', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 221, '黑色', 188),
('category1_3', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 211, '黑色', 167),
('category1_4', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 132, '黑色', 99),
('category1_5', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 222, '黑色', 88),
('category1_6', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 151, '黑色', 81),
('category1_7', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 62),
('category1_8', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 35),
('category1_9', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 167, '黑色', 26),
('category1_10', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 200, '黑色', 35),
('category1_11', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 196, '黑色', 32),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 185, '黑色', 39),
('category1_13', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 122, '黑色', 59),
('category1_14', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 201, '黑色', 181),
('category1_15', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 111, '黑色', 241),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 124, '黑色', 29),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 142, '黑色', 28),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 155, '黑色', 51),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 52),
('category1_20', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 161, '黑色', 35),
('category1_21', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 169, '黑色', 66),
('category1_22', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 15),
('category1_23', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 196, '黑色', 12),
('category1_24', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 187, '黑色', 29),
('category1_25', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 128, '黑色', 19),
('category1_1', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 212),
('category1_2', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 211),
('category1_3', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 68),
('category1_4', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 69),
('category1_5', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 62),
('category1_6', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 64),
('category1_7', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 45),
('category1_8', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 43),
('category1_9', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 42),
('category1_11', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_13', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 18),
('category1_14', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 19),
('category1_15', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 12),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 14),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 65),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 63),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 52),
('category1_20', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_21', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_22', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 118),
('category1_23', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 119),
('category1_24', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57),
('category1_20', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_21', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_22', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 111),
('category1_23', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 112),
('category1_24', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57),
('category1_10', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_1', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 111),
('category1_13', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 112),
('category1_4', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_6', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_7', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_8', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_9', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57),
('category1_11', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_2', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 111),
('category1_3', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 112),
('category1_15', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57),
('category1_11', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_2', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 111),
('category1_3', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 112),
('category1_15', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57),
('category1_11', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_2', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 111),
('category1_3', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 112),
('category1_15', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_16', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_17', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_18', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_19', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57),
('category1_1', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 181, '黑色', 202),
('category1_2', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 182, '黑色', 221),
('category1_12', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 114, '黑色', 111),
('category1_13', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 152, '黑色', 112),
('category1_5', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 156, '黑色', 112),
('category1_6', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 121, '黑色', 114),
('category1_7', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 164, '黑色', 60),
('category1_8', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 163, '黑色', 67),
('category1_9', '十月妈咪octmami2016新款舒适时尚宽松孕妇套装', 205, '黑色', 57);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
