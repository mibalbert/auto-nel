/**
 * store.js
 */


import { create } from 'zustand';

export const useCarStore = create((set) => ({
  make: '',
  model: '',
  years: '',
  carImage: '',
  setMake: (newMake) => set({ make: newMake }),
  setModel: (newModel) => set({ model: newModel }),
  setYears: (newYears) => set({ years: newYears }),
  setCarImage: (newCarImage) => set({ carImage: newCarImage }),
}));

export const useAddCustomerCarStore = create((set) => ({
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

  // New function to remove one instance of an item from the cart
  removeOneFromCart: (serviceId) => {
    const itemIndex = useCartStore.getState().cartItems.findIndex((item) => item.id === serviceId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...useCartStore.getState().cartItems];
      updatedCartItems.splice(itemIndex, 1);
      set({ cartItems: updatedCartItems });
    }
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


export const useServiceStore = create((set) => ({
  category: '',
  serviceName: '',
  servicePrice: '',
  availableCars: [],
  selectedCars: [],
  carPrices: {},
  filterText: '',
  sortBy: '',
  sortOrder: 'asc',
  selectAll: false,
  setSelectAll: (value) => set({ selectAll: value }),
  setCategory: (category) => set({ category }),
  setServiceName: (serviceName) => set({ serviceName }),
  setServicePrice: (servicePrice) => set({ servicePrice }),
  setAvailableCars: (availableCars) => set({ availableCars }),
  setSelectedCars: (selectedCars) => set({ selectedCars }),
  setCarPrices: (carPrices) => set({ carPrices }),
  setFilterText: (filterText) => set({ filterText }),
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
}));
