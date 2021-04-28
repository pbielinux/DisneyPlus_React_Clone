import {
	Container,
	Content,
	Wrap
} from './TrendingElements';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTrending } from '../../features/movie/movieSlice';

const Trending = () => {
	const movies = useSelector(selectTrending);

	return (
		<Container>
			<h4>Trending</h4>
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

export default Trending;
