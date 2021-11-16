import React from 'react';
import Game from './Components/Game';

import './Assets/index.css';
import styled from 'styled-components';
function App() {
	const Container = styled.div`
		display: flex;
		justify-content: center;
		margin-top: 100px;
	`;

	return (
		<Container>
			<Game />
		</Container>
	);
}

export default App;
