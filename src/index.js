import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Gallery from './Gallery';
import 'semantic-ui-css/semantic.min.css';
import SimpleReactLightbox from 'simple-react-lightbox'

const root = createRoot( document.getElementById('root'));

root.render(
	 	<SimpleReactLightbox>
    	<App />
			<Gallery/>
		</SimpleReactLightbox>
	)
