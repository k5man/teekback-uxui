import { InputField, PhoneInputField, CheckboxField } from '../index';

export default {
	title: 'Form',
	blocks: [
		{
			title: 'Input text',
			text: `<InputField label="Text field" />`,
			component: () => {
				return (<InputField label="Text field" />);
			},
		},
		{
			title: 'Checkbox text',
			text: `<CheckboxField label="Checkbox field" />`,
			component: () => {
				return (<CheckboxField label="Checkbox field" />);
			},
		},
		{
			title: 'Input phone',
			text: `<PhoneInputField
	phone=""
	minLength={10}
	maxLength={10}
	mask="+7(999)9999999"
	pfx="+7"
	hint="Phone field"
	className="green lighten-5"
/>`,
			component: () => {
				return (<PhoneInputField
					phone=""
					minLength={10}
					maxLength={10}
					mask="+7(999)9999999"
					pfx="+7"
					hint="Phone field"
					className="green lighten-5"
				/>);
			},
		},
	],
};

