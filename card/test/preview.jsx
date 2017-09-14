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
			New text paragraph!
			a distinct section of a piece of writing, usually dealing with a single theme and indicated by
		</p>
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
						<p>
							New text paragraph!
							a distinct section of a piece of writing, usually dealing with a single theme and indicated by
						</p>
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

