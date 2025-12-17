# Portfolio de Wiem Cherni

Portfolio personnel moderne et dynamique créé avec React.

## 🚀 Installation

### 1. Créer le projet

```bash
npx create-react-app portfolio-wiem
cd portfolio-wiem
```

### 2. Installer les dépendances

```bash
npm install lucide-react
npm install gh-pages --save-dev
```

### 3. Structure des dossiers

Créez les dossiers et fichiers nécessaires :

```bash
# Windows (CMD)
mkdir src\components
mkdir src\images

type nul > src\components\Header.jsx
type nul > src\components\Hero.jsx
type nul > src\components\About.jsx
type nul > src\components\Experience.jsx
type nul > src\components\Projects.jsx
type nul > src\components\Certifications.jsx
type nul > src\components\Skills.jsx
type nul > src\components\Gallery.jsx
type nul > src\components\Contact.jsx
```

### 4. Ajouter les photos

Copiez vos photos dans `src/images/` avec ces noms exacts :
- `profile.jpg` (photo de profil principale)
- `photo-securinets.jpg` (Club Securinets)
- `photo-stage-1.jpg` (Stage 1)
- `photo-stage-2.jpg` (Stage 2)
- `photo-gdg.jpg` (GDG Event)
- `photo-young.jpg` (Événement jeunesse)

### 5. Copier les fichiers de code

Copiez le contenu de chaque fichier généré dans les fichiers correspondants de votre projet.

### 6. Lancer le projet en local

```bash
npm start
```

Le portfolio s'ouvrira sur http://localhost:3000

## 📦 Déploiement sur GitHub Pages

### 1. Créer un dépôt GitHub

1. Allez sur https://github.com
2. Créez un nouveau dépôt nommé `portfolio`
3. Ne cochez pas "Initialize with README"

### 2. Initialiser Git dans votre projet

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/wiemcherni22/portfolio.git
git push -u origin main
```

### 3. Déployer sur GitHub Pages

```bash
npm run deploy
```

Votre portfolio sera disponible sur : https://wiemcherni22.github.io/portfolio

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs principales sont définies avec des gradients :
- Primaire : `#667eea` → `#764ba2`
- Pour changer, recherchez ces codes couleur dans les fichiers

### Modifier le contenu

- **Informations personnelles** : Fichiers `Hero.jsx`, `About.jsx`, `Contact.jsx`
- **Expérience** : `Experience.jsx`
- **Projets** : `Projects.jsx`
- **Compétences** : `Skills.jsx`
- **Certifications** : `Certifications.jsx`

## 📱 Responsive

Le portfolio est entièrement responsive et s'adapte à :
- 📱 Mobile (< 768px)
- 💻 Tablette (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🛠️ Technologies utilisées

- **React** - Framework JavaScript
- **Lucide React** - Icônes
- **CSS-in-JS** - Styles inline pour simplicité
- **GitHub Pages** - Hébergement gratuit

## 📝 Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run deploy` - Déploie sur GitHub Pages
- `npm test` - Lance les tests

## 🐛 Résolution de problèmes

### Les images ne s'affichent pas
- Vérifiez que les noms des fichiers correspondent exactement
- Les images doivent être dans `src/images/`
- Respectez la casse (majuscules/minuscules)

### Erreur lors du déploiement
- Vérifiez que `homepage` dans `package.json` est correct
- Assurez-vous d'avoir push votre code sur GitHub d'abord
- Vérifiez vos permissions GitHub

### Le site ne se charge pas après déploiement
- Attendez 2-3 minutes après le déploiement
- Videz le cache de votre navigateur
- Vérifiez l'URL : https://wiemcherni22.github.io/portfolio

## 📧 Contact

Pour toute question concernant ce portfolio :
- Email : wiemcherni05@gmail.com
- LinkedIn : [wiem-cherni-723b80195](https://www.linkedin.com/in/wiem-cherni-723b80195)
- GitHub : [wiemcherni22](https://github.com/wiemcherni22)

## 📄 Licence

Ce projet est open source et disponible pour utilisation personnelle.

---

Développé avec ❤️ pour Wiem Cherni"# portfolio" 
