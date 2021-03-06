import styled from 'styled-components';

export const Container = styled.main`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;     //define the top to start after the Navbar
	padding: 0 calc(3.5vh + 5px);
	user-select: none;

	&:after {
		background: url('/images/home-background.png') center center / cover no-repeat fixed;
		content: '';
		position: absolute;
		inset: 0px;
		opacity: 1;
		z-index: -1;
	};
`;
