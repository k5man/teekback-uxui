import BaseComponent from '../../base/component';
import { FlatButton, RaisedButton } from '../../buttons';
import './style.less';
import '../../assets/css/materialize.less';

/**
 * BlockGoodsItemSelectQuantity
 *
 * 0.1.0
 */
export default class BlockGoodsItemSelectQuantity extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			current: isNaN(this.props.current) ? 0 : this.props.current,
		};
	}

	setValue(newValue) {
		this.setState({current: newValue});
		this.props.onChange(newValue);
	}

	renderButtons(totalBtns, curValue, selectedClass, unselectedClass) {
		const r = [];
		for (let i = 0; i < totalBtns; i++) {
			if (i <= curValue) {
				r.push(<RaisedButton className={selectedClass} onClick={() => (this.setValue(i))}>{i}</RaisedButton>);
			} else {
				r.push(<FlatButton className={unselectedClass} onClick={() => (this.setValue(i))}>{i}</FlatButton>);
			}
		}
		return r;
	}

	render() {
		return (
			<div className={`block-goods ${this.props.className}`}>
				{this.renderButtons(this.props.max, this.state.current, this.props.selectedClass, this.props.unselectedClass)}
			</div>
		);
	}

}

BlockGoodsItemSelectQuantity.propTypes = {
	onChange: PropTypes.function,
	max: PropTypes.number,
	current: PropTypes.number,
	selectedClass: PropTypes.string,
	unselectedClass: PropTypes.string,
};

BlockGoodsItemSelectQuantity.defaultProps = {
	onChange: () => {},
	max: 4,
	current: 0,
	selectedClass: '',
	unselectedClass: '',
};

/**
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
 */
