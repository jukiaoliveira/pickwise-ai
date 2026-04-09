import { create } from 'zustand';
import type { Product } from '../types';

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

// Store global
export const useCartStore = create<CartStore>((set, get) => ({
  items: [], 

  addToCart: (product) => {
    set((state) => {
      // Verifica se o produto já está no carrinho
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {

        return {
          items: state.items.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          )
        };
      }
      
      return { items: [...state.items, { ...product, quantity: 1 }] };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },

  clearCart: () => set({ items: [] }),

  cartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));