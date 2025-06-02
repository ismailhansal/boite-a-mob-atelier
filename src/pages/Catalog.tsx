
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Filter, Grid, List } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Toutes catégories' },
  { id: 'seating', name: 'Assises' },
  { id: 'tables', name: 'Tables' },
  { id: 'lighting', name: 'Éclairage' },
  { id: 'accessories', name: 'Accessoires' },
  { id: 'lounge', name: 'Lounges' }
];

const products = [
  {
    id: 1,
    name: 'Fauteuil Bergère Velours',
    category: 'seating',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    description: 'Fauteuil d\'époque en velours bordeaux, parfait pour créer une ambiance feutrée et élégante.',
    tags: ['Vintage', 'Velours', 'Élégant']
  },
  {
    id: 2,
    name: 'Table Ronde Marbre Blanc',
    category: 'tables',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
    description: 'Table en marbre de Carrare avec piètement en laiton brossé, alliant modernité et raffinement.',
    tags: ['Marbre', 'Moderne', 'Luxe']
  },
  {
    id: 3,
    name: 'Suspension Cristal',
    category: 'lighting',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop',
    description: 'Lustre en cristal de Bohême, pièce d\'exception pour sublimer vos réceptions.',
    tags: ['Cristal', 'Classique', 'Éclairage']
  },
  {
    id: 4,
    name: 'Vase Murano Ambré',
    category: 'accessories',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop',
    description: 'Vase artisanal en verre de Murano, touches dorées pour une décoration sophistiquée.',
    tags: ['Artisanal', 'Verre', 'Décoratif']
  },
  {
    id: 5,
    name: 'Canapé Chesterfield Cuir',
    category: 'seating',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop',
    description: 'Canapé trois places en cuir patiné, capitonné à la main selon la tradition anglaise.',
    tags: ['Cuir', 'Traditionnel', 'Confort']
  },
  {
    id: 6,
    name: 'Table Console Art Déco',
    category: 'tables',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    description: 'Console d\'inspiration Art Déco en ébène et marqueterie de nacre.',
    tags: ['Art Déco', 'Ébène', 'Marqueterie']
  }
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-24 px-6 lg:px-8 bg-accent/20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 entrance-fade">
              Notre catalogue
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto entrance-fade-delayed">
              Découvrez notre collection exclusive de mobilier et accessoires haut de gamme, 
              soigneusement sélectionnés pour créer des événements d'exception.
            </p>
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-8 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
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

              {/* View Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 entrance-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${viewMode === 'grid' ? 'aspect-[4/5]' : 'aspect-[3/2] md:aspect-[2/1]'} overflow-hidden`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className={`${viewMode === 'grid' ? 'p-6' : 'p-8'}`}>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-3">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-primary">{product.price}</span>
                      <Button size="sm" className="hover:scale-105 transition-transform">
                        Demander un devis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6 entrance-fade">
              Un projet sur mesure ?
            </h2>
            <p className="text-lg mb-8 opacity-90 entrance-fade-delayed">
              Vous ne trouvez pas exactement ce que vous cherchez ? Contactez-nous pour une 
              sélection personnalisée qui correspondra parfaitement à votre vision.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="entrance-fade-delayed"
            >
              Nous contacter
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Catalog;
