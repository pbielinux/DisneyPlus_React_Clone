import {
	Container,
	Content,
	Wrap
} from './OriginalElements';
import { Link } from 'react-router-dom';

const Originals = () => {
	return (
		<Container>
			<h4>Originals</h4>
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

export default Originals;
