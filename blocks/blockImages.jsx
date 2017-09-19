import BaseComponent from '../base/component';
import './style.less';

/**
 *
 * BlockImages
 *
 * v 0.1.0
 */
export default class BlockImages extends BaseComponent {

	render() {
		return (
			<div className={`block-image ${this.props.className}`}>
				{this.props.images.map((x) => (
					<img src={x.img} alt="" />
				))}
			</div>
		);
	}

}

BlockImages.propTypes = {
	src: PropTypes.string.isRequired,
	description: PropTypes.string,
};

BlockImages.defaultProps = {
	src: 'https://storage.googleapis.com/material-design/publish/material_v_11/assets/0B6Okdz75tqQsQjV4OFI1cGRsUTQ/style_imagery_integration_text5.png',
	description: 'Image Description',
};
