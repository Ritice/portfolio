# 💻 Portfolio Professionnel — Jordan Keumeni

Bienvenue dans le code source de mon portfolio professionnel de **Développeur Web Full-Stack**. 
Ce site web moderne, responsive et minimaliste a été conçu pour présenter mes compétences techniques, mes projets récents et offrir un moyen direct de me contacter.

---

## 🚀 Fonctionnalités Clés
- **Design Professionnel & Minimaliste** : Palette de couleurs moderne (bleu royal, blanc pur, gris de précision) avec des typographies soignées (*Plus Jakarta Sans* et *JetBrains Mono*).
- **Navigation Intelligente** : Un en-tête fixe avec effet de flou de verre (*backdrop-blur*) et un détecteur de défilement actif (*Scroll-Spy*) géré par un `IntersectionObserver` de React.
- **Grille de Projets Interactive** : Des projets fictifs soignés, illustrés par des visuels dédiés et accompagnés d'un bouton **Fiche Technique** ouvrant un modal de détails (défis résolus, technologies utilisées, rôles).
- **Compétences Bento** : Présentation dynamique de l'expertise technique avec filtres interactifs et barres de progression animées.
- **Formulaire de Contact avec Validation** : Validation côté client en temps réel avec des messages d'erreur et un écran d'envoi réussi animé pour une expérience utilisateur impeccable.
- **Animations Fluides** : Micro-interactions réactives et transitions d'apparition soignées avec **Framer Motion** (`motion/react`).

---

## 🛠️ Stack Technique
- **Framework** : [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Style** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Animations** : [Framer Motion / Motion](https://motion.dev/)
- **Langage** : TypeScript (Type-Safe à 100%)

---

## 📦 Lancement en Local

Suivez ces étapes simples pour faire tourner le site sur votre machine locale :

### 1. Cloner ou télécharger le projet
Si vous l'avez exporté vers un dépôt Git :
```bash
git clone <url-de-votre-depot>
cd <nom-du-projet>
```

### 2. Installer les dépendances
Utilisez npm pour installer tous les paquets nécessaires :
```bash
npm install
```

### 3. Lancer le serveur de développement
Démarrez le serveur local pour prévisualiser le site :
```bash
npm run dev
```
Par défaut, le site sera accessible à l'adresse suivante : **`http://localhost:3000`** (ou le port indiqué par Vite).

### 4. Compiler pour la production
Pour générer les fichiers optimisés prêts à être déployés :
```bash
npm run build
```
Les fichiers de production seront générés dans le dossier `/dist`.

---

## ☁️ Déploiement sur Netlify

Netlify est idéal pour héberger cette application Single-Page (SPA) gratuitement et avec d'excellentes performances. Voici les deux méthodes pour le déployer :

### Méthode 1 : Liaison Git avec GitHub (Recommandée - Déploiement Continu)
C'est la méthode la plus professionnelle. Chaque fois que vous ferez un `git push`, Netlify reconstruira automatiquement votre site.

1. Créez un nouveau dépôt sur **GitHub**, **GitLab** ou **Bitbucket** et poussez-y votre code.
2. Connectez-vous à votre tableau de bord [Netlify](https://www.netlify.com/).
3. Cliquez sur **Add a new site** > **Import an existing project**.
4. Sélectionnez votre hébergeur Git et choisissez votre dépôt de portfolio.
5. Dans l'étape de configuration du build, remplissez exactement ces paramètres :
   - **Branch to deploy** : `main` (ou votre branche principale)
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
6. Cliquez sur **Deploy site**. Votre site sera en ligne en quelques secondes !

### Méthode 2 : Déploiement manuel via Netlify CLI (Rapide)
Idéal si vous voulez déployer directement depuis votre terminal sans configurer de dépôt Git.

1. Installez le client Netlify globalement :
   ```bash
   npm install -g netlify-cli
   ```
2. Connectez-vous à votre compte Netlify :
   ```bash
   netlify login
   ```
3. Compilez votre application localement :
   ```bash
   npm run build
   ```
4. Lancez le déploiement en indiquant le dossier de publication :
   ```bash
   netlify deploy --prod --dir=dist
   ```
5. Le terminal vous fournira le lien de votre site en production !

---

*Développé avec rigueur et passion par Jordan Keumeni.*
