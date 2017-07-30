import Button from './button';

export default class FullsizeButton extends Button {

	getType() {
		return 'btn-fullsize';
	}

	render() {
		const props = this.props;
		props.className = this.createClassName(props);
		return <div className={props.className}>
			{props.children}
			{/*eslint-disable*/}
			<a href="#" onClick={() => { this.props.onClick(); }}>
				<span className="btn-fullsize-hyperspan">&nbsp;</span>
			</a>
			{/*eslint-enable */}
		</div>

		// return React.createElement(
		// 	props.element,
		// 	props,
		// 	props.children
		// );
	}
}
