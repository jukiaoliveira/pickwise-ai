import { ShoppingBag, User } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const Header = () => {
  const items = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full py-5 px-8 flex items-center justify-between border-b border-br-green/20 bg-br-dark/90 backdrop-blur-md sticky top-0 z-50">
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-br-yellow rounded-lg flex items-center justify-center font-bebas text-2xl pt-1 text-br-dark shadow-lg shadow-br-yellow/20">
          PW
        </div>
        <h1 className="text-3xl font-bebas tracking-widest uppercase text-br-light mt-1">
          PickWise <span className="text-br-green">AI</span>
        </h1>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xl font-bebas tracking-widest text-br-light/60">
        <a href="#" className="hover:text-br-yellow transition-colors">Novidades</a>
        <a href="#" className="hover:text-br-yellow transition-colors">Coleções</a>
        <a href="#" className="hover:text-br-yellow transition-colors">O Corre</a>
      </nav>

      <div className="flex items-center gap-6">
        <button className="text-br-light/70 hover:text-br-yellow transition-colors">
          <User size={24} />
        </button>
        <button 
          onClick={openCart}
          className="text-br-light/70 hover:text-br-yellow transition-colors relative group"
        >
          <ShoppingBag size={24} className="transition-transform group-active:scale-95" />
          
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-br-green text-[11px] font-bold text-br-dark rounded-full flex items-center justify-center animate-in zoom-in duration-300 shadow-md shadow-br-green/40">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};