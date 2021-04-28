import {
	Container,
} from './HomeElements';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';
import Recommends from '../Recommends';
import NewDisney from '../NewDisney';
import Originals from '../Originals';
import Trending from '../Trending';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../../firebase';
import { setMovies } from '../../features/movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';

const Home = () => {
	const	dispatch = useDispatch();
	const	userName = useSelector(selectUserName);
	let		recommends = [];
	let		newDisneys = [];
	let		originals = [];
	let		trending = [];

	useEffect(() => {      // Hook
		db.collection('movies').onSnapshot((snapshot) => {
			snapshot.docs.map((doc) => {         // Loop through records, switch on each doc
				/* console.log(recommends); */
				switch(doc.data().type) {     // Switch doc data on type
				case 'recommend':
					recommends = [...recommends, {id: doc.id, ...doc.data()}]; // Expands what already exist and add the new record
					break;
				case 'new':
					newDisneys = [...newDisneys, {id: doc.id, ...doc.data()}];
					break;
				case 'original':
					originals = [...originals, {id: doc.id, ...doc.data()}];
					break;
				case 'trending':
					trending = [...trending, {id: doc.id, ...doc.data()}];
					break;
				}
			});

			dispatch(
				setMovies({
					recommend: recommends,
					newDisney: newDisneys,
					original: originals,
					trending: trending
				})
			);
		});
	}, [userName]); // Only update when username is updated

	return (
		<Container>
			<ImgSlider />
			<Viewers />
			<Recommends />
			<NewDisney />
			<Originals />
			<Trending />
		</Container>
	);
};

export default Home;
