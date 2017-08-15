import styles from './assets/css/styles.scss';

export default class BtnCard extends React.Component {
	render() {
		return (
			<div className={`${styles.slider} ${styles.cardPadding} ${this.props.className}`}>
				{this.props.images.map(x =>
					(
						<div>
							<img src={x.img} alt="" onTouchTap={() => {
								// Todo: implement smth here
							}}
							/>
						</div>
					)
				)}
			</div>
		);
	}
}

BtnCard.propTypes = {
	className: PropTypes.string,
	images: PropTypes.array,
//	onClickItem: PropTypes.func.isRequired,
};

BtnCard.defaultProps = {
	className: undefined,
	images: [],
};

