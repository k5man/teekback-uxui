import BaseComponent from '../../base/component';
import './style.less';

export default class TextHeaderBlock extends BaseComponent {

	render() {
		return (
			<div className={`title-block ${this.props.className}`}>
				<div className="title-block__text">
					{this.props.title && <h3 className="headline">{this.props.title}</h3>}
					{this.props.subtitle && <span className="subheading">{this.props.subtitle}</span>}
				</div>
			</div>
		);
	}

}

TextHeaderBlock.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
};

TextHeaderBlock.defaultProps = {
	className: '',
};
