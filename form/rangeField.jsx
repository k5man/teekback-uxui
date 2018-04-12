import BaseInput from './baseInput';


export default class IncrimentField extends BaseInput {
			  
	render() {
		function updateTextInput(val) {
		          document.getElementById('textInput').value='1'; 
		        }
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		console.log('PROPS: ',this.props);
		return (
			<p class="range-field">
				<input type="range" id='rangeInput' min="0" max="100" />
			</p>
		);
	}

}

// <p className={`checkbox-field ${this.props.className}`} >
// 	<input
// 		type="checkbox"
// 		{...this.getCustomProps()}
// 	/>
// 	{this.props.label ? <label htmlFor={this.props.id}>{this.props.label}</label> : null}
// </p>
