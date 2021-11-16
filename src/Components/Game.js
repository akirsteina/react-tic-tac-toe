import styled from 'styled-components';
import Board from './Board';

const Game = () => {
	const Game = styled.div`
		display: flex;
		flex-direction: row;
	`;

	const GameInfo = styled.div`
		margin-left: 20px;
	`;

	return (
		<Game>
			<div className='game-board'>
				<Board />
			</div>
			<GameInfo>
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</GameInfo>
		</Game>
	);
};

export default Game;
