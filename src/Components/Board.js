import { Fragment } from 'react';
import styled from 'styled-components';
import Square from './Square';

const BoardDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const Board = (props) => {
	return (
		<Fragment>
			<BoardDiv>
				{props.board.map((square, i) => (
					<Square
						key={i}
						value={square}
						clickHandler={() => props.clickHandler(i)}
						winner={props.winner}
						winnerLine={props.winnerLine ? props.winnerLine.includes(i) : false}
					/>
				))}
			</BoardDiv>
		</Fragment>
	);
};

export default Board;
