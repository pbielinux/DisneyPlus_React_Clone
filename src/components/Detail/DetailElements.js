import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	min-height: calc(100vh - 250px);
	overflow-x: hidden;
	display: block;
	top: 72px;
	padding: 0 calc(3.5vw + 5px);
`;

export const Background = styled.div`
	left: 0px;
	opacity: 0.8;
	position: fixed;
	right: 0px;
	top: 0px;
	z-index: -1;

	img {
		width: 100vw;
		height: 100vh;

		@media (max-width: 768px) {
			width: initial;
		}
	}
`;

export const ImageTitle = styled.div`
	align-items: flex-end;
	display: flex;
	-webkit-box-pack: start;
	justify-content: flex-start;
	margin: 0px auto;
	height: 30vw;
	min-height: 170px;
	padding-bottom: 24px;
	width: 100%;

	img {
		max-width: 600px;
		min-width: 200px;
		width: 35vw;
	}
`;

export const ContentMeta = styled.div`
	max-width: 874px;
`;

export const Controls = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	margin: 24px 0px;
	min-height: 56px;
`;
