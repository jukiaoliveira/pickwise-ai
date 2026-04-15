import type { Product } from '../types';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  return (
    // Fundo verde card e borda hover neon
    <div className="group flex flex-col bg-br-card/80 border border-br-green/10 rounded-2xl overflow-hidden hover:border-br-green/50 transition-all duration-300 shadow-lg hover:shadow-br-green/10">
      <div className="relative aspect-[4/5] overflow-hidden bg-br-dark">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute top-4 left-4 bg-br-dark/90 backdrop-blur-md text-br-green font-bebas text-sm uppercase tracking-widest py-1 px-3 rounded-md border border-br-green/20">
          {product.category}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-br-light leading-tight mb-2">
          {product.name}
        </h3>
        
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-br-green/10">
        
          <span className="text-2xl font-bebas tracking-wide text-br-yellow">
            {formattedPrice}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="w-11 h-11 bg-br-dark hover:bg-br-yellow hover:text-br-dark border border-br-green/20 hover:border-br-yellow rounded-xl flex items-center justify-center text-br-green transition-all active:scale-95"
            title="Adicionar à sacola"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};