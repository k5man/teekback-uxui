import { CardActions } from 'teekback-uxui/card';
import RaisedButton from 'teekback-uxui/buttons/flat';

export default class btnPair extends React.Component {
	render() {
		return (
			<CardActions>
				<RaisedButton
					disabled={this.props.primaryDisabled}
					className={this.props.styles.primaryButton}
					onClick={() => {
						this.props.CLICK_PRIMARY();
					}}
				>
					{this.props.primaryButton}
				</RaisedButton>
				<RaisedButton
					disabled={this.props.secondaryDisabled}
					className={this.props.styles.secondaryButton}
					onClick={() => {
						this.props.CLICK_SECONDARY();
					}}
				>
					{this.props.secondaryButton}
				</RaisedButton>
			</CardActions>
		);
	}
}

btnPair.propTypes = {
	primaryDisabled: PropTypes.bool,
	primaryButton: PropTypes.string,
	secondaryButton: PropTypes.string,
	secondaryDisabled: PropTypes.bool,
	CLICK_PRIMARY: PropTypes.func,
	CLICK_SECONDARY: PropTypes.func,
	styles: PropTypes.object,
};

btnPair.defaultProps = {
	styles: {},
	primaryDisabled: false,
	primaryButton: undefined,
	secondaryDisabled: false,
	secondaryButton: undefined,
	CLICK_PRIMARY: undefined,
	CLICK_SECONDARY: undefined,
};
