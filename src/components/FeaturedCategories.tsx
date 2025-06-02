
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    name: 'Assises',
    description: 'Chaises, fauteuils et canapés de caractère',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop',
    link: '/catalog?category=seating'
  },
  {
    name: 'Tables',
    description: 'Tables d\'exception pour tous vos événements',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
    link: '/catalog?category=tables'
  },
  {
    name: 'Éclairage',
    description: 'Luminaires et ambiances sur mesure',
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1000&auto=format&fit=crop',
    link: '/catalog?category=lighting'
  },
  {
    name: 'Accessoires',
    description: 'Objets décoratifs et touches finales',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=1000&auto=format&fit=crop',
    link: '/catalog?category=accessories'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 entrance-fade">
            Notre univers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto entrance-fade-delayed">
            Explorez nos collections soigneusement sélectionnées pour créer des atmosphères uniques et mémorables.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={category.name} 
              to={category.link}
              className="group entrance-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
