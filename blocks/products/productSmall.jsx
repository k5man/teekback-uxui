import BaseComponent from '../../base/component';
import './style.less';

export default class ProductSmallBlock extends BaseComponent {

	imagePart() {
		if (!this.props.image) {
			return null;
		}
		return (<img
			src={this.props.image}
			className="product-block__image"
			alt={this.props.name || this.props.description || ''}
		/>);
	}

	render() {
		return (
			<div className={`product-block-small ${this.props.className}`}>
				{this.imagePart()}
				<div className="product-block__text">
					{this.props.name && <p className="subheading">{this.props.name}</p>}
					{this.props.price && <p className="subheading-gray">{this.props.price}</p>}
				</div>
			</div>
		);
	}

}

ProductSmallBlock.propTypes = {
	className: PropTypes.string,
	image: PropTypes.any,
	name: PropTypes.string,
	description: PropTypes.string,
};

ProductSmallBlock.defaultProps = {
	className: '',
};
