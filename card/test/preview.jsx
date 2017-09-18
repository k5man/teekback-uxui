import { Card, CardHeader, CardContent, CardActions, CardImage } from '../index';
import image from './img.png';

export default {
	title: 'Card',
	blocks: [
		{
			title: 'Card Example',
			text:
`<Card>
	<CardHeader>
		Header
	</CardHeader>
	<CardImage src={image} title="Title test" />
	<CardContent>
		<h2>Header h2</h2>
		<h3>Header h3</h3>
		<h4>Header h4</h4>
		<p>
			Ill be in your neighborhood doing errands this weekend if you want to meet up for bunch. Let me know.
		</p>
		<p>
			And little bit more...
		</p>
		<hr />
		<p>
			Some text for test card section.
		</p>
		<hr />
			Some text for test card section. Again.
	</CardContent>
	<CardActions>
		<a href="">Link 1</a>
		<a href="">Link 2</a>
	</CardActions>
</Card>`,
			component: () => {
				return (<Card>
					<CardHeader>
						Header
					</CardHeader>
					<CardImage src={image} title="Title test" />
					<CardContent>
						<h2>Header h2</h2>
						<h3>Header h3</h3>
						<h4>Header h4</h4>
						<h5>Header h5</h5>
						<h6>Header h6</h6>
						<p>
							Ill be in your neighborhood doing errands this weekend if you want to meet up for bunch. Let me know.
						</p>
						<p>
							And little bit more...
						</p>
						<hr />
						<p>
							Some text for test card section.
						</p>
						<hr />
							Some text for test card section. Again.
					</CardContent>
					<CardActions>
						<a href="">Link 1</a>
						<a href="">Link 2</a>
					</CardActions>
				</Card>);
			},
		},

	],
};

