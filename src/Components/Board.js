import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Status = styled.div`
	margin-bottom: 10px;
	font-size: 20px;
`;

const BoardRow = styled.div`
	&:after {
		clear: both;
		content: '';
		display: table;
	}
`;
const Board = () => {
	const renderSquare = (i) => {
		return <Square value={i} />;
	};

	return (
		<React.Fragment>
			<Status>Next player: X</Status>
			<BoardRow>
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</BoardRow>
			<BoardRow>
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</BoardRow>
			<BoardRow>
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</BoardRow>
		</React.Fragment>
	);
};

export default Board;
