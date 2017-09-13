import BaseComponent from '../../base/component';
import './style.less';

export default class HeaderBlock extends BaseComponent {

	imagePart() {
		if (!this.props.image) {
			return null;
		}
		return (<img
			src={this.props.image}
			className={`title-block__icon ${this.props.rounded ? 'title-block__icon-rounded' : ''} `}
			alt={this.props.title || this.props.subtitle || this.props.subtitleGray || ''}
		/>);
	}

	render() {
		return (
			<div className={`title-block ${this.props.className}`}>
				{this.imagePart()}
				<div className="title-block__text">
					{this.props.title && <h3 className="headline">{this.props.title}</h3>}
					{this.props.subtitle && <span className="subheading">{this.props.subtitle}</span>}
					{this.props.subtitleGray && <span className="subheading-gray">{this.props.subtitleGray}</span>}
				</div>
			</div>
		);
	}

}

HeaderBlock.propTypes = {
	className: PropTypes.string,
	image: PropTypes.any,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	subtitleGray: PropTypes.string,
	rounded: PropTypes.bool,
};

HeaderBlock.defaultProps = {
	className: '',
};
