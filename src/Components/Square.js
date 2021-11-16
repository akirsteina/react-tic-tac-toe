import styled from 'styled-components';

const Button = styled.button`
	background: #ffffff;
	color: ${(props) => (props.inputColor ? 'red' : 'black')};
	border: 1px solid #999;
	float: left;
	font-size: 30px;
	font-weight: bold;
	line-height: 80px;
	height: 80px;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	text-align: center;
	width: 80px;
	cursor: pointer;
	&:focus {
		outline: none;
		background: #ddd;
	}
	&:disabled {
		cursor: not-allowed;
		background: #ddd;
	}
`;

const Square = (props) => {
	const specialSquare = props.winnerLine;
	return (
		<Button onClick={props.clickHandler} disabled={props.winner} inputColor={specialSquare}>
			{props.value}
		</Button>
	);
};

export default Square;
