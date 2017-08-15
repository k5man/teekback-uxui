import { Card } from '../../card';
// import FullsizeButton from 'teekback-uxui/buttons/fullsize';
// import Icon from 'teekback-uxui/icons/icon';
import IconButton from './IconButton';
import styles from './assets/css/styles.scss';

export default class BtnCard extends React.Component {
	render() {
		return (
			<Card className={`${styles.cardPadding} ${this.props.className}`}>
				<IconButton
					className={this.props.fullsizeButtonClassName}
					onClick={() => {
						this.props.onClick();
					}}
					icon={this.props.icon}
					title={this.props.title}
				/>
			</Card>
		);
	}
}

BtnCard.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	fullsizeButtonClassName: PropTypes.string,
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

BtnCard.defaultProps = {
	title: undefined,
	className: undefined,
	fullsizeButtonClassName: undefined,
	icon: undefined,
};
