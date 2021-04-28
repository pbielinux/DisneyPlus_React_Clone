import {
	Container,
	Content,
	Wrap
} from './RecommendsElements';
import { Link } from 'react-router-dom';

const Recommends = () => {
	return (
		<Container>
			<h4>Recommended for You</h4>
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

export default Recommends;
