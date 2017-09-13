import BaseComponent from '../base/component';
import './style.less';
import imgApplogo from './icon-logo.png';

export default class CardBrandedHeader extends BaseComponent {

	render() {
		return (
			<div className={`card-branded-header ${this.props.className}`}>
				<img src={this.props.icon} className="card-icon " alt="" />
				<span className="subheading">{`${this.props.title}`}</span>
				<p className="subheading-gray">
					{`${this.props.subtitle}`}
				</p>
			</div>
		);
	}

}

CardBrandedHeader.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

CardBrandedHeader.defaultProps = {
	icon: imgApplogo,
	title: 'Title',
	subtitle: 'Subtitle',
};
