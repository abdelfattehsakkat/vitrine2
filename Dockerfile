FROM node:20-alpine AS base

# Installer les dépendances seulement quand nécessaire
FROM base AS deps
# Alpine provides `apk`; install libc6-compat if needed by native deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild du code source seulement quand nécessaire
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'environnement pour le build
ENV NEXT_TELEMETRY_DISABLED=1

# Build de l'application
RUN npm run build

# Image de production, copier tous les fichiers et exécuter Next.js
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Créer un utilisateur non-root
RUN addgroup -S -g 1001 nodejs
RUN adduser -S -u 1001 -G nodejs nextjs

# Copier automatiquement les fichiers de sortie selon le preset de sortie
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copier les fichiers public (important pour les images et assets)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copier le script d'entrée
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Commande pour démarrer l'application
CMD ["./docker-entrypoint.sh"]