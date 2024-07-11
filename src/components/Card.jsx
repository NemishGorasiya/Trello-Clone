import "./Card.scss";

const Card = ({ provided, item }) => {
  const { title, id } = item || {};
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="card"
    >
      {title}
    </div>
  );
};

export default Card;
