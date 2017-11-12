import { Card, CardHeader } from '../../../card';
import { Tabs, Tab } from '../index';

export default {
	title: 'Header Blocks',
	blocks: [
		{
			title: 'Icon Header without icon',
			text:
				`<Card>
					<Tabs>
						<Tab className="col s6" title="Tab 1"></Tab>
						<Tab className="col s6" title="Tab 2" active></Tab>
					</Tabs>
					<CardHeader>
						<h1>test</h1>
					</CardHeader>
				</Card>`,
			component: () => {
				return (
					<div>
						<Card>
							<Tabs>
								<Tab className="col s6" title="Tab 1"></Tab>
								<Tab className="col s6" title="Tab 2" active></Tab>
							</Tabs>
							<CardHeader>
								<h1>test</h1>
							</CardHeader>
						</Card>
					</div>
				);
			},
		},
	],
};
