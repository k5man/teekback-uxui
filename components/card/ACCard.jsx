import ToggleDisplay from 'react-toggle-display';
import { Card, CardContent, CardHeader } from '../../card';
import Icon from '../../icons/icon';
import BtnPair from './btnPair';

/**
 * General wrapper card
 * v 1.0.1
 * style name fixes
 */
export default class ACCard extends React.Component {
	render() {
		const hasActions = (!this.props.noActions) && (this.props.primaryButton || this.props.secondaryButton);
		const hasHeader = !this.props.noHeader;
		const styles = {
			primaryButton: this.props.styles && this.props.styles.primaryButton,
			secondaryButton: this.props.styles && this.props.styles.secondaryButton,
			subtitle: this.props.styles && this.props.styles.subtitle,
		};
		return (
			<ToggleDisplay show={this.props.isVisible}>
				<Card
					className={this.props.className}
				>
					{hasHeader && <CardHeader>
						<span
							className={styles.title}
						>
							{this.props.icon &&
							<Icon
								name={this.props.icon}
								style={{ paddingRight: 8, verticalAlign: 'top' }}
							/>}
							{this.props.title}
						</span>
					</CardHeader>}
					{this.props.subtitle && <CardContent>
						<span className={styles.subtitle}>{this.props.subtitle}</span>
					</CardContent>}
					{this.props.preDisclaimer && <CardContent>
						<p>{this.props.preDisclaimer}</p>
					</CardContent>}
					{this.props.children}
					{this.props.postDisclaimer && <CardContent>
						<p>{this.props.postDisclaimer}</p>
					</CardContent>}
					{hasActions && <BtnPair
						styles={styles}
						primaryDisabled={this.props.primaryDisabled}
						primaryButton={this.props.primaryButton}
						secondaryButton={this.props.secondaryButton}
						secondaryDisabled={this.props.secondaryDisabled}
						CLICK_PRIMARY={this.props.CLICK_PRIMARY}
						CLICK_SECONDARY={this.props.CLICK_SECONDARY}
					/>}
				</Card>
			</ToggleDisplay>
		);
	}
}

ACCard.propTypes = {
	noHeader: PropTypes.bool,
	noActions: PropTypes.bool,
	styles: PropTypes.object,
	className: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	preDisclaimer: PropTypes.string,
	postDisclaimer: PropTypes.string,
	primaryDisabled: PropTypes.bool,
	primaryButton: PropTypes.string,
	secondaryButton: PropTypes.string,
	secondaryDisabled: PropTypes.bool,
	CLICK_PRIMARY: PropTypes.func,
	CLICK_SECONDARY: PropTypes.func,
//    state:
	isVisible: PropTypes.bool.isRequired,
};

ACCard.defaultProps = {
	styles: {},
	className: '',
	icon: undefined,
	title: undefined,
	subtitle: undefined,
	preDisclaimer: undefined,
	postDisclaimer: undefined,
	primaryDisabled: false,
	primaryButton: undefined,
	secondaryDisabled: false,
	secondaryButton: undefined,
	CLICK_PRIMARY: undefined,
	CLICK_SECONDARY: undefined,
	noHeader: false,
	noActions: false,
};
