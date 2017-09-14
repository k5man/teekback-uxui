import '../../assets/css/materialize.less';
import './style.less';
import Buttons from '../../buttons/test/preview';
import Cards from '../../card/test/preview';
import TitlesBlocks from '../../blocks/titles-block/test/preview';
import Forms from '../../form/test/preview';
import Icons from '../../icons/test/preview';

const previews = [
	Buttons,
	Forms,
	Icons,
	Cards,
	TitlesBlocks,
];

class App extends React.Component {

	static submenu(blocks) {
		return (
			<div className="inner">
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

	componentDidMount() {
		$(document).ready(() => {
			// $('.collapsible').collapsible();
			$('.scrollspy').scrollSpy();
		});
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
										<a href={`#${item.title}`} className="collapsible-header waves-effect waves-teal">
											{item.title}
										</a>
										{item.blocks && App.submenu(item.blocks)}
									</li>
								);
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
						);
					})}
				</main>
			</div>
		);
	}

}

export default App;
