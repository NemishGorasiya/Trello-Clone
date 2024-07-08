import React from "react";
import Card from "./Card";

const CardBlock = ({ list }) => {
	return (
		<div>
			{list.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
};

export default CardBlock;
