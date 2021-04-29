import {
	Container,
	Background,
	ImageTitle,
	ContentMeta,
	Controls,
	Player,
	Trailer,
	AddList,
	GroupWatch,
	SubTitle,
	Description
} from './DetailElements';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';

const Detail = () => {
	const { id } = useParams();
	const [ detailData, setDetailData ] = useState({});

	useEffect(() => {
		db.collection('movies')
			.doc(id)
			.get()
			.then((doc) => {
				if(doc.exists) {
					setDetailData(doc.data());
				} else {
					console.log('no such document in firebase 🔥');
				}
			})
			.catch((error) => {
				console.log('Error getting documents:', error);
			});
	}, [ id ]);

	return (
		<Container>
			<Background>
				<img src={detailData.backgroundImg} alt={detailData.title} />
			</Background>
			<ImageTitle>
				<img src={detailData.titleImg} alt={detailData.title} />
			</ImageTitle>
			<ContentMeta>
				<Controls>
					<Player>
						<img src='/images/play-icon-black.png' alt='' />
						<span>Play</span>
					</Player>
					<Trailer>
						<img src='/images/play-icon-white.png' alt='' />
						<span>Trailer</span>
					</Trailer>
					<AddList>
						<span />
						<span />
					</AddList>
					<GroupWatch>
						<div>
							<img src='/images/group-icon.png' alt='' />
						</div>
					</GroupWatch>
				</Controls>
				<SubTitle>
					{detailData.subTitle}
				</SubTitle>
				<Description>
					{detailData.description}
				</Description>
			</ContentMeta>
		</Container>
	);
};

export default Detail;
