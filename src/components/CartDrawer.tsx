import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';

export const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, cartTotal } = useCartStore();

  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartTotal());

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart} 
      />

      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-br-dark border-l border-br-green/20 shadow-2xl shadow-br-dark z-[70] flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-br-green/10 bg-br-card/50">
          <h2 className="font-bebas text-3xl tracking-widest text-br-light flex items-center gap-3 mt-1">
            <ShoppingBag className="text-br-green" size={24} />
            SUA SACOLA
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 bg-br-dark hover:bg-br-yellow/10 border border-br-green/20 rounded-xl transition-colors text-br-green hover:text-br-yellow"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20 text-br-green" />
              <p className="font-baloo text-lg">Seu carrinho tá vazio.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-br-card p-4 rounded-2xl border border-br-green/10 shadow-lg">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-28 object-cover rounded-xl border border-br-green/20" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-br-light line-clamp-1 font-baloo">{item.name}</h3>
                    <p className="font-bebas text-2xl tracking-wide text-br-yellow mt-1">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Controles de Quantidade */}
                    <div className="flex items-center gap-3 bg-br-dark rounded-xl p-1 border border-br-green/20">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-br-green/10 rounded-lg text-br-light hover:text-br-green transition-colors disabled:opacity-30" disabled={item.quantity <= 1}>
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center font-baloo text-br-light">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-br-green/10 rounded-lg text-br-light hover:text-br-green transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-colors" title="Remover item">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé e Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-br-green/10 bg-br-card/80">
            <div className="flex items-center justify-between mb-6">
              <span className="text-br-light/70 font-baloo text-lg">Total calculado</span>
              <span className="font-bebas text-4xl tracking-wide text-br-yellow drop-shadow-md">{formattedTotal}</span>
            </div>
            <button className="w-full bg-br-yellow hover:bg-yellow-400 text-br-dark font-bebas text-2xl tracking-widest py-4 rounded-xl transition-all active:scale-95 uppercase shadow-lg shadow-br-yellow/20">
              Finalizar Corre
            </button>
          </div>
        )}
      </div>
    </>
  );
};