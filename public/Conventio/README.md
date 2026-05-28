# 📋 Conventio - Gestion des Conventions de Stage

## 🎯 Contexte du Projet

**Conventio** est une plateforme de gestion des conventions de stage développée pour faciliter les processus administratifs entre étudiants, professeurs et coordonnateurs de stage. Cette application web collaborative permet de créer, gérer, valider et suivre les conventions de stage de manière sécurisée et organisée.

### Période du Projet
📅 **Année Scolaire 2023-2024 - BTS SIO Option SLAM**

### Objectifs Pédagogiques
✅ Apprentissage du développement en équipe
✅ Utilisation d'une architecture MVC robuste
✅ Gestion de bases de données relationnelles
✅ Implémentation de fonctionnalités de sécurité
✅ Respect des cycles SDLC en environnement professionnel

---

## 🏗️ Architecture Technique

### Stack Technologique
- **Framework Web** : Symfony (PHP)
- **Base de données** : MySQL
- **Frontend** : HTML5, CSS3, Bootstrap/Twig
- **Outils** : Docker, Git, GitHub
- **IDE** : PhpStorm
- **Versionning** : GitHub

### Technologies de Sécurité
- **Chiffrement** : Hashage des mots de passe avec bcrypt
- **Authentification** : Session-based avec contrôle d'accès
- **Validation** : Input validation côté serveur et client

---

## 👥 Système de Rôles

L'application dispose de trois rôles principaux avec des permissions différentes:

### 1️⃣ Élève (Étudiant)
**Email requis** : `@lycee-faure.fr`

**Permissions:**
- Consulter son profil personnel
- Créer une nouvelle convention de stage
- Télécharger ses documents
- Suivre l'état de sa convention
- Contacter son superviseur

### 2️⃣ Professeur (Mentor)
**Email requis** : `@ac-grenoble.fr`

**Permissions:**
- Consulter les conventions de ses élèves
- Valider/rejeter les demandes
- Ajouter des commentaires
- Télécharger les documents
- Générer des rapports

### 3️⃣ DDF (Directeur des Formations)
**Email spécifique** : Administrateur système

**Permissions:**
- Gestion complète des utilisateurs
- Créer/supprimer des conventions
- Archiver les documents
- Générer des statistiques
- Audit des opérations

---

## 🔐 Sécurité et Authentification

### Hashage des Mots de Passe
- Utilisation de **bcrypt** pour le hashage sécurisé
- Salt génération automatique
- Aucun mot de passe stocké en clair

### Contrôle d'Accès
- Vérification du rôle utilisateur à chaque action
- Redirection des utilisateurs non autorisés
- Logs d'accès pour audit

### Validation des Inscriptions
- **Élèves** : Domaine email `@lycee-faure.fr` requis
- **Professeurs** : Domaine email `@ac-grenoble.fr` requis
- **DDF** : Inscription sur invitation uniquement

---

## 🚀 Installation et Déploiement

### Prérequis
- PHP 8.0+
- MySQL 5.7+
- Composer
- Docker (recommandé)
- Node.js (pour assets)

### Étapes d'Installation

1. **Cloner le repository**
```bash
git clone https://github.com/maxervj/Conventio.git
cd Conventio
```

2. **Installer les dépendances**
```bash
composer install
npm install
```

3. **Configurer l'environnement**
```bash
cp .env.example .env
# Éditer .env avec vos paramètres
```

4. **Initialiser la base de données**
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

5. **Compiler les assets**
```bash
npm run build
```

6. **Démarrer l'application**
```bash
symfony serve
```

L'application sera accessible sur `http://localhost:8000`

---

## 📚 Fonctionnalités Principales

### Gestion des Conventions
- ✅ Création et modification de conventions
- ✅ Validation multi-étapes
- ✅ Signature numérique (support documents PDF)
- ✅ Versioning des documents
- ✅ Historique des modifications

### Tableau de Bord
- 📊 Vue d'ensemble des conventions
- 📈 Statistiques par rôle
- 🔔 Notifications en temps réel
- 📅 Calendrier des stages

### Gestion des Documents
- 📄 Téléchargement/téléversement sécurisé
- 🗂️ Organisation par catégorie
- 🔒 Contrôle d'accès aux fichiers
- 📋 Génération de rapports automatiques

---

## 🧪 Test et Qualité

### Comptes de Test

**Élève:**
- Email: `test.eleve@lycee-faure.fr`
- Mot de passe: `TestPass123!`

**Professeur:**
- Email: `test.prof@ac-grenoble.fr`
- Mot de passe: `TestPass123!`

**DDF:**
- Email: `admin@conventio.local`
- Mot de passe: `AdminPass123!`

### Commandes de Test
```bash
# Exécuter les tests unitaires
php bin/phpunit

# Exécuter les tests d'intégration
php bin/phpunit --group integration

# Analyse de couverture de code
php bin/phpunit --coverage-html coverage
```

---

## 📊 Structure de la Base de Données

### Entités Principales
- **User** : Gestion des utilisateurs et authentification
- **Convention** : Convention de stage
- **Document** : Documents associés
- **Validation** : Historique des validations
- **Notification** : Système de notifications

---

## 🎓 Apprentissages Clés

Ce projet a permis d'acquérir des compétences en:

✅ **Développement Symfony** - MVC, Routing, ORM
✅ **Base de données** - SQL, Doctrine, Migrations
✅ **Sécurité web** - Authentification, CSRF, XSS protection
✅ **Travail en équipe** - Git, collaboration GitHub
✅ **DevOps** - Docker, déploiement
✅ **Gestion de projet** - Agile, Sprint planning

---

## 👥 Équipe de Développement

Projet réalisé en équipe dans le cadre du BTS SIO Option SLAM.

**Contributeurs:**
- Développement backend
- Développement frontend
- Gestion de la base de données
- Tests et assurance qualité

---

## 📝 Conventions de Code

- **PSR-12** : Standard PHP
- **Commits** : Format conventionnel (feat:, fix:, docs:, etc.)
- **Branches** : Git flow (main, develop, feature/*, hotfix/*)
- **Documentation** : Docblocks PHP, README spécifiques par module

---

## 📞 Support et Questions

Pour des questions ou des rapports de bugs:
- Ouvrir une **issue** sur GitHub
- Contacter l'équipe de développement
- Consulter la documentation détaillée

---

## 📄 Licence

Ce projet est développé à des fins éducatives.

---

**Repository:** [github.com/maxervj/Conventio](https://github.com/maxervj/Conventio)

**Jury 2024** - BTS SIO Option SLAM - Lycée Gabriel Fauré, Annecy