import {
	Container,
} from './HomeElements';
import ImgSlider from '../ImgSlider/index';
import Viewers from '../Viewers/index';

const Home = () => {
	return (
		<Container>
			<ImgSlider />
			<Viewers />
		</Container>
	);
};

export default Home;
