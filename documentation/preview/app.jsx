import './style.less';
<<<<<<< HEAD
import Buttons from '../../buttons/test/preview.jsx';
import { Card, CardHeader, CardActionHeader, CardIconHeader, CardBrandedHeader, CardContent, CardActions, CardImageHeader } from '../../card';
import { Button, RaisedButton, FlatButton, FloatingButton } from '../../buttons';
import { BlockImage, BlockGoodsItem, BlockGoodsItemSelectQuantity } from '../../blocks';
=======
import Buttons from '../../buttons/test/preview.js';
>>>>>>> origin/stage-2

const previews = [
	Buttons,
];

class App extends React.Component {

<<<<<<< HEAD
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h6>Image on the top of the card</h6>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<BlockImage  src={g1} className={`element-top`}>
							</BlockImage>
							<CardContent>
							</CardContent>
						</Card>

						</div>
						<div className="articleBlockRight">
						</div>
					</div>

					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h6>Image at the bottom of the card</h6>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<CardContent>
							</CardContent>
							<BlockImage  src={g1} className={`element-bottom`}>
							</BlockImage>
						</Card>
=======
	componentDidMount() {
		$(document).ready(function(){
			$('.collapsible').collapsible();
			$('.scrollspy').scrollSpy();
		});
	}
>>>>>>> origin/stage-2

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
<<<<<<< HEAD
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h6>Product</h6>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<BlockGoodsItem 
								productimage={productImage}
								producttitle={productTitle}
								productsubtitle={productSubTitle}
								>
							</BlockGoodsItem>
						</Card>

						</div>
						<div className="articleBlockRight">
						</div>
					</div>

					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h6>Product with Quantity Selector</h6>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<BlockGoodsItemSelectQuantity 
								productimage={productImage}
								producttitle={productTitle}
								productsubtitle={productSubTitle}
								productprice={productPrice}
								className={`block-image-bottom`}
								>
							</BlockGoodsItemSelectQuantity>
						</Card>

						</div>
						<div className="articleBlockRight">
						</div>
=======
					<div className="previewCode">
						<pre>
							<code className="language-markup">{block.text}</code>
						</pre>
>>>>>>> origin/stage-2
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
