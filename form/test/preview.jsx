import { InputField, PhoneInputField, CheckboxField, RadioField, MaskedInputField, TextArea } from '../index';

export default {
	title: 'Form',
	blocks: [
		{
			title: 'Input Text',
			text: `<InputField label="Text field" />`,
			component: () => {
				return (<InputField label="Text field" />);
			},
		},
		{
			title: 'Input Text Area',
			text: `<TextArea label="Text field" />`,
			component: () => {
				return (<TextArea label="Text field" />);
			},
		},
		{
			title: 'Checkbox Text',
			text: `<CheckboxField label="Checkbox field" />`,
			component: () => {
				return (<CheckboxField label="Checkbox field" />);
			},
		},
		{
			title: 'Radio text',
			text: `<div>
	<RadioField name="test1" label="Radio field" />
	<RadioField name="test1" label="Radio field" />
	<RadioField name="test2" label="Radio field" />
</div>`,
			component: () => {
				return (
					<div>
						<RadioField name="test1" label="Radio field" />
						<RadioField name="test1" label="Radio field" />
						<RadioField name="test2" label="Radio field" />
					</div>
				);
			},
		},
		{
			title: 'Input phone',
			text: `<PhoneInputField
	label="Телефон"
	indicateInvalid={false}
/>`,
			component: () => {
				return (<PhoneInputField
					label="Телефон"
					indicateInvalid={false}
				/>);
			},
		},
		{
			title: 'Masked input text',
			text: `<MaskedInputField 
	label="Text field"
	mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
/>
<MaskedInputField 
	label="Text field"
	showMask={false}
	autoCorrectedDatePipe="mm/dd/yyyy"
	mask={[/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/]}
/>`,
			component: () => {
				return (
					<div>
						<MaskedInputField
							label="Text field"
							showMask
							mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
						/>
						<MaskedInputField
							label="Text field"
							showMask={false}
							autoCorrectedDatePipe="mm/dd/yyyy"
							mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
						/>
					</div>
				);
			},
		},
	],
};

