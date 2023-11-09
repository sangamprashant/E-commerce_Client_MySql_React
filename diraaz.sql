-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2023 at 08:58 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diraaz`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin@gmail.com', '$2b$10$EcOmKrcl0.oaF1Tg1Jg0RO3HmnnaeSUT.QqeWDflN5p4tDRgYGXOW', '2023-11-04 10:16:03', '2023-11-04 17:40:11');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`_id`, `name`, `parent`, `created_at`, `updated_at`) VALUES
(2, 'lower3', NULL, '2023-11-04 11:05:49', '2023-11-04 13:37:40'),
(9, 'edf', 2, '2023-11-04 11:30:49', '2023-11-04 11:30:49'),
(10, 'xrfg', 2, '2023-11-04 12:57:21', '2023-11-04 12:57:21'),
(11, 'fx', 11, '2023-11-04 13:04:08', '2023-11-04 13:04:14');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `Aphone` varchar(20) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `carts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`carts`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`_id`, `name`, `email`, `password`, `phone`, `Aphone`, `image`, `parent`, `created_at`, `updated_at`, `carts`) VALUES
(1, 'prashant', 'srivastavp891@gmail.com', '$2b$10$MG6L7Zqm/2IUJ.ebILb.BuTuCZVyH1NDEr2eI00USvKete3CSRrrK', NULL, NULL, NULL, NULL, '2023-11-08 22:04:23', '2023-11-10 01:27:57', '[8,8,8,8,8,8,8,8,8,8,8,8]'),
(2, '', '', '$2b$10$x9saYSPhEmqlHwjnt0jMR.q7MVBXq.mm.O99.osqlOp2fRmOpCnFq', NULL, NULL, NULL, NULL, '2023-11-08 22:24:23', '2023-11-08 22:24:23', ''),
(3, 'sangam', 'sangam@gmail.com', '$2b$10$jKXC1R1qOJHDnzhZ6HQzOeyUWmyy/Yv8UGV6GhX6jbD0NHGEWE1ye', NULL, NULL, NULL, NULL, '2023-11-08 22:30:59', '2023-11-08 22:30:59', ''),
(4, 'sngam', 'sangam2@gmail.com', '$2b$10$p9JMXsnpvYWqxe/zIM6afenikiOXCnbo0aFSBcHIxz8ZYrpN7CKuC', NULL, NULL, NULL, NULL, '2023-11-08 22:46:33', '2023-11-08 22:46:33', ''),
(5, 'sngam', 'sangam3@gmail.com', '$2b$10$ighd0b3NlBY/.BDHi3oA9O9Q8p9QPZmYUk1i60u8Cf7cK.HliFwRO', NULL, NULL, NULL, NULL, '2023-11-08 22:46:52', '2023-11-08 22:46:52', ''),
(6, 'sngam', 'sangam4@gmail.com', '$2b$10$mnNhXvYnsqG75bWBH2Ba8OMFMhC0oMu10FffU9246jULqaOWhhC6C', NULL, NULL, NULL, NULL, '2023-11-08 22:48:02', '2023-11-08 22:48:02', ''),
(7, 'sngam', 'sangam5@gmail.com', '$2b$10$BEG2IxvW8LTKMyEY8GJOm.sYrFCJ0kfu7xs0Q/3Oo/4BmB/8MZR5a', NULL, NULL, NULL, NULL, '2023-11-08 22:53:06', '2023-11-08 22:53:06', ''),
(8, 'srivastav', 'srivastav@gmail.com', '$2b$10$ZLWSTVuKvLQE.cfAiWQi9OIhL6J8vgiDtZmi7HQW8Emhj1aCpa1IS', NULL, NULL, NULL, NULL, '2023-11-08 22:59:22', '2023-11-08 22:59:22', ''),
(9, 'srivastavp', 'srivastavp@gmail.com', '$2b$10$/kjavOJeKxnqz7LHMRraI.rK28j4BTnXdT1JruPmxYtp3ocawOdW6', NULL, NULL, NULL, NULL, '2023-11-08 23:07:19', '2023-11-08 23:07:19', '');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `response` text DEFAULT NULL,
  `responsed` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `APhone` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `paid` tinyint(1) DEFAULT NULL,
  `line_items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`line_items`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `category` varchar(50) DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`properties`)),
  `isDeleted` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`_id`, `title`, `description`, `price`, `images`, `category`, `properties`, `isDeleted`, `created_at`, `updated_at`) VALUES
(1, 'producvtt nsfe', 'f g  d sfg  dfg ; sdfg sdfgl kdsfh gdhfghsdfg', 8690.00, '[]', 'xrfg', '\"\"', 1, '2023-11-04 14:19:15', '2023-11-04 17:37:17'),
(2, 'producvtt', 'kjghk', 97.00, NULL, 'edf', '\"\"', 1, '2023-11-04 14:20:00', '2023-11-04 17:37:18'),
(3, 'dfg', 'drt', 456.00, NULL, 'xrfg', '\"\"', 1, '2023-11-04 14:21:08', '2023-11-04 17:37:19'),
(4, 'producvtt nsfe', 'hjh gh hgg', 87.00, '[\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20194550.png1699107789205?alt=media&token=33127225-d1ca-44e6-bf07-1e48eb2fd3cc\"]', 'fx', '\"\"', 1, '2023-11-04 14:23:20', '2023-11-04 17:37:20'),
(5, 'producvtt nsfe 5', 'sdfg dfr', 87.00, '[\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20164131.png1699107816679?alt=media&token=ed9012c5-79a5-40f8-a0f2-19a510d3b124\",\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20194550.png1699107819757?alt=media&token=62c01fd0-d9f1-4cc3-9399-f0979daee26d\"]', 'edf', '\"xdf\"', 1, '2023-11-04 14:23:44', '2023-11-04 17:37:21'),
(6, 'producvtt nsfe6', 'jhnxzdfh  sdffjk v', 34.00, '[\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20194550.png1699116656619?alt=media&token=8cf40868-a1c0-47f5-93de-7a1ad57e1b17\"]', 'lower3', '\"\\\"xdf\\\"\"', 1, '2023-11-04 16:51:09', '2023-11-04 17:37:10'),
(7, 'producvtt nsfe7', 'jhgh86', 867.00, '[\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20194550.png1699117885907?alt=media&token=84d4414c-eebf-4cd5-b20a-055d62ffe53e\"]', 'lower3', '[{\"name\":\"gdfd\",\"parent\":\"4dfcfg\"},{\"name\":\"hello\",\"parent\":\"hi\"},{\"name\":\"xdf\",\"parent\":\"sehf\"},{\"name\":\"storage\",\"parent\":\"512GB\"},{\"name\":\"Storage\",\"parent\":\"250GB\"}]', 0, '2023-11-04 17:11:34', '2023-11-04 17:41:04'),
(8, 'producvtt nsfe8', 'bjh9877', 97.00, '[\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20194550.png1699119484443?alt=media&token=baa48203-3958-419d-b30d-d39d91a59fee\",\"https://firebasestorage.googleapis.com/v0/b/kloth-ffea7.appspot.com/o/images%2FScreenshot%202023-11-04%20164131.png1699119455661?alt=media&token=ea5536a1-803f-49a1-8b3a-486d4fc113fd\"]', 'lower3', '[{\"name\":\"storage\",\"parent\":\"512GB\"}]', 0, '2023-11-04 17:37:46', '2023-11-04 17:40:59'),
(9, '', '', 0.00, '[]', '', '[{\"name\":\"Storage\",\"parent\":\"250GB\"},{\"name\":\"storage\",\"parent\":\"512GB\"},{\"name\":\"gdfd\",\"parent\":\"4dfcfg\"},{\"name\":\"hello\",\"parent\":\"hi\"}]', 1, '2023-11-04 17:50:30', '2023-11-04 17:50:33');

-- --------------------------------------------------------

--
-- Table structure for table `properties`
--

CREATE TABLE `properties` (
  `_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `properties`
--

INSERT INTO `properties` (`_id`, `name`, `parent`, `created_at`, `updated_at`) VALUES
(4, 'hello', 'hi', '2023-11-04 13:44:54', '2023-11-04 13:44:54'),
(5, 'gdfd', '4dfcfg', '2023-11-04 13:45:55', '2023-11-04 13:45:55'),
(6, 'storage', '512GB', '2023-11-04 17:32:33', '2023-11-04 17:32:33'),
(7, 'Storage', '250GB', '2023-11-04 17:32:51', '2023-11-04 17:32:51');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subscribed_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `parent` (`parent`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`_id`),
  ADD KEY `parent` (`parent`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `properties`
--
ALTER TABLE `properties`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `properties`
--
ALTER TABLE `properties`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `categories` (`_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
