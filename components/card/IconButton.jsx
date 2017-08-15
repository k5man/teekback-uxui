import FullsizeButton from '../../buttons/fullsize';
import Icon from '../../icons/icon';

import styles from './assets/css/styles.scss';

export default class IconButton extends React.Component {
	renderFont() {
		return (
			<FullsizeButton
				className={`${styles.cardPadding} ${this.props.className}`}
				onClick={() => {
					this.props.onClick();
				}}
			>
				{<Icon name={this.props.icon} className={`${styles.icon} ${this.props.iconClassName}`} />}
				{this.props.title}
				{this.props.children}
			</FullsizeButton>
		);
	}

	renderSVG() {
		return (
			<FullsizeButton
				className={`${styles.cardPadding} ${this.props.className}`}
				onClick={() => {
					this.props.onClick();
				}}
			>
				<div className={styles.svgWrap}>
					<div className={styles.svgIcon}>
						{this.props.icon}
					</div>
					<div className={styles.svgIconText} >
						{this.props.title}
						{this.props.children}
					</div>
				</div>
			</FullsizeButton>
		);
	}

	render() {
		if (this.props.icon !== undefined) {
			if (typeof (this.props.icon) === 'string') {
				return this.renderFont();
			}
			return this.renderSVG();
		}
		return (
			<FullsizeButton
				className={`${styles.cardPadding} ${this.props.className}`}
				onClick={() => {
					this.props.onClick();
				}}
			>
				{this.props.title}
				{this.props.children}
			</FullsizeButton>
		);
	}
}

IconButton.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	icon: PropTypes.object,
	iconClassName: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
	title: undefined,
	className: '',
	icon: undefined,
	iconClassName: '',
};
