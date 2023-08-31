/**
 * column-container.jsx
 */

"use client"

import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./task-card";
import {Icons} from '@/components/ui/icons'

import { updateTaskOrder } from "./helper";

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}) {
  const [editMode, setEditMode] = useState(false);
  const [taskOrder, setTaskOrder] = useState(tasks.map(task => task.id));

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);


  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const newTaskOrder = [...taskOrder];
    const removedTaskId = newTaskOrder.splice(active.index, 1)[0];
    newTaskOrder.splice(over.index, 0, removedTaskId);

    setTaskOrder(newTaskOrder);
    updateTaskOrder(newTaskOrder);


  };


  
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
    onDragEnd: handleDragEnd, 

  });



  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-columnBackgroundColor
      opacity-40
      border-2
      border-pink-500
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
  bg-columnBackgroundColor
  w-[350px]
  h-[500px]
  max-h-[500px]
  rounded-md
  flex
  flex-col
  "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="
      bg-mainBackgroundColor
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-columnBackgroundColor
      border-4
      flex
      items-center
      justify-between
      "
      >
        <div className="flex gap-2">
          <div
            className="flex items-center justify-center px-2 py-1 text-sm rounded-full bg-columnBackgroundColor"
          >
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="px-2 bg-black border rounded outline-none focus:border-rose-500"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="px-1 py-2 rounded stroke-gray-500 hover:stroke-white hover:bg-columnBackgroundColor"
        >
          <Icons.trashIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Column task container */}
      <div className="flex flex-col flex-grow gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id} 
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className="flex items-center gap-2 p-4 border-2 rounded-md border-columnBackgroundColor border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500 active:bg-black"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <Icons.plusSign className="w-6 h-6" />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;