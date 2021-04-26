import {
	Nav,
	Logo,
	NavMenu,
	Login,
} from './HeaderElements';
import { auth, provider } from '../../firebase';

const Header = (props) =>  {

	const handleAuth = () => {
		auth.signInWithPopup(provider).then ((result) => { // Read and then return with the result
			console.log(result); // Write the result on the console
		}).catch((error) => {
			alert(error.message);  //If catch an error show alert
		})
	}

	return (
		<Nav>
			<Logo>
				<img src='/images/logo.svg' alt='Disney+' />
			</Logo>
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
