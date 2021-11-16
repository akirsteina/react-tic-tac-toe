import React from 'react';
import Game from './Components/Game';

import './Assets/index.css';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 100px;
`;

function App() {
	return (
		<Container>
			<Game />
		</Container>
	);
}

export default App;
