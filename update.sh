#!/bin/bash
# Script de mise à jour et redémarrage du conteneur Docker

docker compose -f docker-compose.yml pull

docker compose -f docker-compose.yml stop

docker compose -f docker-compose.yml up -d

echo "Mise à jour et redémarrage terminés."
