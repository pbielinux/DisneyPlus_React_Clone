import {
	Container,
	Content,
	Wrap
} from './TrendingElements';
import { Link } from 'react-router-dom';

const Trending = () => {
	return (
		<Container>
			<h4>Trending</h4>
			<Content>
				<Wrap>
					<Link to='/'>
						<img src='/images/image-asset.jpeg' alt='' />
					</Link>
				</Wrap>
				<Wrap>
					<Link to='/'>
						<img src='/images/image-asset.jpeg' alt='' />
					</Link>
				</Wrap>
				<Wrap>
					<Link to='/'>
						<img src='/images/image-asset.jpeg' alt='' />
					</Link>
				</Wrap>
				<Wrap>
					<Link to='/'>
						<img src='/images/image-asset.jpeg' alt='' />
					</Link>
				</Wrap>
			</Content>
		</Container>
	);
};

export default Trending;
