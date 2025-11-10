// Configuration des images pour le site
export const siteImages = {
  // Images hero/bannière
  hero: {
    main: '/images/hero/hero-main.jpg',
    mobile: '/images/hero/hero-mobile.jpg',
    alt: 'Cabinet dentaire moderne avec équipe professionnelle'
  },

  // Photos du cabinet
  cabinet: [
    {
      src: '/images/cabinet/reception.jpg',
      alt: 'Salle d\'attente moderne et confortable du cabinet dentaire',
      title: 'Réception',
      description: 'Un accueil chaleureux dans un environnement moderne'
    },
    {
      src: '/images/cabinet/salle-soins-1.jpg',
      alt: 'Salle de soins équipée des dernières technologies dentaires',
      title: 'Salle de soins',
      description: 'Équipements de pointe pour des soins de qualité'
    },
    {
      src: '/images/cabinet/equipements.jpg',
      alt: 'Équipements dentaires modernes et stérilisés',
      title: 'Équipements',
      description: 'Technologies avancées pour votre confort'
    },
    {
      src: '/images/cabinet/sterilisation.jpg',
      alt: 'Zone de stérilisation conforme aux normes d\'hygiène',
      title: 'Stérilisation',
      description: 'Hygiène irréprochable pour votre sécurité'
    }
  ],

  // Images des soins
  soins: {
    conservateurs: {
      src: '/images/soins/conservateurs.jpg',
      alt: 'Soins dentaires conservateurs - caries, obturations',
      title: 'Soins Conservateurs'
    },
    implantologie: {
      src: '/images/soins/implantologie.jpg',
      alt: 'Implants dentaires - remplacement dents manquantes',
      title: 'Implantologie'
    },
    orthodontie: {
      src: '/images/soins/orthodontie.jpg',
      alt: 'Orthodontie - correction alignement dentaire',
      title: 'Orthodontie'
    },
    esthetique: {
      src: '/images/soins/esthetique.jpg',
      alt: 'Esthétique dentaire - blanchiment, facettes',
      title: 'Esthétique Dentaire'
    }
  },

  // Photos de l'équipe
  team: {
    principal: {
      src: '/images/team/dentiste-principal.jpg',
      alt: 'Dr. Martin Dubois - Dentiste principal',
      name: 'Dr. Martin Dubois',
      role: 'Dentiste Principal',
      specialties: ['Implantologie', 'Esthétique dentaire']
    },
    assistante: {
      src: '/images/team/assistante-1.jpg',
      alt: 'Sophie Leclerc - Assistante dentaire',
      name: 'Sophie Leclerc',
      role: 'Assistante Dentaire',
      specialties: ['Hygiène', 'Accueil patients']
    }
  },

  // Logos et icônes
  logos: {
    main: '/images/logos/logo-cabinet.png',
    simple: '/images/logos/logo-simple.svg',
    favicon: '/images/logos/favicon.ico'
  },

  // Images par défaut
  placeholder: '/images/misc/placeholder.jpg',
  loading: '/images/misc/loading.gif'
};

// Types TypeScript pour les images
export interface ImageConfig {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface TeamMember {
  src: string;
  alt: string;
  name: string;
  role: string;
  specialties: string[];
}

export default siteImages;