import BaseInput from './baseInput';

export default class InputField extends BaseInput {

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
		return (
			<div className={`input-field ${this.props.className}`} >
				<input
					onFocus={() => this.onFocus()}
					onBlur={() => this.onBlur()}
					className="materialize-textarea"
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} className={this.state.isActive ? 'active' : ''} >{this.props.label}</label> : null}
			</div>
		);
	}

}
