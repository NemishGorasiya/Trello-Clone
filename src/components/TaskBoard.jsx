import React from "react";
import CardBlock from "./CardBlock";
import { list1 } from "../utils/constants";

const TaskBoard = () => {
	return (
		<div>
			<CardBlock list={list1} />
		</div>
	);
};

export default TaskBoard;
