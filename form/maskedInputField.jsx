import BaseInput from './baseInput';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'

export default class MaskedInputField extends BaseInput {

	constructor(props) {
		super(props);
		this.state = {
			isActive: false,
		};
	}

	onFocus() {
		this.setState({
			isActive: true,
		});
	}

	onBlur() {
		this.setState({
			isActive: false,
		});
	}

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		const isActive = this.state.isActive || (this.textInput && this.textInput.inputElement && !!this.textInput.inputElement.value);
		if (this.props.autoCorrectedDatePipe) {
			this.props.pipe = createAutoCorrectedDatePipe(this.props.autoCorrectedDatePipe);
		}
		return (
			<div className={`input-field ${this.props.className}`} >
				<MaskedInput
					onFocus={() => this.onFocus()}
					onBlur={() => this.onBlur()}
					ref={(input) => { this.textInput = input; }}
					className="materialize-textarea"
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} className={isActive ? 'active' : ''} >{this.props.label}</label> : null}
			</div>
		);
	}

}

MaskedInputField.propTypes = {
	className: PropTypes.string,
	mask: PropTypes.string.isRequired,
	guide: PropTypes.bool,
};

MaskedInputField.defaultProps = {
	className: '',
	guide: true,
};
