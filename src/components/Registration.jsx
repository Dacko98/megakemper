// Config variables
import { GoogleSpreadsheet } from "google-spreadsheet";
import React, { useState } from 'react';
import {
	Button,
	Checkbox,
	Form,
	Input,
	Radio,
	Select,
	TextArea,
	Container,
} from 'semantic-ui-react'
import "../styles/registration.scss";
import { DateInput } from 'semantic-ui-calendar-react';


function Registration() {
	// const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
	// const SHEET_ID = process.env.REACT_APP_SHEET_ID;
	// const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
	// const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(/\n/g, '\n');

	// const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

	// const appendSpreadsheet = async (row) => {
	// 	try {
	// 		await doc.useServiceAccountAuth({
	// 			client_email: CLIENT_EMAIL,
	// 			private_key: PRIVATE_KEY,
	// 		});
	// 		// loads document properties and worksheets
	// 		await doc.loadInfo();

	// 		const sheet = doc.sheetsById[SHEET_ID];
	// 		const result = await sheet.addRow(row);
	// 		console.log(result);
	// 	} catch (e) {
	// 		console.error('Error: ', e);
	// 	}
	// };

	// appendSpreadsheet(newRow);

	const [name, setName] = useState('');
	const [birthDate, setBirthDate] = useState('1.1.2020');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [phoneParrents, setPhoneParrents] = useState('');
	const [email, setEmail] = useState('');
	const [friend, setFriend] = useState('');
	const [diet, setDiet] = useState('');
	const [expectations, setExpectations] = useState('');
	const [shirt, setShirt] = useState('');
	const [newcomer, setNewcomer] = useState('');



	const handleSubmit = (e) => {
		e.preventDefault();
		const newRow = { Name: name };
		console.log(radioButton);
		// appendSpreadsheet(newRow);
	};

	const options = [
		{ key: 'XS', text: 'XS', value: 'XS' },
		{ key: 'S', text: 'S', value: 'S' },
		{ key: 'M', text: 'M', value: 'M' },
		{ key: 'L', text: 'L', value: 'L' },
		{ key: 'XL', text: 'XL', value: 'XL' },
		{ key: 'XXL', text: 'XXL', value: 'XXL' },
	]

	const [radioButton, setRadioButton] = useState('');



	return (
		<Container id="reg" className="registration">
			<Form>
				<Form.Group widths='equal'>
					<Form.Field
						required
						control={Input}
						label='Meno a Priezvisko'
					/>
					<Form.Field
						required
						control={Input}
						label='Dátum narodenia'
					/>
					<Form.Field
						required
						control={Input}
						label='Adresa'
					/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Field
						required
						control={Input}
						label='Tel. č.'
					/>
					<Form.Field
						control={Input}
						label='Tel. č. rodiča'
					/>
					<Form.Field
						id='form-input-control-error-email'
						required
						control={Input}
						label='Email'
						error={false && {
							content: 'Please enter a valid email address',
							pointing: 'below',
						}}
					/>
				</Form.Group>
				<Form.Group>

					<Form.Field
						control={Input}
						label='Kamarát, ktorý ma pozval'
						width={6}
					/>
					{/* <DateInput
						placeholder="Date"
						value={birthDate}
						iconPosition="left"
						onChange={(e) => setBirthDate(e.target.value)}
					/> */}
					<Form.Field
						required
						control={Select}
						label='Veľkosť trička'
						options={options}
						width={4}
					/>
					<Form.Group
						grouped
						className="registration__first-time">
						<label>Som prvýkrát na tábore Megakemper</label>
						<Form.Group inline className="registration__radio">
							<Form.Field
								control={Radio}
								label='Áno'
								value='ano'
								checked={radioButton === 'ano'}
								onChange={(e) => setRadioButton('ano')}
							/>
							<Form.Field
								control={Radio}
								label='Nie'
								value='nie'
								checked={radioButton === 'nie'}
								onChange={(e) => setRadioButton('nie')}
							/>
						</Form.Group>

					</Form.Group>

				</Form.Group>

				<Form.Field
					control={TextArea}
					label='Choroby, diéta, obmedzenia'
				/>
				<Form.Field
					control={TextArea}
					label='Moje očakávania od tábora'
				/>
				<Form.Field className="registration__btn" control={Button} onClick={handleSubmit}>Registrovať</Form.Field>
			</Form>
		</Container >
	)
}

export default Registration;
