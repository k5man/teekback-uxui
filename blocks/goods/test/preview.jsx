import { BlockGoodsItem, BlockImages } from '../../index';
import image from './logo.png';
// , BlockImage, BlockGoodsItemSelectQuantity

const images = [
	{
		id: 1,
		img: image,
	},
	{
		id: 2,
		img: image,
	},
	{
		id: 3,
		img: image,
	},
];

export default {
	title: 'BlockGoodsItem',
	blocks: [
		{
			title: 'BlockGoodsItem',
			text:
				`<BlockGoodsItem
	title="Main title"
	subtitle="Subtitle"
	image={image}
	price="$50.00"
/>`,
			component: () => {
				return (<BlockGoodsItem
					title="Main title"
					subtitle="Subtitle"
					image={image}
					price="$50.00"
				/>);
			},
		},
		{
			title: 'BlockGoodsItem no subtitle',
			text:
				`<BlockGoodsItem
	title="Main title"
	image={image}
	price="$50.00"
/>`,
			component: () => {
				return (<BlockGoodsItem
					title="Main title"
					image={image}
					price="$50.00"
				/>);
			},
		},
		{
			title: 'BlockImages',
			text:
				`<BlockImages
	image={images}
/>`,
			component: () => {
				return (<BlockImages
					images={images}
				/>);
			},
		},
	],
};

