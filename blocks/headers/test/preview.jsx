import { Card } from '../../../card';
import { HeaderBlock } from '../index';
import image from './logo.png';

export default {
	title: 'Header Blocks',
	blocks: [
		{
			title: 'Icon Header without icon',
			text:
				`<IconHeaderBlock
					title="Main title"
					subtitle="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<HeaderBlock
							title="Main title"
							subtitle="Subtitle"
						/>
					</Card>
				);
			},
		},
		{
			title: 'Icon Header with icon',
			text:
				`<IconHeaderBlock
					image={image}
					title="Main title"
					subtitle="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<HeaderBlock
							image={image}
							title="Main title"
							subtitle="Subtitle"
						/>
					</Card>
				);
			},
		},
		{
			title: 'Icon Header with Rounded Icon',
			text:
				`<IconHeaderBlock
					image={image}
					title="Main title"
					subtitleGray="Subtitle"
				/>`,
			component: () => {
				return (
					<Card>
						<HeaderBlock
							image={image}
							title="Main title"
							subtitle="Subtitle"
							rounded="true"
						/>
					</Card>
				);
			},
		},
	],
};

