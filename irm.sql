-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 28 juil. 2021 à 01:58
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `irm`
--

-- --------------------------------------------------------

--
-- Structure de la table `graph`
--

CREATE TABLE `graph` (
  `id` int(25) NOT NULL,
  `temperature` double NOT NULL,
  `ph` double NOT NULL,
  `humidite` double NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `graph`
--

INSERT INTO `graph` (`id`, `temperature`, `ph`, `humidite`, `date`) VALUES
(1, 30, 7, 55, '2021-06-02'),
(2, 28, 8, 65, '2021-06-03'),
(3, 28, 6, 45, '2021-06-04'),
(4, 29, 7, 60, '2021-06-05'),
(5, 33, 10, 66, '2021-06-06'),
(6, 34, 11, 65, '2021-06-07'),
(7, 24, 5, 77, '2021-06-08');

-- --------------------------------------------------------

--
-- Structure de la table `params`
--

CREATE TABLE `params` (
  `id` int(25) NOT NULL,
  `ph` int(25) NOT NULL,
  `temperature` double NOT NULL,
  `humidite` int(25) NOT NULL,
  `vent` int(25) NOT NULL,
  `activer` int(25) NOT NULL,
  `ventilateur` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `params`
--

INSERT INTO `params` (`id`, `ph`, `temperature`, `humidite`, `vent`, `activer`, `ventilateur`) VALUES
(1, 7, 24.5, 48, 15, 0, 0);

-- --------------------------------------------------------

--
-- Structure de la table `seuils`
--

CREATE TABLE `seuils` (
  `id` int(11) NOT NULL,
  `temperature` double NOT NULL,
  `humidite` int(255) NOT NULL,
  `ph` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `seuils`
--

INSERT INTO `seuils` (`id`, `temperature`, `humidite`, `ph`) VALUES
(1, 27, 45, 10);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(25) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `repassword` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `repassword`, `nom`, `prenom`, `phone`, `country`, `city`) VALUES
(122, 'younes', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Mkaddam', 'Younes', '', '', ''),
(123, 'younes123', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Younes', 'Mkaddam', '', '', ''),
(124, 'younes1', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Younes', 'Mkaddam', '', '', ''),
(125, 'younes11', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Mkaddam', 'Younes', '', '', ''),
(126, 'younes_mk', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Mkaddam', 'Younes', '', '', ''),
(128, 'Hatim', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Hatim', 'Hatim', '0666666', 'Maroc', 'Media'),
(129, 'Mkadam123', '202cb962ac59075b964b07152d234b70', '202cb962ac59075b964b07152d234b70', 'Mkadam', 'Younes', '0634275486', 'Maroc', 'Mohammedia'),
(130, 'Laila22', '81dc9bdb52d04dc20036dbd8313ed055', '81dc9bdb52d04dc20036dbd8313ed055', 'Ait', 'laila', '0698247513', 'Maroc', 'Mohammedia');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `graph`
--
ALTER TABLE `graph`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `params`
--
ALTER TABLE `params`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `seuils`
--
ALTER TABLE `seuils`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `graph`
--
ALTER TABLE `graph`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2087;

--
-- AUTO_INCREMENT pour la table `params`
--
ALTER TABLE `params`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT pour la table `seuils`
--
ALTER TABLE `seuils`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=131;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
