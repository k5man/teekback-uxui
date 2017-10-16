import { Card, CardContent } from '../../../card';
import { ProductSmall, ProductRegular, BlockGoodsItemSelectQuantity } from '../index';
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
		{
			title: 'Regular Product Block',
			text:
				`<ProductRegular
					image={image}
					name="Product name"
					description="Product short description"
				/>`,
			component: () => {
				return (
					<Card>
						<ProductRegular
							image={image}
							name="Product name"
							prise="USD 12.00"
							description="Product short description"
						/>
					</Card>
				);
			},
		},
		{
			title: 'Product Select Quantity Block',
			text:
				`<BlockGoodsItemSelectQuantity
	max={5}
	current={3}
/>`,
			component: () => {
				return (
					<Card>
						<CardContent>
							<BlockGoodsItemSelectQuantity
								max={5}
								current={3}
								selectedClass="red"
								unselectedClass=""
							/>
						</CardContent>
					</Card>
				);
			},
		},
	],
};

