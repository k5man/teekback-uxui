import Buttons from '../../buttons/test/preview.jsx';
import '../../assets/css/materialize.less';
import './style.less';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="appWrapper" >
					<div className="appBlock">
						<Buttons />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
