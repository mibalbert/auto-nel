import React from "react";
import { Card } from "./card";
import { DropArea } from "./droparea";

export const Column = ({ title, id, cards, onDrop }) => {
  return (
    <div className="p-3 bg-gray-700 rounded-lg">
      <h2 className="mb-3 text-xl">{title}</h2>
      <div className="flex flex-col">
        <DropArea onDrop={() => onDrop(id, 0)} />
        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            <Card {...card} />
            <DropArea onDrop={() => onDrop(id, index + 1)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
