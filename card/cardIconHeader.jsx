import BaseComponent from '../base/component';
import './style.less';
import imgApplogo from './icon-logo.png';

export default class CardIconHeader extends BaseComponent {

	render() {
		return (
			<div className={`card-icon-header ${this.props.className}`}>
				<img src={imgApplogo} className="card-icon " alt="" />
				<span className="card-title">{`${this.props.title}`}</span>
				<p>
					{`${this.props.subtitle}`}
				</p>
			</div>
		);
	}

}

CardIconHeader.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

CardIconHeader.defaultProps = {
	icon: './icon-logo.png',
	title: 'Title',
	subtitle: 'Subtitle',
};
