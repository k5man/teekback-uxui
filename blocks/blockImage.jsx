import BaseComponent from '../base/component';
import './style.less';

export default class BlockImage extends BaseComponent {

	render() {
		return (
			<div className={`block-image ${this.props.className}`}>
				<img src={this.props.src} alt={this.props.description} className={`${this.props.className}`} />
			</div>
		);
	}

}

BlockImage.propTypes = {
	src: PropTypes.string.isRequired,
	description: PropTypes.string,
};

BlockImage.defaultProps = {
	src: 'https://storage.googleapis.com/material-design/publish/material_v_11/assets/0B6Okdz75tqQsQjV4OFI1cGRsUTQ/style_imagery_integration_text5.png',
	description: 'Image Description',
};
