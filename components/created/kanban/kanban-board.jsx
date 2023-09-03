/**
 * kanban-board.jsx
 */

"use client"



// import {
//   ChevronDownIcon,
//   PlusIcon,
//   DotsVerticalIcon,
//   PlusCircleIcon,
// } from "@heroicons/react/outline";
import TaskCard from "./task-card";
import BoardData from "./data.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";



function createGuidId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export default function KanbanBoard() {
  const [ready, setReady] = useState(false);
  const [boardData, setBoardData] = useState(BoardData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);

  useEffect(() => {
    if (process.browser) {
      setReady(true);
    }
  }, []);

  const onDragEnd = (re) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const onTextAreaKeyPress = (e) => {
    if(e.keyCode === 13) //Enter
    {
      const val = e.target.value;
      if(val.length === 0) {
        setShowForm(false);
      }
      else {
        const boardId = e.target.attributes['data-id'].value;
        const item = {
          id: createGuidId(),
          title: val,
          priority: 0,
          chat:0,
          attachment: 0,
          assignees: []
        }
        let newBoardData = boardData;
        newBoardData[boardId].items.push(item);
        setBoardData(newBoardData);
        setShowForm(false);
        e.target.value = '';
      }
    }
  }

  return (
      <motion.div initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col p-10 pt-0"
      >
        {/* Board header
        <motion.div  initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="flex justify-between flex-initial"
          >
          
          <ul className="flex space-x-3">
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Asdka"
                width="36"
                height="36"
                objectFit="cover"
                className="rounded-full"
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="Asdka"
               
                width="36"
                height="36"
                objectFit="cover"
                className="rounded-full "
              />
            </li>
            <li>
              <Image
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt="Asdka"
               
                width="36"
                height="36"
                objectFit="cover"
                className="rounded-full "
              />
            </li>
            <li>
              <button
                className="flex items-center justify-center border border-gray-500 border-dashed rounded-full w-9 h-9"
              >
                <Icons.plusSign className="w-5 h-5 text-gray-500" />
              </button>
            </li>
          </ul>
        </motion.div> */}

        {/* Board columns */}
        {ready && (
          <DragDropContext onDragEnd={onDragEnd}>
            <motion.div initial={{ opacity: 0.3, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0 }}
              className="grid grid-cols-4 gap-5 my-5"
              >
              {boardData.map((board, bIndex) => {
                return (
                  <motion.div
                  key={board.name}
                  initial={{ opacity: 0.3, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 * bIndex }}
                  >
                    <Droppable droppableId={bIndex.toString()}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <div
                            className={`bg-gray-50/60 dark:bg-card rounded-xl shadow-md  border border-neutral-300 dark:border-border
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && "bg-green-200"}`}
                          >
                            {/* <span
                              className="absolute inset-x-0 top-0 w-full h-1 bg-gradient-to-r from-pink-700 to-red-200"
                            ></span> */}
                            <div className="flex items-center justify-between px-5 pt-4 pb-2 ">
                              <span className="text-xl font-semibold text-gray-800 dark:text-gray-300">
                                {board.name}
                              </span>
                              {/* <DotsVerticalIcon className="w-5 h-5 text-gray-500" /> */}
                            </div>

                            <div className="h-auto overflow-x-hidden overflow-y-auto pt-4 pb-6"
                            style={{maxHeight:'calc(100vh - 290px)'}}>
                              {board.items.length > 0 &&
                                board.items.map((item, iIndex) => {
                                  return (
                                    <TaskCard
                                      key={item.id}
                                      data={item}
                                      index={iIndex}
                                      className="m-3"
                                    />
                                  );
                                })}
                              {provided.placeholder}
                            </div>
                            
                            {
                              showForm && selectedBoard === bIndex ? (
                                <div className="p-3">
                                  <textarea className="w-full border-gray-300 dark:border-border rounded focus:ring-purple-400" 
                                  rows={3} placeholder="Task info" 
                                  data-id={bIndex}
                                  onKeyDown={(e) => onTextAreaKeyPress(e)}/>
                                </div>
                              ): (
                                <div className="w-full items-center justify-center">
                                <Button
                                  variant="link"
                                  className="mx-auto flex items-center justify-center my-3 space-x-2 text-sm"
                                  onClick={() => {setSelectedBoard(bIndex); setShowForm(true);}}
                                  >
                                  <span>Add task</span>
                                  <Icons.plusSign className="w-5 h-5 text-gray-500" />
                                </Button>
                                  </div>
                              )
                            }
                          </div>
                        </div>
                      )}
                    </Droppable>
                  </motion.div>
                );
              })}
            </motion.div>
          </DragDropContext>
        )}
      </motion.div>
  );
}