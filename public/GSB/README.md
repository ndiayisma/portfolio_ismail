# GSB-Express - Gestion des Visites et API REST

Application mobile Android intégrée avec API REST pour la gestion des visites et praticiens du groupe pharmaceutique GSB.

Période: Novembre 2025 - Avril 2026

## Stack Technologique

**Backend API**
- Express.js (Node.js)
- TypeScript
- MongoDB
- Authentification JWT
- Hashage Bcrypt

**Application Mobile**
- Android (Java)
- Architecture MVVM
- Retrofit pour API HTTP
- SQLite local

## Installation Backend

```bash
git clone https://github.com/ndiayisma/api-rest-gsb.git
cd api-rest-gsb
npm install
```

Configurer MongoDB et créer fichier **.env** avec identifiants, puis:

```bash
npx ts-node server.ts
```

API accessible sur http://localhost:3000
            .build();
        
        Retrofit retrofit = new Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .client(client)
            .build();
        
        return retrofit.create(ApiService.class);
    }
}
```

---

## 🔐 Authentification & Sécurité

### Avantages de l'API

- **Bcrypt** : Hash du mot de passe sécurisé
- **JWT Tokens** : Authentification par token (1 heure validité)
- **Express-rate-limit** : Protection force brute
- **HTTPS** : Chiffrement des données en transit
- **Protection XSS** : Validation des inputs
- **CORS** : Contrôle des origines

### Flux Authentification

1. Utilisateur envoie `POST /auth/login` (username + password)
2. API vérifie les credentials avec Bcrypt
3. API génère JWT token (1h expiration)
4. App stocke le token en local
5. Token envoyé dans header `Authorization: Bearer <token>` pour chaque requête

---

## � Screenshots Android

### Page de Connexion

![Page Connexion](/GSB/pageConnexion.png)

La page de connexion demande les identifiants (username/password) de l'utilisateur.

### Liste des Praticiens

![Liste Praticiens](/GSB/listePraticiens.png)

Après connexion, l'application affiche la liste des praticiens disponibles avec synchronisation locale.

---

## �📊 Exemples Postman

### 1. Login - Récupérer le Token

**Request:**
```
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "username": "visiteur1",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "507f1f77bcf86cd799439011",
  "username": "visiteur1"
}
```

![Login Postman](/GSB/PassageBody.png)

### 2. Récupérer les Visites (avec Bearer Token)

**Request:**
```
GET http://localhost:3000/api/visites
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "praticienId": "507f1f77bcf86cd799439012",
    "date": "2026-05-28",
    "duree": 30,
    "motif": "Consultation"
  }
]
```

![Bearer Token](/GSB/BearerToken.png)
![JSON Response](/GSB/Resultat_JSON.png)

### 3. Créer une Visite

**Request:**
```
POST http://localhost:3000/api/visites
Authorization: Bearer <token>
Content-Type: application/json

{
  "praticienId": "507f1f77bcf86cd799439012",
  "date": "2026-05-30",
  "duree": 45,
  "motif": "Visite de suivi"
}
```

---

## 🔑 Endpoints API

| Méthode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| POST | `/auth/login` | Connexion utilisateur | ❌ |
| GET | `/praticiens` | Lister les praticiens | ✅ |
| GET | `/praticiens/:id` | Détail praticien | ✅ |
| GET | `/visites` | Lister les visites | ✅ |
| GET | `/visites/:id` | Détail visite | ✅ |
| POST | `/visites` | Créer visite | ✅ |
| PUT | `/visites/:id` | Modifier visite | ✅ |
| DELETE | `/visites/:id` | Supprimer visite | ✅ |

---

## 📱 Guide Utilisation Android

### Flux Utilisateur

1. **Login** - Authentification avec credentials
2. **Dashboard** - Affichage praticiens (sync local)
3. **Détails Praticien** - Voir visites associées
4. **Gérer Visites** - Créer/modifier/supprimer visites

### Données Locales (SQLite)

```sql
-- Table Praticiens
CREATE TABLE praticiens (
  id TEXT PRIMARY KEY,
  nom TEXT NOT NULL,
  specialite TEXT,
  adresse TEXT,
  telephone TEXT
);

-- Table Visites
CREATE TABLE visites (
  id TEXT PRIMARY KEY,
  praticienId TEXT,
  date TEXT,
  duree INTEGER,
  motif TEXT,
  FOREIGN KEY (praticienId) REFERENCES praticiens(id)
);
```

---

## 🛠️ Mode Développement

### Architecture MVVM

- **Model** - Données (Praticien, Visite)
- **View** - UI (Activities, Fragments)
- **ViewModel** - Logique métier et état

### DataBinding

Liaison automatique entre données et UI:
```xml
<EditText
    android:text="@{viewModel.username}"
    android:onTextChanged="@{viewModel::onUsernameChanged}" />
```

---

## 📦 Repositories GitHub

- **API REST** : https://github.com/ndiayisma/api-rest-gsb
- **App Android** : https://github.com/ndiayisma/gsb-visites

---

## 🎓 Apprentissages BTS SIO

- ✅ Architecture full-stack (Mobile + API)
- ✅ Authentification & sécurité (JWT, Bcrypt, Rate-limiting)
- ✅ Gestion base de données (MongoDB, SQLite)
- ✅ Communication API (Retrofit, HTTP)
- ✅ Pattern Architecture (MVVM, DataBinding)
- ✅ Tests & Postman

---

*Projet réalisé dans le cadre du BTS SIO - Stage 2ème année*