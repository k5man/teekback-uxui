import BaseComponent from '../../base/component';
import { CardActions } from '../../card';
import { RaisedButton, FlatButton } from '../../buttons';
import '../style.less';
import '../../assets/css/materialize.less';

export default class BlockGoodsItemSelectQuantity extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			selectedNum: props.selectedNum,
		};
	}

	onSelectChange(num) {
		this.setState({ selectedNum: num });
		this.props.CHANGE(num);
	}

	renderButtons(maxNum) {
		const rows = [];
		for (let i = 0; i < maxNum + 1; i++) {
			if (i === this.state.selectedNum) {
				rows.push(<FlatButton
					className={this.props.selectedClassname}
				>
					{i}
				</FlatButton>);
			} else {
				rows.push(<RaisedButton
					className={this.props.unselectedClassname}
					onClick={() => this.onSelectChange(i)}
				>
					{i}
				</RaisedButton>);
			}
		}
		return rows;
	}

	render() {
		return (
			<CardActions>
				{this.renderButtons(this.props.maxNum)}
			</CardActions>
		);
	}

}

BlockGoodsItemSelectQuantity.propTypes = {
	CHANGE: PropTypes.func.isRequired,
	selectedNum: PropTypes.string,
	maxNum: PropTypes.string,
	selectedClassname: PropTypes.string,
	unselectedClassname: PropTypes.string,
};

BlockGoodsItemSelectQuantity.defaultProps = {
	selectedNum: -1,
	maxNum: 4,
	selectedClassname: 'red',
	unselectedClassname: 'grey',
	CHANGE: () => {},
};
