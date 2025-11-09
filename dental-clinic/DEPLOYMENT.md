# Guide de Déploiement - Cabinet Dentaire

## 📋 Prérequis

### Sur votre VPS Ubuntu
- Ubuntu 20.04 LTS ou plus récent
- 2 GB RAM minimum (4 GB recommandé)
- 20 GB espace disque minimum
- Accès root ou sudo
- Nom de domaine pointant vers votre VPS

## 🚀 Installation sur VPS Ubuntu

### 1. Connexion au serveur
```bash
ssh root@votre-serveur-ip
# ou
ssh votre-utilisateur@votre-serveur-ip
```

### 2. Mise à jour du système
```bash
apt update && apt upgrade -y
```

### 3. Installation de Docker
```bash
# Installation des dépendances
apt install apt-transport-https ca-certificates curl gnupg lsb-release -y

# Ajout de la clé GPG officielle de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Ajout du repository Docker
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# Installation de Docker
apt update
apt install docker-ce docker-ce-cli containerd.io -y

# Démarrage et activation de Docker
systemctl start docker
systemctl enable docker
```

### 4. Installation de Docker Compose
```bash
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### 5. Configuration du firewall (UFW)
```bash
# Installation et configuration du firewall
apt install ufw -y
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
```

## 📦 Déploiement de l'application

### 1. Cloner le projet
```bash
# Créer un répertoire pour le projet
mkdir -p /opt/dental-clinic
cd /opt/dental-clinic

# Copier les fichiers du projet (via git, scp, ou rsync)
# Exemple avec git (si vous avez un repository) :
# git clone https://github.com/votre-username/dental-clinic.git .

# Ou copier les fichiers localement vers le serveur :
# scp -r ./dental-clinic/* root@votre-serveur-ip:/opt/dental-clinic/
```

### 2. Configuration de l'environnement
```bash
# Éditer le docker-compose.yml pour ajuster les domaines
nano docker-compose.yml

# Remplacer 'cabinet-dentaire.exemple.com' par votre domaine réel
# Remplacer l'email dans la configuration Let's Encrypt
```

### 3. Création du réseau Docker
```bash
# Créer le réseau externe pour Traefik
docker network create web
```

### 4. Déploiement simple (sans Traefik/SSL)
```bash
# Pour un déploiement rapide sans SSL
docker-compose -f docker-compose.simple.yml up -d

# Vérifier que l'application fonctionne
docker-compose -f docker-compose.simple.yml logs -f
```

### 5. Déploiement complet (avec Traefik et SSL)
```bash
# Créer le répertoire pour les certificats
mkdir -p letsencrypt
chmod 600 letsencrypt

# Déployer avec Traefik
docker-compose up -d

# Vérifier les logs
docker-compose logs -f
```

## 🔧 Configuration DNS

### Configurer vos enregistrements DNS :
```
Type A    | Nom                | Valeur
---------|-------------------|------------------
A        | @                 | IP_DE_VOTRE_VPS
A        | www               | IP_DE_VOTRE_VPS
A        | traefik           | IP_DE_VOTRE_VPS (optionnel, pour le dashboard)
```

## 🛠️ Commandes utiles

### Gestion des conteneurs
```bash
# Voir les conteneurs en cours d'exécution
docker ps

# Voir les logs d'un conteneur
docker logs dental-clinic-app

# Redémarrer l'application
docker-compose restart dental-clinic

# Mettre à jour l'application
docker-compose pull
docker-compose up -d --force-recreate
```

### Sauvegarde et maintenance
```bash
# Créer une sauvegarde
tar -czf backup-$(date +%Y%m%d).tar.gz /opt/dental-clinic

# Nettoyer les images Docker inutilisées
docker system prune -a

# Voir l'utilisation de l'espace disque
df -h
docker system df
```

## 🔒 Sécurité

### 1. Sécuriser SSH
```bash
# Éditer la configuration SSH
nano /etc/ssh/sshd_config

# Recommandations :
# Port 2222 (changer le port par défaut)
# PasswordAuthentication no (utiliser les clés SSH)
# PermitRootLogin no (désactiver la connexion root)

# Redémarrer SSH
systemctl restart sshd

# Mettre à jour le firewall avec le nouveau port
ufw allow 2222/tcp
ufw delete allow ssh
```

### 2. Monitoring et logs
```bash
# Installer htop pour le monitoring
apt install htop -y

# Voir les logs système
journalctl -f

# Configurer la rotation des logs Docker
echo '{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}' > /etc/docker/daemon.json

systemctl restart docker
```

## 🚀 Optimisations

### 1. Mise en cache et CDN
- Configurer Cloudflare pour votre domaine
- Activer la compression Gzip
- Configurer les headers de cache

### 2. Monitoring
```bash
# Installer Netdata pour le monitoring
curl -Ss 'https://my-netdata.io/kickstart.sh' | bash
```

## 🆘 Dépannage

### Problèmes courants :

1. **Port 3000 non accessible**
   ```bash
   # Vérifier que l'application écoute
   docker logs dental-clinic-app
   netstat -tlnp | grep 3000
   ```

2. **Erreurs SSL avec Let's Encrypt**
   ```bash
   # Vérifier les logs Traefik
   docker logs traefik
   
   # S'assurer que le DNS pointe vers le serveur
   nslookup votre-domaine.com
   ```

3. **Manque d'espace disque**
   ```bash
   # Nettoyer Docker
   docker system prune -a -f
   
   # Nettoyer les logs
   journalctl --vacuum-time=7d
   ```

## 📞 Support

Pour toute assistance technique :
- Vérifiez les logs : `docker-compose logs`
- Consultez la documentation Docker
- Vérifiez la configuration DNS
- Assurez-vous que les ports 80 et 443 sont ouverts

---

## 🔄 Mise à jour de l'application

```bash
cd /opt/dental-clinic

# Sauvegarder avant mise à jour
docker-compose down
tar -czf backup-$(date +%Y%m%d).tar.gz .

# Mettre à jour le code (git pull ou copie de fichiers)
# Reconstruire et redéployer
docker-compose build --no-cache
docker-compose up -d
```

Votre site sera accessible via :
- **HTTP/HTTPS** : `https://votre-domaine.com`
- **Dashboard Traefik** : `https://traefik.votre-domaine.com:8080` (si configuré)

🎉 **Félicitations ! Votre cabinet dentaire est maintenant en ligne !**