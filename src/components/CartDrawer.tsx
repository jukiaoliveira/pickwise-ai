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
      {/* Overlay escuro (Fundo borrado) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart} // Fecha se clicar fora
      />

      {/* Painel Lateral */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-zinc-800 z-[70] flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Cabeçalho do Carrinho */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag className="text-emerald-400" />
            Sua Sacola
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Lista de Itens */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-zinc-500 space-y-4">
              <ShoppingBag size={48} className="opacity-20" />
              <p>Sua sacola está vazia.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-zinc-800/30 p-4 rounded-xl border border-zinc-800">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-24 object-cover rounded-lg" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-zinc-100 line-clamp-1">{item.name}</h3>
                    <p className="text-emerald-400 font-medium">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    {/* Controles de Quantidade */}
                    <div className="flex items-center gap-3 bg-zinc-900 rounded-lg p-1 border border-zinc-700">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-emerald-400 disabled:opacity-50" disabled={item.quantity <= 1}>
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-emerald-400">
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-zinc-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Rodapé (Total e Checkout) */}
        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-900">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-400">Total calculado</span>
              <span className="text-2xl font-black text-white">{formattedTotal}</span>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-900 font-bold py-4 rounded-xl transition-all active:scale-95 text-lg">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
};