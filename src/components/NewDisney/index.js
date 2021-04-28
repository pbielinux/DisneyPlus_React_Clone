import {
	Container,
	Content,
	Wrap
} from './NewDisneyElements';
import { Link } from 'react-router-dom';

const NewDisney = () => {
	return (
		<Container>
			<h4>New to Disney+</h4>
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

export default NewDisney;
