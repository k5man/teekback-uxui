import BaseComponent from '../base/component';
import './style.less';

export default class AvatarItem extends BaseComponent {

	render() {
		return (
			<li className={`collection-item avatar ${this.props.className}`}>
				<img src={this.props.image} alt="" className="circle" />
				{ this.props.title && <span className="title">{this.props.title}</span> }
				{ this.props.description && <p>{this.props.description}</p> }
				<span className="secondary-content">{this.props.secondaryContent}</span>
			</li>
		);
	}

}

AvatarItem.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.any.isRequired,
	secondaryContent: PropTypes.element,
};

AvatarItem.defaultProps = {
	className: '',
	title: '',
	description: '',
	secondaryContent: <span />,
};
