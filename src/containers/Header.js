import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
	render() {
		return (
			<header style={headerStyle}>
				<Title>Rocket.Chat SDK Demo</Title>
			</header>
		);
	}
}

const headerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 40,
	marginBottom: 20
}

const Title = styled.span`
	color: rgba(0, 0, 0, 0.87);
	font-size: 40px;
	font-weight: 700;
`;

export default Header;