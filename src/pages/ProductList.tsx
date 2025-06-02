
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { categories, products } from '@/data/catalogData';

const ProductList = () => {
  const { categoryId, subcategoryId } = useParams();
  
  const category = categories.find(c => c.id === categoryId);
  const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
  const filteredProducts = products.filter(p => p.subcategoryId === subcategoryId);

  if (!category || !subcategory) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-primary mb-4">Page non trouvée</h1>
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
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <Link to="/catalog" className="hover:text-primary transition-colors duration-300">
                Catalogue
              </Link>
              <span>/</span>
              <Link to={`/catalog/${categoryId}`} className="hover:text-primary transition-colors duration-300">
                {category.name}
              </Link>
              <span>/</span>
              <span className="text-primary">{subcategory.name}</span>
            </div>
            <Link to={`/catalog/${categoryId}`} className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 mb-8">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Retour à {category.name}
            </Link>
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6 entrance-fade">
                {subcategory.name}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto entrance-fade-delayed">
                {subcategory.description}
              </p>
              <div className="mt-6 text-sm text-muted-foreground entrance-fade-delayed">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produit' : 'produits'} disponible{filteredProducts.length === 1 ? '' : 's'}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="entrance-fade"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="font-display text-2xl text-primary mb-4">Aucun produit disponible</h3>
                <p className="text-muted-foreground mb-8">
                  Cette catégorie sera bientôt enrichie de nouveaux produits d'exception.
                </p>
                <Link to={`/catalog/${categoryId}`}>
                  <Button variant="outline">Explorer d'autres catégories</Button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-6 entrance-fade">
              Créons ensemble votre événement parfait
            </h2>
            <p className="text-lg text-muted-foreground mb-8 entrance-fade-delayed">
              Chaque pièce peut être personnalisée selon vos besoins spécifiques.
            </p>
            <Link to="/contact">
              <Button size="lg" className="entrance-fade-delayed bg-primary hover:bg-primary/90 text-primary-foreground border-0 px-8 py-3 text-sm font-medium tracking-wide">
                Demander un devis personnalisé
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductList;
