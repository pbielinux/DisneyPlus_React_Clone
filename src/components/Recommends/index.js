import {
	Container,
	Content,
	Wrap
} from './RecommendsElements';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecommend } from '../../features/movie/movieSlice';

const Recommends = () => {
	const movies = useSelector(selectRecommend); // get from firebase send to store, useSelector let us take access

	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				{
					movies && movies.map((movie, key) => (    // If we have movies, map through then
						<Wrap key={key}>
							{movie.id}
							<Link to={'/detail/' + movie.id}>
								<img src={movie.cardImg} alt={movie.title} />
							</Link>
						</Wrap>
					))
				}
			</Content>
		</Container>
	);
};

export default Recommends;
