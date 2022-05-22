import "../styles/informations.scss"
import { FaMapMarkerAlt, FaRegCalendarCheck, FaCoins } from 'react-icons/fa'
import {
	Container,
} from 'semantic-ui-react'

const Informations = () => {
	return (
		<Container>
			<div className="info">
				<div className="info__item">
					<FaMapMarkerAlt className="info__icon" size={160} />
					<h4>KDE?</h4>
					<p className="info__sub">Muránska Zdychava (Karafová)</p>
					<p className="info__sub--color">Približne 2km za obcou Muránska Zdychava, chata za potôčikom napravo. </p>
				</div>
				<div className="info__item">
					<FaMapMarkerAlt className="info__icon" size={160} />
					<h4>KEDY?</h4>
					<p className="info__sub">13.-22. august 2021</p>
					<p className="info__sub--color">Začíname 13.8. o 15:00, Končíme 22.8.o 13:00</p>
				</div>
				<div className="info__item">
					<FaMapMarkerAlt className="info__icon" size={160} />
					<h4>KOĽKO?</h4>
					<p className="info__sub">60€ keď ideš na Megakemper prvýkrát alebo keď prinesieš kamoša, ktorý ešte nebol (jeho meno uveď v registrácii). 85€ keď ideš druhýkrát a nikoho nového so sebou neprivedieš, IBAN: SK6609000000000511952302</p>
					<p className="info__sub--color">dátum splatnosti: 31. 7. 2021 (do poznámky platby uveďte meno účastníka) </p>
				</div>
			</div>
		</Container>
	)
}

export default Informations
