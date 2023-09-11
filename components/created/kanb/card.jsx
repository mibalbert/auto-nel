import Image from "next/image";
import { useBoardStore } from "@/app/store/zustand";

export const Card = ({ title, id, users, tags }) => {
  const setDraggingCard = useBoardStore((state) => state.setDraggingCard);

  return (
    <div
      draggable="true"
      onDragStart={(ev) => {
        setDraggingCard(id);
        // This enables the dragging functionality on iOS too.
        // See this great tweet by Adam Argyle: https://twitter.com/argyleink/status/1687160975374626816
        ev.dataTransfer.setData("text/html", ev.currentTarget.outerHTML);
      }}
      onDragEnd={() => setDraggingCard(null)}
      style={{ viewTransitionName: `card-${id}` }}
      className="p-3 bg-gray-900 rounded-md shadow-md cursor-grab active:animate-pulse active:cursor-grabbing"
    >
      <p>{title}</p>

      <div className="flex flex-wrap gap-2 my-2">
        <span className="px-2 py-1 text-gray-400 border border-gray-400 rounded-md">
          #{id}
        </span>
        {tags &&
          tags.map((tag, id) => (
            <span key={id} className="px-2 py-1 bg-gray-700 rounded-md">
              {tag}
            </span>
          ))}
      </div>

      {/* {users && (
        <div className="flex gap-2">
          {users.map((user, id) => (
            <Image
              key={id}
              width={500}
              height={500}
              className="w-8 h-8 rounded-full"
              alt={user}
              src={`https://api.dicebear.com/6.x/notionists/svg?seed=${user}`}
            />
          ))}
        </div>
      )} */}
    </div>
  );
};
