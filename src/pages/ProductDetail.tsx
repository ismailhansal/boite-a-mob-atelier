
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/data/catalogData';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId || ''));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display text-primary mb-4">Produit non trouvé</h1>
            <Link to="/catalog">
              <Button variant="outline">Retour au catalogue</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProducts = product.relatedProducts
    ? products.filter(p => product.relatedProducts?.includes(p.id))
    : [];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Header Navigation */}
        <section className="py-8 px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <Link to={`/catalog/${product.categoryId}/${product.subcategoryId}`} className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors duration-300">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Retour à la liste
            </Link>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Images */}
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden bg-accent/10">
                  <img
                    src={product.images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square overflow-hidden border-2 transition-all duration-300 ${
                          selectedImageIndex === index 
                            ? 'border-primary shadow-md' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} - Vue ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4 entrance-fade">
                    {product.name}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed entrance-fade-delayed">
                    {product.description}
                  </p>
                </div>

                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Détails</TabsTrigger>
                    <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                    <TabsTrigger value="materials">Matériaux</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="details" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground">Prix</span>
                        <span className="font-medium text-primary">{product.price}</span>
                      </div>
                      {product.availability && (
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground">Disponibilité</span>
                          <span className="font-medium">{product.availability}</span>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="dimensions" className="mt-6">
                    <div className="space-y-3">
                      {product.dimensions.length && (
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground">Longueur</span>
                          <span className="font-medium">{product.dimensions.length}</span>
                        </div>
                      )}
                      {product.dimensions.width && (
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground">Largeur</span>
                          <span className="font-medium">{product.dimensions.width}</span>
                        </div>
                      )}
                      {product.dimensions.height && (
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-muted-foreground">Hauteur</span>
                          <span className="font-medium">{product.dimensions.height}</span>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="materials" className="mt-6">
                    <div className="space-y-2">
                      {product.materials.map((material, index) => (
                        <div key={index} className="flex items-center py-2 border-b border-border last:border-b-0">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span>{material}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-4 pt-6 border-t border-border">
                  <Link to="/contact">
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-0 py-4 text-base font-medium tracking-wide">
                      Demander un devis
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground py-4 text-base">
                    Ajouter à ma liste
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 px-6 lg:px-8 bg-accent/10">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">
                Produits associés
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="entrance-fade"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
