import '../../assets/css/materialize.less';
import './style.less';
import Buttons from '../../buttons/test/preview.jsx';
import { Card, CardHeader, CardActionHeader, CardIconHeader, CardBrandedHeader, CardContent, CardActions } from '../../card';
import { Button, RaisedButton, FlatButton, FloatingButton } from '../../buttons';
import { BlockImage } from '../../blocks';

import g1 from '../../assets/images/icon-logo.png';
import g2 from '../../assets/images/g-1.jpg';

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="pageWrapper" >
			
					<div className="chapterHeader">
						<h3 className="chapterTitle">Card</h3>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Closed View</h5>
						</div>
						<div className="articleBlockCenter">

							<Card>
								<CardActionHeader>
								</CardActionHeader>
							</Card>

						</div>

						<div className="articleBlockRight">
							Info
						</div>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Openned View</h5>
						</div>
						<div className="articleBlockCenter">

							<Card>
								<CardActionHeader>
								</CardActionHeader>
								<CardContent>
									Some Content
								</CardContent>
								<CardActions>
									<RaisedButton>RaisedButton</RaisedButton>
									<FlatButton>FlatButton</FlatButton>
								</CardActions>
							</Card>

						</div>
						<div className="articleBlockRight">
						</div>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Header</h5>
						</div>
						<div className="articleBlockCenter">

							<Card>
								<CardHeader>
								</CardHeader>
								<CardContent>
								</CardContent>
							</Card>
						
						</div>
						<div className="articleBlockRight">
						</div>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Action Header</h5>
						</div>
						<div className="articleBlockCenter">

							<Card>
								<CardActionHeader>
								</CardActionHeader>
								<CardContent>
								</CardContent>
							</Card>
						
						</div>
						<div className="articleBlockRight">
						</div>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Icon Header</h5>
						</div>
						<div className="articleBlockCenter">

							<Card>
								<CardIconHeader>
								</CardIconHeader>
								<CardContent>
								</CardContent>
							</Card>
						
						</div>
						<div className="articleBlockRight">
						</div>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Branded Header</h5>
						</div>
						<div className="articleBlockCenter">

							<Card>
								<CardBrandedHeader>
								</CardBrandedHeader>
								<CardContent>
								</CardContent>
							</Card>

						</div>
						<div className="articleBlockRight">
						</div>
					</div>
			
					<div className="chapterHeader">
						<h4 className="chapterTitle">Elemenents</h4>
					</div>
			
					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h5>Typography</h5>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<CardContent>
								<p className="display3">Display 3</p><br/>
								<p className="display2">Display 2</p><br/>
								<p className="display1">Display 1</p><br/>
								<p className="headline">Headline</p><br/>
								<p className="title">Title</p><br/>
								<p className="subheading">Subheading</p><br/>
								<p className="subheading-gray">Subheading Gray</p><br/>
								<p className="body-2">Body 2</p><br/>
								<p className="body-1">Body 1</p><br/>
								<p className="caption">Caption</p><br/>
								<p className="button">Button</p><br/>
							</CardContent>
						</Card>

						</div>
						<div className="articleBlockRight">
							Type Styles
						</div>
					</div>

					<div className="chapterHeader">
						<h5>Imagery</h5>
					</div>

					<div className="articleBlock">
						<div className="articleBlockLeft">
							<h6>Image in the middle of the card</h6>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<CardContent>
							</CardContent>
							<BlockImage src={g2}>
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
							<h6>Image on the top of the card</h6>
						</div>
						<div className="articleBlockCenter">

						<Card>
							<BlockImage className={`block-image-top`}>
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
							<BlockImage className={`block-image-bottom`}>
							</BlockImage>
						</Card>

						</div>
						<div className="articleBlockRight">
						</div>
					</div>
			
				</div>
			</div>
		);
	}
}

export default App;
