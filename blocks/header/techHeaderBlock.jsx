import BaseComponent from '../../base/component';
import { CardHeader } from '../../card';
import { Icon } from '../../icons';
import './style.less';

export default class TechHeaderBlock extends BaseComponent {

	render() {
		return (
			<CardHeader className={this.props.className}>
				<div>
					<p className="tech-header-block"><Icon className="tech-header-block-icon" name={this.props.icon} />{this.props.title}</p>
				</div>
			</CardHeader>
		);
	}

}

TechHeaderBlock.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string,
};

TechHeaderBlock.defaultProps = {
	icon: '',
	title: '',
};
