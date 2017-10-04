import BaseComponent from '../../base/component';
import { FlatButton } from '../../buttons';
import './style.less';

export default class BonusCodeInput extends BaseComponent {

	render() {
		return (
			<div className={`bonus-block-small ${this.props.className}`}>
				<div className="bonus-block-small-counter">
					<h3>{this.props.counter}</h3>
				</div>
				<div>
					<FlatButton>{this.props.actiontext}</FlatButton>
				</div>
			</div>
		);
	}

}

BonusCodeInput.propTypes = {
	className: PropTypes.string,
	counter: PropTypes.number.isRequired,
	actiontext: PropTypes.string.isRequired,
};

BonusCodeInput.defaultProps = {
	className: '',
};
