import React, { useState } from "react";
import CardBlock from "./CardBlock";
import { tasksList } from "../utils/constants";
import { DragDropContext } from "react-beautiful-dnd";

const TaskBoard = () => {
  const [list, setList] = useState(tasksList);
  const onDragEnd = (result) => {
    console.log(result);
    // reOrderList({
    //   sourceIdx: result.source.index,
    //   targetIdx: result.destination.index,
    //   sourceDroppableId: result.source.droppableId,
    //   destinationDroppableId: result.destination.droppableId,
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {list.map((subList, idx) => (
        <CardBlock idx={idx} key={idx} list={subList} />
      ))}
    </DragDropContext>
  );
};

export default TaskBoard;
