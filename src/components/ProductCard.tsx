
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/catalog';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-primary/20">
      <Link to={`/catalog/product/${product.id}`}>
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/catalog/product/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-primary mb-2 hover:text-primary/80 transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          {product.dimensions.length && (
            <span>L: {product.dimensions.length}</span>
          )}
          {product.dimensions.width && (
            <span>l: {product.dimensions.width}</span>
          )}
          {product.dimensions.height && (
            <span>H: {product.dimensions.height}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-primary text-sm">{product.price}</span>
          <Link to={`/catalog/product/${product.id}`}>
            <Button size="sm" variant="outline" className="text-xs px-4 py-2 h-8 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Voir détails
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
