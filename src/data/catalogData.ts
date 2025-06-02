
import { Category, Product } from '@/types/catalog';

export const categories: Category[] = [
  {
    id: 'seating',
    name: 'Assises',
    description: 'Collection exclusive de sièges d\'exception pour créer des espaces de réception raffinés',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    subcategories: [
      {
        id: 'sofas',
        name: 'Canapés',
        description: 'Canapés de prestige pour vos salons d\'accueil',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'seating'
      },
      {
        id: 'armchairs',
        name: 'Fauteuils',
        description: 'Fauteuils d\'époque et contemporains',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'seating'
      },
      {
        id: 'poufs',
        name: 'Poufs',
        description: 'Assises d\'appoint élégantes',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'seating'
      },
      {
        id: 'benches',
        name: 'Banquettes',
        description: 'Banquettes design pour espaces modernes',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'seating'
      }
    ]
  },
  {
    id: 'tables',
    name: 'Tables',
    description: 'Tables d\'exception en marbre, bois précieux et matériaux nobles',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
    subcategories: [
      {
        id: 'dining-tables',
        name: 'Tables de réception',
        description: 'Tables pour vos dîners d\'exception',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'tables'
      },
      {
        id: 'coffee-tables',
        name: 'Tables basses',
        description: 'Tables basses design et raffinées',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'tables'
      },
      {
        id: 'consoles',
        name: 'Consoles',
        description: 'Consoles d\'entrée et de décoration',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'tables'
      }
    ]
  },
  {
    id: 'lighting',
    name: 'Éclairage',
    description: 'Luminaires de prestige pour sublimer vos événements',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop',
    subcategories: [
      {
        id: 'chandeliers',
        name: 'Lustres',
        description: 'Lustres en cristal et matériaux précieux',
        image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'lighting'
      },
      {
        id: 'table-lamps',
        name: 'Lampes de table',
        description: 'Éclairage d\'ambiance raffiné',
        image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'lighting'
      },
      {
        id: 'floor-lamps',
        name: 'Lampadaires',
        description: 'Éclairage vertical design',
        image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'lighting'
      }
    ]
  },
  {
    id: 'decor',
    name: 'Décoration',
    description: 'Objets d\'art et accessoires décoratifs de prestige',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop',
    subcategories: [
      {
        id: 'vases',
        name: 'Vases',
        description: 'Vases en cristal, céramique et matériaux nobles',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'decor'
      },
      {
        id: 'sculptures',
        name: 'Sculptures',
        description: 'Œuvres d\'art et sculptures décoratives',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'decor'
      },
      {
        id: 'mirrors',
        name: 'Miroirs',
        description: 'Miroirs décoratifs et artistiques',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop',
        categoryId: 'decor'
      }
    ]
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Fauteuil Bergère Velours Bordeaux',
    subcategoryId: 'armchairs',
    categoryId: 'seating',
    price: 'Sur devis',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Fauteuil bergère d\'époque restauré avec un velours bordeaux de première qualité. Cette pièce exceptionnelle allie l\'élégance classique française à un confort moderne. Parfait pour créer une ambiance feutrée et sophistiquée lors de vos réceptions les plus prestigieuses.',
    shortDescription: 'Fauteuil d\'époque en velours bordeaux, parfait pour créer une ambiance feutrée et élégante.',
    dimensions: {
      length: '85 cm',
      width: '90 cm',
      height: '95 cm'
    },
    materials: ['Velours bordeaux', 'Bois massif', 'Garniture traditionnelle'],
    tags: ['Vintage', 'Velours', 'Élégant', 'Français'],
    availability: 'Disponible sur réservation',
    relatedProducts: [2, 5]
  },
  {
    id: 2,
    name: 'Canapé Chesterfield Cuir Patiné',
    subcategoryId: 'sofas',
    categoryId: 'seating',
    price: 'Sur devis',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Canapé Chesterfield trois places en cuir patiné, capitonné à la main selon la tradition anglaise. Ce modèle iconique apporte une touche d\'authenticité et de raffinement à vos espaces de réception. Le cuir vieilli naturellement développe une patine unique qui témoigne de son caractère d\'exception.',
    shortDescription: 'Canapé trois places en cuir patiné, capitonné à la main selon la tradition anglaise.',
    dimensions: {
      length: '220 cm',
      width: '95 cm',
      height: '75 cm'
    },
    materials: ['Cuir pleine fleur patiné', 'Capitonnage manuel', 'Structure chêne massif'],
    tags: ['Cuir', 'Traditionnel', 'Confort', 'Anglais'],
    availability: 'Délai de 2-3 semaines',
    relatedProducts: [1, 3]
  },
  {
    id: 3,
    name: 'Table Ronde Marbre de Carrare',
    subcategoryId: 'dining-tables',
    categoryId: 'tables',
    price: 'Sur devis',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Table de réception en marbre de Carrare avec piètement en laiton brossé. Cette pièce exceptionnelle allie la noblesse du marbre italien à l\'élégance contemporaine. Parfaite pour vos dîners d\'exception, elle peut accueillir jusqu\'à 8 convives dans un raffinement absolu.',
    shortDescription: 'Table en marbre de Carrare avec piètement en laiton brossé, alliant modernité et raffinement.',
    dimensions: {
      length: '150 cm',
      width: '150 cm',
      height: '75 cm'
    },
    materials: ['Marbre de Carrare', 'Laiton brossé', 'Finition haute brillance'],
    tags: ['Marbre', 'Moderne', 'Luxe', 'Italien'],
    availability: 'Sur commande - 4 semaines',
    relatedProducts: [4, 6]
  },
  {
    id: 4,
    name: 'Lustre Cristal de Bohême',
    subcategoryId: 'chandeliers',
    categoryId: 'lighting',
    price: 'Sur devis',
    images: [
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Lustre exceptionnel en cristal de Bohême, taillé et poli à la main. Cette pièce d\'exception diffuse une lumière magique qui sublime tous vos événements. Chaque cristal est soigneusement sélectionné pour sa pureté et sa brillance, créant un jeu de reflets d\'une beauté incomparable.',
    shortDescription: 'Lustre en cristal de Bohême, pièce d\'exception pour sublimer vos réceptions.',
    dimensions: {
      length: '80 cm',
      width: '80 cm',
      height: '120 cm'
    },
    materials: ['Cristal de Bohême', 'Monture bronze doré', 'Taille artisanale'],
    tags: ['Cristal', 'Classique', 'Éclairage', 'Artisanal'],
    availability: 'Pièce unique disponible',
    relatedProducts: [3, 5]
  }
];
