import { create } from 'zustand';
import type { Product } from '../types';

export interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean; 
  openCart: () => void; // 
  closeCart: () => void; //
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void; // <-- Vamos precisar disso no carrinho
  clearCart: () => void;
  cartTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addToCart: (product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        return {
          items: state.items.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 } 
              : item
          ),
          isOpen: true 
        };
      }
      return { 
        items: [...state.items, { ...product, quantity: 1 }],
        isOpen: true 
      };
    });
  },

  removeFromCart: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    }));
  },

  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map(item => 
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    }));
  },

  clearCart: () => set({ items: [] }),

  cartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));