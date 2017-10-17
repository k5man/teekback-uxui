import BaseInput from './baseInput';

export default class TextArea extends BaseInput {

	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		return (
			<div className={` ${this.props.className}`} >
				<textarea
					{...this.getCustomProps()}
				/>
				{this.props.label ? <label htmlFor={this.props.id} className="active" >{this.props.label}</label> : null}
			</div>
		);
	}

}
