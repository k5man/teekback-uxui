import BaseComponent from '../base/component';
import './style.less';

export default class CardActionHeader extends BaseComponent {

	render() {
		return (
			<div className={`card-action-header ${this.props.className}`}>
				<span className="card-title">{`${this.props.title}`}</span>
				<p>
					{`${this.props.subtitle}`}
				</p>
			</div>
		);
	}

}

CardActionHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

CardActionHeader.defaultProps = {
	title: 'Title',
	subtitle: 'Subtitle',
};
