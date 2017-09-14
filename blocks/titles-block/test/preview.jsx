import TitlesBlock from '../index';
import image from './logo.png';

export default {
	title: 'TitlesBlock',
	blocks: [
		{
			title: 'TitlesBlock without image',
			text:
`<TitlesBlock
	title="Main title"
	subtitle="Subtitle"
/>`,
			component: () => {
				return (<TitlesBlock
					title="Main title"
					subtitle="Subtitle"
				/>);
			},
		},
		{
			title: 'TitlesBlock with image',
			text:
				`<TitlesBlock
	image={image}
	title="Main title"
	subtitle="Subtitle"
/>`,
			component: () => {
				return (<TitlesBlock
					image={image}
					title="Main title"
					subtitle="Subtitle"
				/>);
			},
		},
		{
			title: 'TitlesBlock gray subtitle',
			text:
				`<TitlesBlock
	image={image}
	title="Main title"
	subtitleGray="Subtitle"
/>`,
			component: () => {
				return (<TitlesBlock
					image={image}
					title="Main title"
					subtitleGray="Subtitle"
				/>);
			},
		},
	],
};

