import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflow: 'scroll', border: '5px solid teal', height:'800px'}}>
		{props.children}
		</div>
		);
};
export default Scroll;