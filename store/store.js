/**
 * store.js
 */


import { create } from 'zustand';

export const useCarStore = create((set) => ({
  make: '',
  model: '',
  years: '',
  setMake: (newMake) => set({ make: newMake }),
  setModel: (newModel) => set({ model: newModel }),
  setYears: (newYears) => set({ years: newYears }),
}));


export const useCartStore = create((set) => ({
  cartItems: [],

  addToCart: (service) => {
    set((state) => ({
      cartItems: [...state.cartItems, service],
    }));
  },

  removeFromCart: (serviceId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== serviceId),
    }));
  },

  clearCart: () => {
    set({ cartItems: [] });
  },

  getTotalCost: () => {
    return useCartStore.getState().cartItems.reduce((total, item) => total + item.price, 0);
  },
}));



export const useBoardStore = create((set) => ({
  draggingCard: null,
  setDraggingCard: (cardId) => set({ draggingCard: cardId }),
}));