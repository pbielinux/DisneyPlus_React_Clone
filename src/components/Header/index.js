import {
	Nav,
	Logo,
	NavMenu,
	Login,
} from './HeaderElements';
import {
	auth,
	provider
} from '../../firebase';
import {
	useDispatch,
	userSelector
} from "react-redux"; // To Dispatch orders to our store, Selector retrieves order from store
import { useHistory } from "react-router-dom";
import {
	selectUserName,
	selectUserEmail,
	selectUserPhoto
} from '../../features/user/userSlice'

const Header = (props) =>  {

	const dispatch = useDispatch();
	const history = useHistory();
	const username = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);

	const handleAuth = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => { // Read and then return with the result
				setUser(result.user); // Write the result on the console
		})
			.catch((error) => {
				alert(error.message);  //If catch an error show alert
		});
	};

	const setUser = (user) => {
		dispatch(
			setUserLoginDetails({
				name: user.displayName,
				email: user.email,
				photo: user.PhotoURL,
			})
		);
	};

	return (
		<Nav>
			<Logo>
				<img src='/images/logo.svg' alt='Disney+' />
			</Logo>

			{!userName ? <Login onClick={handleauth}>Login</Login> : <></>}

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
			<Login onClick={handleAuth}>Login</Login>
		</Nav>
	)
};

export default Header;
