#!/bin/bash

# Script de déploiement rapide pour VPS Ubuntu
# Usage: ./deploy.sh [domain] [email]

set -e

# Variables
DOMAIN=${1:-"votre-domaine.com"}
EMAIL=${2:-"admin@$DOMAIN"}
PROJECT_DIR="/opt/dental-clinic"

echo "🚀 Déploiement du Cabinet Dentaire"
echo "Domain: $DOMAIN"
echo "Email: $EMAIL"
echo "Project Directory: $PROJECT_DIR"

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Créer le répertoire du projet
echo "📁 Création du répertoire du projet..."
mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Sauvegarder la configuration existante si elle existe
if [ -f "docker-compose.yml" ]; then
    echo "💾 Sauvegarde de la configuration existante..."
    cp docker-compose.yml docker-compose.yml.backup.$(date +%Y%m%d-%H%M%S)
fi

# Mise à jour de la configuration Docker Compose
echo "⚙️ Configuration de Docker Compose..."
cat > docker-compose.yml << EOF
version: '3.8'

services:
  dental-clinic:
    image: ghcr.io/abdelfattehsakkat/vitrine2:latest
    container_name: dental-clinic-app
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_TELEMETRY_DISABLED=1
      - NEXT_PUBLIC_SITE_URL=https://$DOMAIN
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dental-clinic.rule=Host(\`$DOMAIN\`)"
      - "traefik.http.routers.dental-clinic.tls=true"
      - "traefik.http.routers.dental-clinic.tls.certresolver=letsencrypt"
      - "traefik.http.services.dental-clinic.loadbalancer.server.port=3000"
    networks:
      - web

  traefik:
    image: traefik:v2.10
    container_name: traefik
    restart: unless-stopped
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=$EMAIL"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"
      - "--entrypoints.web.http.redirections.entrypoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"
    networks:
      - web

networks:
  web:
    external: true
EOF

# Créer le réseau Docker si il n'existe pas
echo "🌐 Création du réseau Docker..."
docker network create web 2>/dev/null || echo "Le réseau 'web' existe déjà"

# Créer le répertoire pour les certificats
echo "🔒 Configuration SSL..."
mkdir -p letsencrypt
chmod 600 letsencrypt

# Arrêter les conteneurs existants si ils existent
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down 2>/dev/null || echo "Aucun conteneur à arrêter"

# Construction et démarrage
echo "🔨 Construction et démarrage des conteneurs..."
docker-compose up -d --build

# Attendre que les services démarrent
echo "⏳ Attente du démarrage des services..."
sleep 10

# Vérifier l'état des conteneurs
echo "📊 État des conteneurs:"
docker-compose ps

# Vérifier les logs
echo "📝 Derniers logs:"
docker-compose logs --tail=20

echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "🌐 Votre site sera bientôt accessible sur:"
echo "   https://$DOMAIN"
echo ""
echo "📋 Commandes utiles:"
echo "   Voir les logs: docker-compose logs -f"
echo "   Redémarrer: docker-compose restart"
echo "   Arrêter: docker-compose down"
echo ""
echo "⚠️  Assurez-vous que:"
echo "   - Le DNS de $DOMAIN pointe vers ce serveur"
echo "   - Les ports 80 et 443 sont ouverts"
echo "   - Le firewall autorise le trafic HTTP/HTTPS"
echo ""
echo "🎉 Bon déploiement !"
EOF