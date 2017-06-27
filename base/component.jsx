/*eslint-disable */
export default class BaseComponent extends React.Component {

	getCustomProps() {
		return Object.keys(this.props).reduce((result, propName) => {
			const excludedNames = ['className', 'children'];
			if (excludedNames.indexOf(propName) < 0) {
				result[propName] = this.props[propName];
			}
			return result;
		}, {});
	}

	render() {
		throw new Error('Render method must be defined.');
	}

}

BaseComponent.propTypes = {
	className: PropTypes.string,
};

BaseComponent.defaultProps = {
	className: '',
};
/*eslint-enable */
