import { Card, CardContent } from '../../../card';
import { BlockImage } from '../index';
import image from './g-1.jpg';

export default {
	title: 'Image Blocks',
	blocks: [
		{
			title: 'Wide Image Block',
			text:
				`<BlockImage
			image={image}
			description="Some image"
/>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							Some content
						</CardContent>
						<BlockImage
							image={image}
							description="Some image"
						/>
						<CardContent>
							Some content
						</CardContent>
					</Card>
				);
			},
		},
	],
};

