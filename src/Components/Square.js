import styled from 'styled-components';

const Button = styled.button`
	background: #fff;
	border: 1px solid #999;
	float: left;
	font-size: 24px;
	font-weight: bold;
	line-height: 50px;
	height: 50px;
	margin-right: -1px;
	margin-top: -1px;
	padding: 0;
	text-align: center;
	width: 50px;
	&:focus {
		outline: none;
		background: #ddd;
	}
`;

const Square = (props) => {
	const clickHandler = () => {
		console.log('Click!');
	};

	return <Button onClick={clickHandler}>{props.value}</Button>;
};

export default Square;
