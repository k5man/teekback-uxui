import { CardContent } from 'teekback-uxui/card';
import Card2Sides from 'teekback-uxui/card/card2Sides';

import styles from './assets/css/styles.scss';

export default class TwoItems extends React.Component {
	render() {
		return (
			<CardContent className={`${styles.box} ${styles.height55}`}>
				<Card2Sides
					left={<div className={styles.txtleft}>
						<span >{this.props.left}</span>
					</div>}
					right={<div className={styles.txtright}>
						<span >{this.props.right}</span>
					</div>}
				/>
			</CardContent>
		);
	}
}

TwoItems.propTypes = {
	left: PropTypes.string.isRequired,
	right: PropTypes.string.isRequired,
};

TwoItems.defaultProps = {

};
