
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { categories } from '@/data/catalogData';

const Catalog = () => {
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

        {/* Categories Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <div
                  key={category.id}
                  className="entrance-fade"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CategoryCard
                    category={category}
                    to={`/catalog/${category.id}`}
                  />
                </div>
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
            <Link to="/contact">
              <Button 
                variant="secondary" 
                size="lg"
                className="entrance-fade-delayed bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0 px-8 py-3 text-sm font-medium tracking-wide"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Catalog;
