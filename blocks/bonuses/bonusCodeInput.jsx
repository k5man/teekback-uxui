import BaseComponent from '../../base/component';
import './style.less';

export default class BonusCodeInput extends BaseComponent {

	render() {
		return (
			<div className={`product-block-small ${this.props.className}`}>
				<div className="product-block__text">
					{this.props.buttontext && <p className="title">{this.props.buttontext}</p>}
				</div>
			</div>
		);
	}

}

BonusCodeInput.propTypes = {
	className: PropTypes.string,
	buttonText: PropTypes.string,
};

BonusCodeInput.defaultProps = {
	className: '',
	buttonText: 'Enter the Code',
};
