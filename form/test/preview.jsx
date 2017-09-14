import { InputField } from '../index';

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
	],
};

