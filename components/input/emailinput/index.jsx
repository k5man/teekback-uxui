import TextField from 'teekback-uxui/form/InputField';

import { isEmail } from '../../../utils/objutils';

/**
 * Input field for email
 *
 * version 1.0.1
 * - updated for new-ui
 */
class EmailInput extends React.Component {
	constructor(props) {
		super(props);

		let email = this.props.email;
		if (!email) email = '';

		this.state = {
			email,
			isValid: isEmail(email),
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(v, email) {
		this.setState({
			email,
			isValid: isEmail(email),
		});

		this.props.onChange(this, email, this.state.isValid);
	}

	render() {
		return (
			<TextField
				value={this.state.email}
				floatingLabelText={this.props.hint}
				className={this.props.className}
				onChange={(v) => {
					this.handleChange(v, v.target.value);
				}}
			/>
		);
	}

}

EmailInput.propTypes = {
	hint: PropTypes.string,
	email: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	className: PropTypes.string,
};
EmailInput.defaultProps = {
	email: '',
	maxlength: 10,
	mask: '+7(999)9999999',
	hint: '',
	className: '',
};
//
export default EmailInput;
