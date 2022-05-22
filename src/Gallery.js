import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import './App.css';

function Gallery() {
	return (
		<div className="App">
			<SRLWrapper>
				<div className="container">
					{images.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</div>
	);
}

export default Gallery;
