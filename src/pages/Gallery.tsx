
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  { id: 'all', name: 'Tous les événements' },
  { id: 'wedding', name: 'Mariages' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'private', name: 'Événements privés' },
  { id: 'fashion', name: 'Mode & Beauté' }
];

const galleryItems = [
  {
    id: 1,
    title: 'Mariage d\'exception au Château de Versailles',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
    description: 'Réception intimiste avec mobilier d\'époque et éclairage tamisé.',
    tags: ['Château', 'Élégant', 'Romantique']
  },
  {
    id: 2,
    title: 'Lancement produit luxe - Maison de couture',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop',
    description: 'Showroom éphémère avec mobilier contemporain et mise en scène théâtrale.',
    tags: ['Moderne', 'Théâtral', 'Luxe']
  },
  {
    id: 3,
    title: 'Dîner privé - Hôtel particulier parisien',
    category: 'private',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
    description: 'Ambiance feutrée avec mobilier vintage et éclairage d\'ambiance.',
    tags: ['Intimiste', 'Vintage', 'Parisien']
  },
  {
    id: 4,
    title: 'Convention annuelle - Palais des Congrès',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
    description: 'Espaces de networking avec mobilier modulaire et design contemporain.',
    tags: ['Modulaire', 'Corporate', 'Design']
  },
  {
    id: 5,
    title: 'Anniversaire 50 ans - Villa Riviera',
    category: 'private',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
    description: 'Célébration en extérieur avec mobilier de jardin haut de gamme.',
    tags: ['Extérieur', 'Festif', 'Riviera']
  },
  {
    id: 6,
    title: 'Mariage bohème - Domaine provençal',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1000&auto=format&fit=crop',
    description: 'Cérémonie champêtre avec mobilier en rotin et lin naturel.',
    tags: ['Bohème', 'Naturel', 'Provence']
  },
  {
    id: 7,
    title: 'Vernissage galerie d\'art contemporain',
    category: 'private',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1000&auto=format&fit=crop',
    description: 'Cocktail avec mobilier minimaliste et éclairage architectural.',
    tags: ['Minimaliste', 'Art', 'Architectural']
  },
  {
    id: 8,
    title: 'Défilé haute couture - Grand Palais',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    description: 'Front row avec assises design et mise en scène spectaculaire.',
    tags: ['Haute couture', 'Spectaculaire', 'Design']
  },
  {
    id: 9,
    title: 'Séminaire direction - Château Loire',
    category: 'corporate',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000&auto=format&fit=crop',
    description: 'Espaces de travail collaboratif dans un cadre historique.',
    tags: ['Collaboratif', 'Historique', 'Séminaire']
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 entrance-fade">
              Galerie
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed entrance-fade-delayed">
              Découvrez nos réalisations et laissez-vous inspirer par la diversité de nos créations. 
              Chaque événement raconte une histoire unique, sublimée par notre mobilier d'exception.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-8 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-sm"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer entrance-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(item.id)}
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-24 px-6 lg:px-8 bg-accent/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="entrance-fade">
                <img
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=1000&auto=format&fit=crop"
                  alt="Projet phare"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="entrance-fade-delayed">
                <Badge variant="outline" className="mb-4">Projet phare</Badge>
                <h2 className="font-display text-3xl font-bold text-primary mb-6">
                  Gala de charité - Opéra de Paris
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Un événement d'exception dans le cadre prestigieux de l'Opéra de Paris. 
                  Nous avons créé une scénographie sur mesure alliant respect du patrimoine 
                  et innovation contemporaine.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Mobilier d'époque restauré, éclairage d'ambiance subtil et mise en scène 
                  théâtrale pour une soirée inoubliable au service d'une noble cause.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Prestige</Badge>
                  <Badge variant="secondary">Patrimoine</Badge>
                  <Badge variant="secondary">Sur mesure</Badge>
                  <Badge variant="secondary">Théâtral</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6 entrance-fade">
              Votre événement mérite l'excellence
            </h2>
            <p className="text-lg mb-8 opacity-90 entrance-fade-delayed">
              Inspiré par nos réalisations ? Contactez-nous pour créer ensemble un événement 
              qui marquera les esprits et restera gravé dans toutes les mémoires.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="entrance-fade-delayed"
            >
              Discutons de votre projet
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Gallery;
