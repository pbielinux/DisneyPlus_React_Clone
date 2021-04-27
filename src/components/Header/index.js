import {
	Nav,
	Logo,
	NavMenu,
	Login,
	UserImg,
	SignOut,
	DropDown
} from './HeaderElements';
import {
	auth,
	provider
} from '../../firebase';
import {
	useDispatch,
	useSelector
} from "react-redux"; // To Dispatch orders to our store, Selector retrieves order from store
import { useHistory } from "react-router-dom";
import { useEffect } from 'react'
import {
	selectUserName,
	selectUserPhoto,
	setUserLoginDetails,
	setSignOutState
} from '../../features/user/userSlice'

const Header = (props) =>  {

	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if(user) {
				setUser(user);
				history.push('/home'); //if user is already logged in, bring him to the homepage
			}
		});
	}, [userName]); // Setting userName as a dependency, makes the function runs each time the user changes

	const handleAuth = () => {
		if (!userName) {
		auth
			.signInWithPopup(provider)
			.then((result) => { // Read and then return with the result
				setUser(result.user); // Write the result on the console
		})
			.catch((error) => {
				alert(error.message);  //If catch an error show alert
		});
		} else if (userName) {
			auth.signOut().then(() => {
				dispatch(setSignOutState());
				history.push('/');
		}).catch((err) => alert(err.message));
		}
	};


	const setUser = (user) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	return (
		<Nav>
			<Logo>
				<img src='/images/logo.svg' alt='Disney+' />
			</Logo>

			{!userName ? (
				<Login onClick={handleAuth}>Login</Login>
			) : (
				<>
				<NavMenu>
					<a href='/home'>
						<img src='/images/home-icon.svg' alt="HOME" />
						<span>HOME</span>
					</a>
					<a href='/search'>
						<img src='/images/search-icon.svg' alt="SEARCH" />
						<span>SEARCH</span>
					</a>
					<a href='/watchlist'>
						<img src='/images/watchlist-icon.svg' alt="WATCHLIST" />
						<span>WATCHLIST</span>
					</a>
					<a href='/originals'>
						<img src='/images/original-icon.svg' alt="ORIGINALS" />
						<span>ORIGINALS</span>
					</a>
					<a href='/movies'>
						<img src='/images/movie-icon.svg' alt="MOVIES" />
						<span>MOVIES</span>
					</a>
					<a href='/series'>
						<img src='/images/series-icon.svg' alt="SERIES" />
						<span>SERIES</span>
					</a>
				</NavMenu>
				<SignOut>
					<UserImg src={userPhoto} alt={userName} />
					<DropDown>
						<span onClick={handleAuth}>Sign out</span>
					</DropDown>
				</SignOut>
				</>
			)}
		</Nav>
	);
};

export default Header;
