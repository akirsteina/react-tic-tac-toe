import styled from 'styled-components';
import Board from './Board';

const GameDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

const GameInfo = styled.div`
	margin-left: 20px;
`;

const Game = () => {
	return (
		<GameDiv>
			<div className='game-board'>
				<Board />
			</div>
			<GameInfo>
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</GameInfo>
		</GameDiv>
	);
};

export default Game;
