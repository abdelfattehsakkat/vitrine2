# 📸 Guide d'Organisation des Images - Cabinet Dentaire

## 📁 Structure des dossiers

```
public/images/
├── hero/                    # Images pour la section hero/bannière
│   ├── hero-main.jpg       # Image principale de la bannière (1920x800px)
│   ├── hero-mobile.jpg     # Version mobile (800x600px)
│   └── hero-webp/          # Versions WebP pour performance
│       ├── hero-main.webp
│       └── hero-mobile.webp
│
├── cabinet/                # Photos du cabinet
│   ├── reception.jpg       # Salle d'attente/réception
│   ├── salle-soins-1.jpg  # Salle de soins principale
│   ├── salle-soins-2.jpg  # Deuxième salle de soins
│   ├── equipements.jpg     # Équipements modernes
│   ├── sterilisation.jpg   # Zone de stérilisation
│   ├── panoramique.jpg     # Radio panoramique
│   └── thumbnails/         # Versions miniatures (300x200px)
│       ├── reception-thumb.jpg
│       ├── salle-soins-1-thumb.jpg
│       └── ...
│
├── soins/                  # Images des différents soins
│   ├── conservateurs.jpg   # Soins conservateurs (600x400px)
│   ├── implantologie.jpg   # Implants dentaires
│   ├── orthodontie.jpg     # Appareils dentaires
│   ├── esthetique.jpg      # Esthétique dentaire
│   ├── detartrage.jpg      # Détartrage/hygiène
│   ├── urgences.jpg        # Soins d'urgence
│   └── avant-apres/        # Photos avant/après
│       ├── esthetique-avant-1.jpg
│       ├── esthetique-apres-1.jpg
│       └── ...
│
├── team/                   # Photos de l'équipe
│   ├── dentiste-principal.jpg  # Dentiste principal (400x400px)
│   ├── assistante-1.jpg        # Assistante dentaire
│   ├── hygieniste.jpg          # Hygiéniste
│   └── equipe-complete.jpg     # Photo de groupe
│
├── diplomes/              # Diplômes et certifications
│   ├── diplome-dentiste.jpg
│   ├── certification-implants.jpg
│   ├── formation-esthetique.jpg
│   └── ...
│
├── logos/                 # Logos et icônes
│   ├── logo-cabinet.png   # Logo principal (transparent PNG)
│   ├── logo-simple.svg    # Version vectorielle simple
│   ├── favicon.ico        # Favicon
│   └── favicon.png        # Favicon PNG (32x32px)
│
└── misc/                  # Images diverses
    ├── placeholder.jpg    # Image de remplacement
    ├── loading.gif        # Animation de chargement
    └── background-pattern.png
```

## 📏 Tailles recommandées

### 🖼️ Images principales
- **Hero/Bannière** : 1920x800px (ratio 2.4:1)
- **Version mobile** : 800x600px (ratio 4:3)
- **Galerie cabinet** : 800x600px (ratio 4:3)
- **Photos soins** : 600x400px (ratio 3:2)

### 👤 Photos équipe
- **Portrait individuel** : 400x400px (carré)
- **Photo de groupe** : 1200x600px (ratio 2:1)

### 🏆 Diplômes
- **Format paysage** : 800x600px
- **Format portrait** : 600x800px

### 🔗 Logos/Icônes
- **Logo principal** : 200x80px (PNG transparent)
- **Favicon** : 32x32px et 16x16px
- **SVG** : Logo vectoriel pour toutes tailles

## 🎯 Conventions de nommage

### ✅ Bonnes pratiques :
```
hero-main.jpg              ✅ Descriptif et clair
salle-soins-1.jpg         ✅ Numéroté si plusieurs
dentiste-principal.jpg     ✅ Rôle descriptif
avant-apres-esthetique-1.jpg ✅ Catégorie + numéro
```

### ❌ À éviter :
```
IMG_1234.jpg              ❌ Nom générique
photo.png                 ❌ Trop vague
image-cabinet.jpeg        ❌ Extension mixte (.jpeg au lieu de .jpg)
Salle De Soins.jpg        ❌ Espaces et majuscules
```

## 🚀 Optimisation des images

### 📦 Formats recommandés
1. **WebP** pour les navigateurs modernes (meilleure compression)
2. **JPEG** pour les photos (fallback)
3. **PNG** pour les logos avec transparence
4. **SVG** pour les icônes et logos vectoriels

### ⚡ Compression
- **JPEG** : 80-85% qualité
- **WebP** : 75-80% qualité
- **PNG** : Optimisation avec TinyPNG ou similaire

## 🔧 Utilisation dans le code

```tsx
import Image from 'next/image';

// Image optimisée avec Next.js
<Image
  src="/images/cabinet/reception.jpg"
  alt="Salle d'attente moderne du cabinet dentaire"
  width={800}
  height={600}
  priority={false}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
/>

// Pour la galerie
const cabinetImages = [
  {
    src: '/images/cabinet/reception.jpg',
    alt: 'Salle d\'attente moderne et confortable',
    title: 'Réception'
  },
  {
    src: '/images/cabinet/salle-soins-1.jpg',
    alt: 'Salle de soins équipée des dernières technologies',
    title: 'Salle de soins'
  }
];
```

## 📋 Checklist avant ajout des images

### ✅ Préparation
- [ ] Images redimensionnées aux bonnes tailles
- [ ] Compression appliquée (< 500KB par image)
- [ ] Noms de fichiers en minuscules, avec tirets
- [ ] Alt text préparé pour l'accessibilité
- [ ] Versions WebP créées si possible

### ✅ Organisation
- [ ] Placées dans le bon dossier selon la catégorie
- [ ] Noms cohérents avec la convention
- [ ] Versions thumbnails créées si nécessaire
- [ ] Backup des images originales conservé

## 🛠️ Outils recommandés

### 🖼️ Redimensionnement/Optimisation
- **ImageOptim** (Mac) - Compression sans perte
- **TinyPNG** (Web) - Compression PNG/JPEG
- **Squoosh** (Web, Google) - Conversion et optimisation
- **GIMP/Photoshop** - Retouche et redimensionnement

### 📱 Génération de favicons
- **RealFaviconGenerator** - Génère tous les formats
- **Favicon.io** - Création simple de favicons

## 💡 Conseils pratiques

1. **Testez sur mobile** : Vérifiez que les images s'affichent bien sur petit écran
2. **Alt text descriptif** : Important pour l'accessibilité et le SEO
3. **Lazy loading** : Activé par défaut avec Next.js Image
4. **Priority** : Utilisez `priority={true}` pour les images above-the-fold
5. **Placeholder** : Ajoutez des placeholders pour améliorer l'UX

## 📝 Exemple complet

Placez vos images selon cette structure, puis elles seront automatiquement utilisées dans le site !

```bash
# Exemple de commande pour optimiser une image
# (à exécuter depuis le dossier public/images/)
npx @squoosh/cli --webp '{"quality":80}' cabinet/reception.jpg
```

---

**Prêt à ajouter vos images ? Suivez cette structure et votre site aura des images parfaitement organisées ! 📸✨**