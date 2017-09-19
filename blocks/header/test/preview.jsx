import { TechHeaderBlock } from '../../index';

export default {
	title: 'TechHeaderBlock',
	blocks: [
		{
			title: 'TechHeaderBlock',
			text:
				`<TechHeaderBlock
	icon="account_circle"
	title="Tech Header "
/>`,
			component: () => {
				return (<TechHeaderBlock
					icon="account_circle"
					title="Tech Header "
				/>);
			},
		},
	],
};

