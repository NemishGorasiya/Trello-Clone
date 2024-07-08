import React from "react";

const Card = ({ item }) => {
	const { title } = item || {};
	return <div draggable>{title}</div>;
};

export default Card;
