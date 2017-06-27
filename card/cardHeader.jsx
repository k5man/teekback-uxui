import BaseComponent from '../base/component';

export default class HeadBar extends BaseComponent {

	render() {
		return (
			<div className={`card-header ${this.props.className}`}>
				{this.props.children}
			</div>
		);
	}

}
