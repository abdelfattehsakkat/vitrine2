# 📸 LISTE DES IMAGES À UPLOADER

## 🚨 PRIORITÉ HAUTE - Images essentielles

### 📂 `/public/images/hero/`
- **`hero-main.jpg`** (1920x800px)
  - Image principale pour la bannière d'accueil
  - Photo du cabinet vue d'ensemble ou équipe souriante
  - Format paysage, haute qualité

### 📂 `/public/images/cabinet/`
- **`reception.jpg`** (800x600px)
  - Salle d'attente/réception du cabinet
  - Ambiance moderne et accueillante

- **`salle-soins-1.jpg`** (800x600px)
  - Salle de soins principale avec fauteuil dentaire
  - Équipements visibles, éclairage professionnel

- **`equipements.jpg`** (800x600px)
  - Gros plan sur équipements dentaires modernes
  - Écran, instruments, technologie

- **`sterilisation.jpg`** (800x600px)
  - Zone de stérilisation/hygiène
  - Autoclaves, instruments stérilisés

### 📂 `/public/images/soins/`
- **`conservateurs.jpg`** (600x400px)
  - Soins dentaires en cours (carie, obturation)
  - Ou instruments pour soins conservateurs

- **`implantologie.jpg`** (600x400px)
  - Implant dentaire ou chirurgie implantaire
  - Radio panoramique avec implants visibles

- **`esthetique.jpg`** (600x400px)
  - Sourire éclatant ou facettes dentaires
  - Avant/après blanchiment

- **`orthodontie.jpg`** (600x400px)
  - Appareils dentaires, aligneurs transparents
  - Correction dentaire en cours

## 📋 PRIORITÉ MOYENNE - Images complémentaires

### 📂 `/public/images/team/`
- **`dentiste-principal.jpg`** (400x400px, carré)
  - Photo du dentiste principal en blouse
  - Fond professionnel, souriant

- **`assistante-1.jpg`** (400x400px, carré)
  - Photo de l'assistante dentaire
  - Même style que le dentiste

### 📂 `/public/images/logos/`
- **`logo-cabinet.png`** (200x80px, fond transparent)
  - Logo officiel du cabinet
  - Format PNG avec transparence

- **`favicon.ico`** (32x32px)
  - Icône pour l'onglet du navigateur
  - Simple et reconnaissable

## 🎯 CONSEILS TECHNIQUES

### ✅ Format et qualité
- **Format** : JPG pour les photos, PNG pour les logos
- **Taille** : Respecter les dimensions indiquées
- **Poids** : Moins de 500KB par image
- **Qualité** : 85% compression JPG recommandée

### ✅ Style et cohérence
- **Éclairage** : Lumineux et professionnel
- **Angle** : Éviter les contre-plongées
- **Fond** : Neutre et propre
- **Couleurs** : Cohérentes avec le thème bleu du site

### ✅ Contenu recommandé
- **Cabinet** : Propre, moderne, accueillant
- **Équipe** : Souriante, professionnelle
- **Équipements** : Récents, high-tech
- **Soins** : Précis mais non dérangeants

## 🚀 APRÈS UPLOAD

Une fois les images uploadées dans les dossiers correspondants :

1. ✅ Les images s'afficheront automatiquement sur le site
2. ✅ Next.js les optimisera automatiquement (WebP, compression)
3. ✅ Le site utilisera les vraies images au lieu des placeholders SVG
4. ✅ Les performances seront optimales (lazy loading, responsive)

## 📁 Structure finale attendue

```
public/images/
├── hero/
│   └── hero-main.jpg          ⭐ PRIORITÉ 1
├── cabinet/
│   ├── reception.jpg          ⭐ PRIORITÉ 1
│   ├── salle-soins-1.jpg      ⭐ PRIORITÉ 1
│   ├── equipements.jpg        ⭐ PRIORITÉ 1
│   └── sterilisation.jpg      ⭐ PRIORITÉ 1
├── soins/
│   ├── conservateurs.jpg      ⭐ PRIORITÉ 1
│   ├── implantologie.jpg      ⭐ PRIORITÉ 1
│   ├── esthetique.jpg         ⭐ PRIORITÉ 1
│   └── orthodontie.jpg        ⭐ PRIORITÉ 1
├── team/
│   ├── dentiste-principal.jpg 📋 PRIORITÉ 2
│   └── assistante-1.jpg       📋 PRIORITÉ 2
└── logos/
    ├── logo-cabinet.png       📋 PRIORITÉ 2
    └── favicon.ico            📋 PRIORITÉ 2
```

## 🎯 RÉSULTAT ATTENDU

Après upload de ces 12 images principales, votre site aura :
- ✨ Une bannière d'accueil avec vraie photo
- 🏠 Une galerie interactive du cabinet (4 photos)
- 🦷 Des illustrations pour chaque soin (4 photos)
- 👥 Photos de l'équipe (optionnel)
- 🎨 Logo professionnel (optionnel)

---

**🚀 Prêt à transformer votre site avec de vraies photos professionnelles !**