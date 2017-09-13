import BaseInput from './BaseInput.jsx';

export default class SelectField extends BaseInput {
	constructor(props) {
	    super(props);
	    this.state = {value: 'coconut'};

	    this.handleChange = this.handleChange.bind(this);
	  }

   handleChange(event) {
     this.setState({value: event.target.value});
   }
	
	render() {
		if (!this.props.id) {
			this.props.id = (Date.now() + Math.random()).toString(25).replace('.', '');
		}
		this.props.type = this.props.type ? this.props.type : 'text';
		return (
			<div class="input-field">
				<label className="active">Quantity</label>
				<div className="select-field ">
					<span class="caret">▼</span>
			      <input type="text" class="select-dropdown" readonly="true" data-activates="select-options-111" value="1"/>
				</div>
				<div className="select-dropdown ">
					<ul id="select-options-111" >
						<li class=""><span>1</span></li>
						<li class=""><span>2</span></li>
						<li class="active"><span>3</span></li>
					</ul>
				</div>
			</div>
		);
	}

}
