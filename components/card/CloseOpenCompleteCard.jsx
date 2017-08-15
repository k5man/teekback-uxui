import ToggleDisplay from 'react-toggle-display';
import BtnCard from './BtnCard';
import ACCard from './ACCard';

export const states = {
	CLOSED: 'CLOSED',
	OPEN: 'OPEN',
	COMPLETE: 'COMPLETE',
};

export default class CloseOpenCompleteCard extends React.Component {

	getData() {
		return this.props;
	}

	createOpen(props) {
		if (this.openProps) {
			props = this.openProps;
		}
		return (
			<div>
				<ACCard
					isVisible
					icon={props.descriptionIcon}
					title={props.descriptionTitle}
					preDisclaimer={props.descriptionText}
				/>
				<BtnCard
					icon={props.openIcon}
					title={props.openTitle}
					onClick={() => {
						this.props.SET_COMPONENT_STATE(states.COMPLETE);
					}}
				/>
			</div>
		);
	}

	createComplete(props) {
		return (<BtnCard
			icon={props.completeIcon}
			title={props.completeTitle}
			onClick={() => {
				this.props.SET_COMPONENT_STATE(states.CLOSED);
			}}
		/>);
	}

	createClosed(props) {
		return (<BtnCard
			icon={props.closedIcon}
			title={props.closedTitle}
			onClick={() => {
				this.props.SET_COMPONENT_STATE(states.OPEN);
			}}
		/>);
	}

	renderUI(componentState) {
		// console.log(`renderUI(${componentState})`);
		switch (componentState) {
			case states.OPEN:
				// console.log('states.OPEN:');
				return this.createOpen(this.props, this.getData());
			case states.COMPLETE:
				// console.log('states.COMPLETE:');
				return this.createComplete(this.props, this.getData());
			case states.CLOSED:
			default:
				// console.log('states.CLOSED:');
				return this.createClosed(this.props, this.getData());
		}
	}

	render() {
		return (
			<ToggleDisplay show={this.props.isVisible}>
				<div>
					{this.renderUI(this.props.componentState)}
				</div>
			</ToggleDisplay>
		);
	}
}

CloseOpenCompleteCard.propTypes = {
//	styles: PropTypes.object,
	componentState: PropTypes.string.isRequired,
	SET_COMPONENT_STATE: PropTypes.func.isRequired,
	// descriptionIcon: PropTypes.string,
	// descriptionTitle: PropTypes.string,
	// descriptionText: PropTypes.string,
//    state:
	isVisible: PropTypes.bool.isRequired,
};

CloseOpenCompleteCard.defaultProps = {
	styles: {},
	onComponentStateChange: undefined,
	// descriptionIcon: undefined,
	// descriptionTitle: undefined,
	// descriptionText: undefined,
};
