import BaseComponent from '../../base/component';
import './style.less';

export default class Snackbar extends BaseComponent {

	render() {
		return (
			<div className={`snackbar ${this.props.className}`}>

			</div>
		);
	}

}

Snackbar.propTypes = {
	className: PropTypes.string,
	message: PropTypes.string,
	rounded: PropTypes.bool,
};

Snackbar.defaultProps = {
	className: '',
};
