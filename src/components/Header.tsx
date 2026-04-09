import { ShoppingBag, User } from 'lucide-react';
// Import o nosso hook do Zustand
import { useCartStore } from '../store/useCartStore';

export const Header = () => {
  // extraí os items do estado global
  const items = useCartStore((state) => state.items);
  
  // calcula a quantidade total de peças (somando a 'quantity' de cada item)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full py-6 px-8 flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center font-black text-zinc-900">
          P
        </div>
        <h1 className="text-xl font-bold tracking-tighter uppercase italic">
          PickWise <span className="text-emerald-400 italic">AI</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#" className="hover:text-white transition-colors">Novidades</a>
        <a href="#" className="hover:text-white transition-colors">Coleções</a>
        <a href="#" className="hover:text-white transition-colors">Sobre</a>
      </nav>

      <div className="flex items-center gap-5">
        <button className="text-zinc-400 hover:text-white transition-colors">
          <User size={20} />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors relative">
          <ShoppingBag size={20} />
          {/* 4. Só mostramos a bolinha verde se tiver algum item no carrinho */}
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-[10px] font-bold text-zinc-900 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};