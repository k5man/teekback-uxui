import BaseComponent from '../base/component';
import './style.less';

export default class Card extends BaseComponent {

	render() {
		return (
			<div className={`card ${this.props.className}`} {...this.getCustomProps()}>
				{this.props.children}
			</div>
		);
	}

}

Card.propTypes = {
};

Card.defaultProps = {
};
