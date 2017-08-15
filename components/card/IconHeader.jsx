import Card2Sides from 'teekback-uxui/card/card2Sides';
import { CardContent } from 'teekback-uxui/card';

import styles from './assets/css/styles.scss';

export default class appIconTitle extends React.Component {
	render() {
		return (
			<CardContent className={`${styles.box} ${styles.height80}`}>
				<Card2Sides
					left={<img className={styles.imgleft} src={this.props.imgIcon} alt="" />}
					right={<div className={styles.txtright}>
						<span className={styles.title}>{this.props.title}</span>
						<span className={styles.subtitle}>{this.props.subtitle}</span>
					</div>}
				/>
			</CardContent>
		);
	}
}

appIconTitle.propTypes = {
	imgIcon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

appIconTitle.defaultProps = {

};
