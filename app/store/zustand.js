/**
 * kanban-board.js
 */

import { create } from "zustand";

export const useBoardStore = create((set) => ({
  draggingCard: null,
  setDraggingCard: (cardId) => set({ draggingCard: cardId }),
}));