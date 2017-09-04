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
				<div className="appWrapper" >
					<div className="appBlock">

						<h3>Card</h3>

						<h4>Closed View</h4>
						<Card>
							<CardActionHeader>
							</CardActionHeader>
						</Card>

						<h4>Openned View</h4>
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

						<h4>Header</h4>
						<Card>
							<CardHeader>
							</CardHeader>
							<CardContent>
							</CardContent>
						</Card>
						
						<h4>Action Header</h4>
						<Card>
							<CardActionHeader>
							</CardActionHeader>
							<CardContent>
							</CardContent>
						</Card>
						
						<h4>Icon Header</h4>
						<Card>
							<CardIconHeader>
							</CardIconHeader>
							<CardContent>
							</CardContent>
						</Card>
						
						<h4>Branded Header</h4>
						<Card>
							<CardBrandedHeader>
							</CardBrandedHeader>
							<CardContent>
							</CardContent>
						</Card>
						
						<br />
						<hr />

						<h3>Elemenents</h3>

						<h4>Typography</h4>
						<Card>
							<CardContent>
								<h1>Header 1</h1>
								<h2>Header 2</h2>
								<h3>Header 3</h3>
								<h4>Header 4</h4>
								<h5>Header 5</h5>
								<h6>Header 6</h6>
								<p>
									Text content. Plain text. Regular information.
								</p>
							</CardContent>
						</Card>

						<h4>Imagery</h4>

						<h5>Image in the middle of the card</h5>
						<Card>
							<CardContent>
							</CardContent>
							<BlockImage src={g2}>
							</BlockImage>
							<CardContent>
							</CardContent>
						</Card>

						<h5>Image on the top of the card</h5>

				!!!<img src={g2} />!!!

						<Card>
							<BlockImage className={`block-image-top`}>
							</BlockImage>
							<CardContent>
							</CardContent>
						</Card>
			
						<h5>Image at the bottom of the card</h5>
						<Card>
							<CardContent>
							</CardContent>
							<BlockImage className={`block-image-bottom`}>
							</BlockImage>
						</Card>
			
						<br />
						<hr />

						<h3>Buttons</h3>
						<Buttons /><br/><br/><br/>

						<Card>
							<CardContent>
							</CardContent>
							<CardActions>
								<RaisedButton>RaisedButton</RaisedButton>
								<FlatButton>FlatButton</FlatButton>
							</CardActions>
						</Card>

					</div>
				</div>
			</div>
		);
	}
}

export default App;
