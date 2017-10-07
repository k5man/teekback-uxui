import BaseInput from './baseInput';
import InputMask from 'react-input-mask';

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
		const isActive = this.state.isActive || (this.textInput && !!this.textInput.value);
		return (
			<div className={`input-field ${this.props.className}`} >
				<InputMask
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
};

MaskedInputField.defaultProps = {
	className: '',
};
