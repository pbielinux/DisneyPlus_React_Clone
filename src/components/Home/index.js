import {
	Container,
} from './HomeElements';
import ImgSlider from '../ImgSlider';
import Viewers from '../Viewers';
import Recommends from '../Recommends';
import NewDisney from '../NewDisney';
import Originals from '../Originals';
import Trending from '../Trending';

const Home = () => {
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
