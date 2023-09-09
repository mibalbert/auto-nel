/**
 * current-workload/page.jsx
 */

import KanbanBoard from "@/components/created/kanban/kanban-board";
import Header from "@/components/created/navigation/header";

const CurrentWorkload = () => {
  return (
    <div className="flex-col  mx-auto  z-10">
      <div className="flex-1 ">
        <KanbanBoard />
      </div>
    </div>
  );
};

export default CurrentWorkload;
