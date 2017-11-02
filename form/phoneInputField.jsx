import { MaskedInputField } from './index';
import BaseInput from './baseInput';

class PhoneInputField extends BaseInput {
	render() {
		return (
			<MaskedInputField {...this.props} />
		);
	}
}

PhoneInputField.propTypes = {
	className: PropTypes.string,
	mask: PropTypes.string,
};

PhoneInputField.defaultProps = {
	className: '',
	mask: ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
};

export default PhoneInputField;
