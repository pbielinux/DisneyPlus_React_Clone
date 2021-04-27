import styled from 'styled-components'

export const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 70px;
	background-color: #090b13;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 36px;
	letter-spacing: 16px;
	z-index: 3;
	user-select: none;
`;

export const Logo = styled.a`
	padding: 0;
	width: 80px;
	margin-top: 4px;
	max-height: 70px;
	font-size: 0;
	display: inline-block;

	img {
		display: block;
		width: 100%;
	}
`;

export const NavMenu = styled.div`
	align-items: center;
	display: flex;
	flex-flow: row nowrap;
	height: 100%;
	justify-content: flex-end;
	margin: 0px;
	padding: 0px;
	position: relative;
	margin-right: auto;
	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		user-select: none;

		img {
			height: 20px;
			min-width: 20px;
			min-height: 20px;
			width: 20px;
			z-index: auto;
		}

		span {
			color: rgb(249, 249, 249);
			font-size: 13px;
			letter-spacing: 1.42px;
			line-height: 1.08;
			padding: 2px 0px;
			white-space: nowrap;
			position: relative;

			&:before {
				background-color: rgb(249, 249, 249);
				border-radius: 0px 0px 4px 4px;
				bottom: -6px;
				content: "";
				height: 2px;
				left: 0px;
				opacity: 0;
				position: absolute;
				right: 0px;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				visibility: hidden;
				width: auto;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				visibility: visible;
				opacity: 1 !important;
			}
		}
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

export const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.2s ease 0s; //Same as ease-out
	user-select: none; // Lock the text selection to users

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
		cursor: pointer;
	}
`;

export const UserImg = styled.img`
	height: 100%;
`;

export const DropDown = styled.div`
	position: absolute;
	top: 48px;
	right: 0px;
	background: rgb(19, 19, 19);
	border: 1px solid rgba(151, 151, 151);
	border-radius: 4px;
	box-shadow: rgb(0, 0, 0 / 50%) 0px 0px 18px;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 3px;
	width: 100px;
	opacity: 0;
`;

export const SignOut = styled.div`
	position: relative;
	height: 48px;
	width: 48px;
	display: flex;
	cursor: pointer;
	align-items: center; // Vertical align
	justify-content: center; // Horizontal align

	${UserImg} {
		border-radius: 50%;
	}
`;
