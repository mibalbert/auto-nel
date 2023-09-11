/**
 * current-workload/page.jsx
 */

import Kanban from "@/components/created/kanb/kanban";
import KanbanBoard from "@/components/created/kanban/kanban-board";

const CurrentWorkload = () => {
  return (
    <div className="z-10 flex-col mx-auto">
      <div className="flex-1 ">{/* <KanbanBoard /> */}</div>
      <Kanban />
    </div>
  );
};

export default CurrentWorkload;
