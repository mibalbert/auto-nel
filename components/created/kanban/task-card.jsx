/**
 * task-card.jsx
 */

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Image from "next/image";
import { FaExpandArrowsAlt } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function TaskCard({ data, index }) {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-3 m-3 mt-0 bg-white dark:bg-card-darker  rounded-md last:mb-0 border border-neutral-300 dark:border-border  shadow-lg"
        >
          <Dialog>
            <DialogTrigger className="">
              <div>
              <label
                className={`
                  px-2 py-1 rounded text-white text-sm
                  ${
                    data.priority === 0
                      ? "bg-blue-400"
                      : data.priority === 1
                      ? "bg-green-500"
                      : "bg-red-400"
                  }
                `}
              >
                {data.priority === 0
                  ? "Low"
                  : data.priority === 1
                  ? "Medium"
                  : "High"}
              </label>
              <h5 className=" my-3 text-lg leading-6 text-md">{data.title}</h5>
              <div className="flex flex-col justify-start">
                <ul>
                  {data?.operations?.map((el, id) => (
                    <li key={id}>{id + 1} - {el}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between pt-5">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center space-x-1">
                    {/* <ChatAlt2Icon className="w-4 h-4 text-gray-500" /> */}
                    <span>{data.chat}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    {/* <PaperClipIcon className="w-4 h-4 text-gray-500" /> */}
                    <span>{data.attachment}</span>
                  </span>
                </div>
                <ul className="flex space-x-3 ">
                  {data.assignees.map((ass, index) => (
                    <li key={index}>
                      <Image
                        // src={ass.avt}
                        src={
                          "https://randomuser.me/api/portraits/men/67.jpg"
                        }
                        alt="yes"
                        width="36"
                        height="36"
                        objectFit="cover"
                        className="rounded-full "
                      />
                    </li>
                  ))}
                  <li>
                    {/* <button className="flex items-center justify-center border border-gray-500 border-dashed rounded-full w-9 h-9"> */}
                    <button className="flex items-center justify-center  w-9 h-9 hover:cursor-grab">
                      <FaExpandArrowsAlt />
                      {/* <Icons.plusSign className="w-5 h-5 text-gray-500" /> */}
                    </button>
                  </li>
                </ul>
              </div>
              </div>  
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{data.title}</DialogTitle>
                <DialogDescription>
                  {/* Display more in-depth description here */}
                  <ul>
                  {data.operations.map((el,id)=>{
                    return <li key={id}>{el}</li>
                  })}
                  </ul>
                </DialogDescription>
              </DialogHeader>
              {/* Additional details about the task */}
              <div>
                <p>Priority: {data.priority}</p>
                <p>Assignees: {data.assignees.join(", ")}</p>
                {/* Add more task details as needed */}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
