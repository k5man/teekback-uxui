import BaseComponent from '../../base/component';
import '../style.less';

export default class BlockGoodsItem extends BaseComponent {

	render() {
		return (
			<div className={`block-goods ${this.props.className}`}>
				<div className={`product-1 ${this.props.className}`}>
					<img src={this.props.image} alt={this.props.title} className="product-image " />
					<p className="subheading-gray">{`${this.props.title}`}</p>
					{this.props.subtitle && <p className="subheading-gray">{`${this.props.subtitle}`}</p>}
					<p className="subheading-gray">{`${this.props.price}`}</p>
				</div>
			</div>
		);
	}

}

BlockGoodsItem.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	price: PropTypes.string,
};

BlockGoodsItem.defaultProps = {
	image: '',
	title: '',
	subtitle: '',
	price: '',
};
