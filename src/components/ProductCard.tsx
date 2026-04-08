import type { Product } from '../types';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  return (
    <div className="group flex flex-col bg-zinc-800/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-300">
      {/* Container da Imagem */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-800">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Categoria flutuante */}
        <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-zinc-300 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
          {product.category}
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-zinc-100 leading-tight mb-2">
          {product.name}
        </h3>
        
        <p className="text-zinc-400 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/50">
          <span className="text-xl font-black text-emerald-400">
            {formattedPrice}
          </span>
          <button 
            className="w-10 h-10 bg-zinc-800 hover:bg-emerald-500 hover:text-zinc-900 rounded-xl flex items-center justify-center text-zinc-400 transition-colors"
            title="Adicionar à sacola"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};