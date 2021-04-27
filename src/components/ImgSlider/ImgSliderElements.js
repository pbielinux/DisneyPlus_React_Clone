import styled from 'styled-components';
import Slider from 'react-slick';

export const Carousel = styled(Slider)`
	margin-top: 20px;

	& > button {
		opacity: 0;
		height: 100%;
		width: 5vh;
		z-index: 1;

		&:hover {
			opacity: 1;
			transition: opacity 0.2s ease 0s;
		};
	};

	ul li button {    // Access the dots
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
			padding-top: 10px;
		};
	};

	li.slick-active button:before { // Style the active dot
		color: white;
	};

	.slick-list {
		overflow: initial; // Show the actual slider and the upcoming next
	};

	.slick-prev {
		left: -50px;
	};

	.slick-next {
		right: -50px;
	};
`;

export const Wrap = styled.div`
	border-radius: 4px;
	cursor: pointer;
	position: relative;

	a {
		border-radius: 4px;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		cursor: pointer;
		display: block;
		position: relative;
		padding: 4px;


		img {
			width: 100%;   // Makes mobile responsive
			height: 100%;
		};

		&:hover {
			box-sizing: border-box;
			padding: 0;
			border: 4px solid rgba(249, 249, 249, 0.8);
			transition-duration: 300ms;
		}
	};
`;
