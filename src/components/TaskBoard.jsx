import React, { useState } from "react";
import CardBlock from "./CardBlock";
import { tasksList } from "../utils/constants";
import { DragDropContext } from "react-beautiful-dnd";

const TaskBoard = () => {
	const [list, setList] = useState(tasksList);
	const onDragEnd = (result) => {
		console.log(result);
		const {
			source: { droppableId: sourceDroppableId, index: sourceIdx },
			destination: {
				droppableId: destinationDroppableId,
				index: destinationIdx,
			},
		} = result || {};

		if (
			sourceDroppableId === destinationDroppableId &&
			sourceIdx === destinationIdx
		) {
			return;
		}

		setList((prevList) => {
			const tempList = [...prevList];
			const itemToReOrder = tempList[sourceDroppableId][sourceIdx];
			const sourceList = tempList[sourceDroppableId];
			const filteredSourceList = [
				...sourceList.slice(0, sourceIdx),
				...sourceList.slice(sourceIdx + 1),
			];
			tempList[sourceDroppableId] = filteredSourceList;
			const destinationList = tempList[destinationDroppableId];
			const newDestinationList = [
				...destinationList.slice(0, destinationIdx),
				itemToReOrder,
				...destinationList.slice(destinationIdx),
			];
			tempList[destinationDroppableId] = newDestinationList;
			return tempList;
		});
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
