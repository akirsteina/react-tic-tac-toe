import styled from 'styled-components';

const Button = styled.button`
	background: #fff;
	border: 1px solid #999;
	float: left;
	font-size: 24px;
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
`;

const Square = (props) => {
	return <Button onClick={props.clickHandler}>{props.value}</Button>;
};

export default Square;
