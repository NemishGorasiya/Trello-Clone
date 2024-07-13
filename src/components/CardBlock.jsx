import "./CardBlock.scss";
import Card from "./Card";
import { Draggable, Droppable } from "react-beautiful-dnd";
import PropTypes from "prop-types";

const CardBlock = ({ list, idx }) => {
	return (
		<Droppable droppableId={`${idx}`}>
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

CardBlock.propTypes = {
	list: PropTypes.array,
	idx: PropTypes.number,
};

export default CardBlock;
