import BaseInput from './BaseInput.jsx';

export default class InputField extends BaseInput {

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		return (
			<div className={`input-field ${this.props.className}`} >
				<input
					{...this.getCustomProps()}
					className="validate"
				/>
				{this.props.label ? <label for={this.props.id}>{this.props.label}</label> : null}
			</div>
		);
	}

}
