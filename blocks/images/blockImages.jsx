import BaseComponent from '../../base/component';
import './style.less';

/**
 *
 * BlockImages
 *
 * v 0.1.0
 */
export default class BlockImages extends BaseComponent {

	renderImages() {
		let idx = 0;
		const r = this.props.images.map((x) => (
			<img src={x.img} alt="" key={idx++} />
		));
		return r;
	}

	render() {
		return (
			<div className={`block-image ${this.props.className}`}>
				{this.renderImages()}
			</div>
		);
	}

}

BlockImages.propTypes = {
	images: PropTypes.array.isRequired,
};

BlockImages.defaultProps = {
	images: [],
};
