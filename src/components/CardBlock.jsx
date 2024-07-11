import "./CardBlock.scss";
import Card from "./Card";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CardBlock = ({ list, reOrderList, idx }) => {
  return (
    <Droppable droppableId={`droppable${idx}`}>
      {(provided) => (
        <div
          className="card-block"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {list.map((item, index) => {
            return (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => <Card provided={provided} item={item} />}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default CardBlock;
