
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { categories } from '@/data/catalogData';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);

  if (!category) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-primary mb-4">Catégorie non trouvée</h1>
            <Link to="/catalog">
              <Button variant="outline">Retour au catalogue</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-24 px-6 lg:px-8 bg-accent/10">
          <div className="max-w-7xl mx-auto">
            <Link to="/catalog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Retour au catalogue
            </Link>
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 entrance-fade">
                {category.name}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto entrance-fade-delayed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Subcategories Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.subcategories.map((subcategory, index) => (
                <div
                  key={subcategory.id}
                  className="entrance-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CategoryCard
                    subcategory={subcategory}
                    to={`/catalog/${categoryId}/${subcategory.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-6 entrance-fade">
              Besoin d'une sélection personnalisée ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 entrance-fade-delayed">
              Nos experts peuvent vous aider à créer l'ambiance parfaite pour votre événement.
            </p>
            <Link to="/contact">
              <Button size="lg" className="entrance-fade-delayed bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-8 py-3 text-sm font-medium tracking-wide">
                Nous contacter
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CategoryPage;
