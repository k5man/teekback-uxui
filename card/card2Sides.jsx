import BaseComponent from '../base/component';

export default class Card2Sides extends BaseComponent {
	render() {
		return (
			<div className="helper-rTable">
				<div className="helper-rTableRow">
					<div className="helper-rTableCellL">
						{this.props.left}
					</div>
					<div className="helper-rTableCell">
						{this.props.right}
					</div>
				</div>
			</div>
		);
	}
}
