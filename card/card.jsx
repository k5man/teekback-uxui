import BaseComponent from '../base/component';
import './style.less';

export default class Card extends BaseComponent {

	render() {
		return (
			<div className={`card ${this.getClassName()}`} {...this.getCustomProps()}>
				{this.props.children}
			</div>
		);
	}

}

Card.propTypes = {
	className: PropTypes.string,
};

Card.defaultProps = {
	className: '',
};

