# Conventio - Gestion des Conventions de Stage

Plateforme web de gestion des conventions de stage pour faciliter les processus administratifs entre étudiants, professeurs et coordonnateurs.

Contexte: Année scolaire 2023-2024 - BTS SIO Option SLAM

## Stack Technologique
- **Backend**: Symfony (PHP) + MySQL
- **Frontend**: HTML5, CSS3, Twig
- **Déploiement**: Docker
- **Versioning**: Git/GitHub

## Système de Rôles et Permissions

### Étudiant (@lycee-faure.fr)
Création et suivi des conventions de stage personnelles.

### Professeur (@ac-grenoble.fr)
Validation et gestion des demandes d'étudiants.

### Administrateur
Gestion complète des utilisateurs, conventions et archives.

## Sécurité
- Authentification par session utilisateur
- Hashage bcrypt des mots de passe
- Validation côté serveur et client
- Contrôle d'accès basé sur les rôles
- Audit des opérations

## Installation

1. Cloner le repository
```bash
git clone https://github.com/maxervj/Conventio.git
cd Conventio
```

2. Installer les dépendances
```bash
composer install
npm install
```

3. Configurer l'environnement
```bash
cp .env.example .env
# Éditer .env avec vos paramètres
```

4. Initialiser la base de données
```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

5. Compiler les assets
```bash
npm run build
```

6. Démarrer l'application
```bash
symfony serve
```

L'application sera accessible sur http://localhost:8000

## Fonctionnalités Principales

### Gestion des Conventions
- Création et modification de conventions
- Validation multi-étapes
- Signature numérique (support documents PDF)
- Versioning des documents
- Historique des modifications

### Tableau de Bord
- Vue d'ensemble des conventions
- Statistiques par rôle
- Notifications en temps réel
- Calendrier des stages

### Gestion des Documents
- Téléchargement/téléversement sécurisé
- Organisation par catégorie
- Contrôle d'accès aux fichiers
- Génération de rapports automatiques

## Test et Qualité

### Comptes de Test

Élève:
- Email: test.eleve@lycee-faure.fr
- Mot de passe: TestPass123!

Professeur:
- Email: test.prof@ac-grenoble.fr
- Mot de passe: TestPass123!

Administrateur:
- Email: admin@conventio.local
- Mot de passe: AdminPass123!

### Commandes de Test
```bash
# Exécuter les tests unitaires
php bin/phpunit

# Exécuter les tests d'intégration
php bin/phpunit --group integration

# Analyse de couverture de code
php bin/phpunit --coverage-html coverage
```

## Structure de la Base de Données

### Entités Principales
- User: Gestion des utilisateurs et authentification
- Convention: Convention de stage
- Document: Documents associés
- Validation: Historique des validations
- Notification: Système de notifications

## Apprentissages Clés

Ce projet a permis d'acquérir des compétences en:

- Développement Symfony (MVC, Routing, ORM)
- Base de données (SQL, Doctrine, Migrations)
- Sécurité web (Authentification, CSRF, XSS protection)
- Travail en équipe (Git, collaboration GitHub)
- DevOps (Docker, déploiement)
- Gestion de projet (Agile, Sprint planning)

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