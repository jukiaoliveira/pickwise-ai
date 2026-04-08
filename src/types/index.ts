export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 't-shirt' | 'pants' | 'jacket' | 'accessories';
  imageUrl: string;
  tags: string[];
}

export interface Recommendation {
  product: Product;
  reason: string; 
}