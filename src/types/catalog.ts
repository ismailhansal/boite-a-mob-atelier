
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
}

export interface Product {
  id: number;
  name: string;
  subcategoryId: string;
  categoryId: string;
  price: string;
  images: string[];
  description: string;
  shortDescription: string;
  dimensions: {
    length?: string;
    width?: string;
    height?: string;
  };
  materials: string[];
  tags: string[];
  availability?: string;
  relatedProducts?: number[];
}
