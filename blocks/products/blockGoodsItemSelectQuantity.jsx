import BaseComponent from '../../base/component';
import { SelectField, InputField } from '../../form';
import './style.less';
import '../../assets/css/materialize.less';

export default class BlockGoodsItemSelectQuantity extends BaseComponent {

	render() {
		return (
			<div className={`block-goods ${this.props.className}`}>
				<div className={`product-with-qs ${this.props.className}`}>
					<img src={this.props.productimage} alt={this.props.producttitle} className="product-image " />
					<span>{`${this.props.producttitle}`}</span>
					<p className="subheading-gray">
						{`${this.props.productsubtitle}`}
					</p>
					<p className="subheading-gray">
						{`${this.props.productprice}`}
					</p>
				</div>
				<div className="divider" />
				<div className={`block-base `}>
					<InputField label="Label" placeholder="Placeholder" />
					<SelectField label="Label" placeholder="Placeholder" />
				</div>
			</div>
		);
	}

}

BlockGoodsItemSelectQuantity.propTypes = {
	productimage: PropTypes.string.isRequired,
	producttitle: PropTypes.string,
	productsubtitle: PropTypes.string,
	productprice: PropTypes.string,
};

BlockGoodsItemSelectQuantity.defaultProps = {
	productimage: '',
	producttitle: '',
	productsubtitle: '',
	productprice: '',
};
