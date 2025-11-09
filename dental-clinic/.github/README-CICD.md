# 🚀 CI/CD - Déploiement Automatique

## 📦 Images Docker Automatiques

À chaque commit sur la branche `main`, GitHub Actions :

1. ✅ **Build** l'image Docker multi-architecture (AMD64 + ARM64)
2. ✅ **Push** vers GitHub Container Registry
3. ✅ **Tag** automatiquement (`latest`, `main-sha123...`, etc.)
4. ✅ **Cache** pour des builds rapides
5. ✅ **Génère** un package de déploiement

## 🔧 Configuration GitHub Actions

### 1. Activer GitHub Container Registry

Dans votre repository GitHub :
1. Aller dans **Settings** → **Actions** → **General**
2. Dans **Workflow permissions**, sélectionner :
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

### 2. Variables d'environnement (optionnel)

Dans **Settings** → **Secrets and variables** → **Actions** → **Variables** :
- `NEXT_PUBLIC_SITE_URL` : URL de votre site (ex: `https://cabinet-dentaire.fr`)

## 🎯 Utilisation

### ✅ Build automatique

```bash
# Trigger un build automatique
git add .
git commit -m "Update site content"
git push origin main
```

### ✅ Déploiement manuel

Après chaque commit, récupérez l'image :

```bash
# Pull de la dernière version
docker pull ghcr.io/abdelfattehsakkat/vitrine2:latest

# Démarrage rapide
docker run -d -p 3000:3000 --name dental-clinic ghcr.io/abdelfattehsakkat/vitrine2:latest
```

### ✅ Avec Docker Compose

Modifiez votre `docker-compose.yml` :

```yaml
services:
  dental-clinic:
    image: ghcr.io/abdelfattehsakkat/vitrine2:latest
    # ... reste de la configuration
```

Puis :
```bash
docker-compose pull
docker-compose up -d
```

## 📋 Workflow disponibles

### 1. **Build and Push** (`docker-build.yml`)
- **Déclencheur** : Push sur `main`, `develop` ou tags `v*`
- **Action** : Build et push de l'image Docker
- **Outputs** : Image dans ghcr.io avec tags multiples

### 2. **Deploy** (`deploy.yml`)  
- **Déclencheur** : Push sur `main` ou manuel
- **Action** : Génère un package de déploiement
- **Outputs** : Artefacts téléchargeables pour déploiement

## 🔍 Monitoring des Builds

### Status des builds
- ✅ **Vert** : Build réussi, image disponible
- 🟡 **Jaune** : Build en cours
- ❌ **Rouge** : Échec du build

### Voir les builds
1. Aller dans l'onglet **Actions** de votre repository
2. Sélectionner un workflow
3. Voir les logs détaillés

## 🌐 URLs des Images

Vos images seront disponibles à :
- **Latest** : `ghcr.io/abdelfattehsakkat/vitrine2:latest`
- **Par branch** : `ghcr.io/abdelfattehsakkat/vitrine2:main`
- **Par commit** : `ghcr.io/abdelfattehsakkat/vitrine2:main-abc1234`
- **Par tag** : `ghcr.io/abdelfattehsakkat/vitrine2:v1.0.0`

## 🚀 Déploiement sur VPS

### Option 1 : Script automatique (depuis les artefacts)

```bash
# Télécharger le package de déploiement depuis GitHub Actions
# Extraire et exécuter :
./deploy-latest.sh
```

### Option 2 : Manuel avec la dernière image

```bash
# Sur votre VPS
docker pull ghcr.io/abdelfattehsakkat/vitrine2:latest
docker stop dental-clinic-app 2>/dev/null || true
docker rm dental-clinic-app 2>/dev/null || true
docker run -d \
  --name dental-clinic-app \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  ghcr.io/abdelfattehsakkat/vitrine2:latest
```

### Option 3 : Avec Docker Compose

Mettre à jour votre `docker-compose.yml` :

```yaml
services:
  dental-clinic:
    image: ghcr.io/abdelfattehsakkat/vitrine2:latest
    # ... reste de la config
```

Puis :
```bash
docker-compose pull && docker-compose up -d
```

## 🔄 Mise à jour Continue

Pour automatiser complètement :

```bash
#!/bin/bash
# update-site.sh - Script de mise à jour automatique

echo "🔄 Checking for updates..."
docker pull ghcr.io/abdelfattehsakkat/vitrine2:latest

if [ $? -eq 0 ]; then
  echo "📦 New version found, updating..."
  docker-compose pull
  docker-compose up -d
  echo "✅ Site updated successfully!"
else
  echo "ℹ️  No updates available"
fi
```

Ajoutez à votre crontab pour vérifier les mises à jour :
```bash
# Vérifier les mises à jour toutes les heures
0 * * * * /path/to/update-site.sh >> /var/log/dental-clinic-update.log 2>&1
```

## 🎉 Avantages

- ✨ **Déploiement instantané** après chaque commit
- 🔒 **Images sécurisées** via GitHub Container Registry  
- 📱 **Multi-architecture** (AMD64 + ARM64)
- ⚡ **Cache intelligent** pour des builds rapides
- 📦 **Packages de déploiement** automatiques
- 🔄 **Rollback facile** avec les tags de commit

---

**🚀 Votre site se met à jour automatiquement à chaque commit !**