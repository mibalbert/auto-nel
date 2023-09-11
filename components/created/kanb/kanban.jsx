"use client";

import { Column } from "./column";
import { initialCardsPosition } from "@/lib/kanban-data";

import { useState } from "react";
import { useBoardStore } from "@/app/store/zustand";
import { moveCardToColumn } from "@/lib/kanban";
import { flushSync } from "react-dom";

const columnTitles = {
  ideas: "💡 Ideas",
  "in-progress": "⏳ In Progress",
  done: "✅ Done",
  // [Columns.IDEAS]: "💡 Ideas",
  // [Columns.IN_PROGRESS]: "⏳ In Progress",
  // [Columns.DONE]: "✅ Done",
};

const columns = Object.entries(columnTitles);

const Kanban = () => {
  const [cards, setCards] = useState(initialCardsPosition);
  const draggingCard = useBoardStore((state) => state.draggingCard);

  const onDrop = (column, index) => {
    if (!draggingCard) return;

    const newCards = moveCardToColumn({
      cards,
      cardId: draggingCard,
      column,
      index,
    });

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setCards(newCards);
        });
      });
      // If view transitions aren't supported (e.g. mobile safari), we just update the state.
    } else {
      setCards(newCards);
    }
  };

  return (
    <div className="h-screen p-5 text-white bg-gray-900">
      <div className="grid grid-cols-[repeat(3,300px)] gap-4 overflow-auto">
        {columns.map(([columnId, columnTitle]) => (
          <Column
            key={columnId}
            title={columnTitle}
            id={columnId}
            cards={cards[columnId]}
            onDrop={onDrop}
          />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
