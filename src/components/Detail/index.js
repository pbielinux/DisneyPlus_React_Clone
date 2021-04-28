import {
	Container,
	Background,
	ImageTitle,
	ContentMeta,
	Controls
} from './DetailElements';

const Detail = () => {
	return (
		<Container>
			<Background>
				<img
					src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg'
					alt=''
				/>
			</Background>
			<ImageTitle>
				<img
					src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78'
					alt=''
				/>
			</ImageTitle>
			<ContentMeta>
				<Controls>controls</Controls>
			</ContentMeta>
		</Container>
	);
};

export default Detail;
