import { Link } from 'react-router-dom';
import { Category, Subcategory } from '@/types/catalog';

interface CategoryCardProps {
  category?: Category;
  subcategory?: Subcategory;
  to: string;
}

const CategoryCard = ({ category, subcategory, to }: CategoryCardProps) => {
  const item = category || subcategory;
  if (!item) return null;

  return (
    <Link to={to} className="group block h-full">
      <div className="h-full flex flex-col relative overflow-hidden bg-card shadow-sm border border-border/50 transition-all duration-700 hover:shadow-2xl hover:border-primary/20">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 hover:scale-125 transition-opacity duration-500" />
        </div>
        
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-primary/80 transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;