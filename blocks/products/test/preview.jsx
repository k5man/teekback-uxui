import { Card } from '../../../card';
import { ProductSmall } from '../index';
import image from './g-3.png';

export default {
	title: 'Product Blocks',
	blocks: [
		{
			title: 'Minimal Product Block',
			text:
				`<ProductSmall
					image={image}
					name="Product name"
					description="Product short description"
				/>`,
			component: () => {
				return (
					<Card>
						<ProductSmall
							image={image}
							name="Product name"
							description="Product short description"
						/>
					</Card>
				);
			},
		},
	],
};

