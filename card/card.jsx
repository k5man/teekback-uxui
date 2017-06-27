import BaseComponent from '../base/component';

export default class HeadBar extends BaseComponent {

	render() {
		return (
			<div className={`card ${this.props.className}`} {...this.getCustomProps()}>
				{this.props.children}
			</div>
		);
	}

}
