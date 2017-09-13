import '../../assets/css/materialize.less';
import './style.less';
import Buttons from '../../buttons/test/preview.js';

const previews = [
	Buttons,
];

class App extends React.Component {

	componentDidMount() {
		$(document).ready(function(){
			$('.collapsible').collapsible();
			$('.scrollspy').scrollSpy();
		});
	}

	static submenu(blocks) {
		return (
			<div className="collapsible-body">
				<ul>
					{blocks.map(item => {
						return (
							<li><a href={`#${item.title}`}>{`${item.title}`}</a></li>
						);
					})}
				</ul>
			</div>
		);
	}

	static drawBlock(block) {
		return (
			<div id={block.title} className="previewBlocks scrollspy">
				<h4>{block.title}</h4>
				<div className="previewBlock">
					<div className="previewExample">
						{block.component()}
					</div>
					<div className="previewCode">
						<pre>
							<code className="language-markup">{block.text}</code>
						</pre>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="previewContainer">
				<ul className="previewNavigation side-nav fixed">
					<li>
						<ul className="collapsible collapsible-accordion table-of-contents">
							{previews.map(item => {
								return (
									<li className="bold">
										<a href={`#${item.title}`} className="collapsible-header waves-effect waves-teal">{item.title}</a>
										{item.blocks && App.submenu(item.blocks)}
									</li>
								)
							})}
						</ul>
					</li>
				</ul>
				<main className="previewContent">
					{previews.map(item => {
						return (
							<div className="previewBlocksWrap" id={item.title}>
								<h2>{item.title}</h2>
								{item.blocks && item.blocks.map(App.drawBlock)}
							</div>
						)
					})}
				</main>
			</div>
		);
	}
}

export default App;
