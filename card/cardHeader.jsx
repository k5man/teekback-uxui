import BaseComponent from '../base/component';
import './style.less';

export default class CardHeader extends BaseComponent {

	render() {
		return (
			<div className={`card-header ${this.props.className}`}>
				<span className="card-title">{`${this.props.title}`}</span>
				<p>
					{`${this.props.subtitle}`}
				</p>
			</div>
		);
	}

}

CardHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

CardHeader.defaultProps = {
	title: 'Title',
	subtitle: 'Subtitle',
};
