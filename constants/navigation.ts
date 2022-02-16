export type NavigationItem = {
	i18n_label: string;
	route: string;
	id: number;
};

export const items: { [key: string]: NavigationItem } =  {
	product: {
		i18n_label: 'navitem_product',
		route: '/product',
		id: 1
	},

	features: {
		i18n_label: 'navitem_features',
		route: '/features',
		id: 2
	},

	blog: {
		i18n_label: 'feature_blog',
		route: '/blog',
		id: 3
	},

	dashboard: {
		i18n_label: 'navitem_dashboard',
		route: '/dashboard',
		id: 4
	},

	book: {
		i18n_label: 'navitem_book',
		route: '/book-a-demo',
		id: 5
	},

	pricing: {
		i18n_label: 'navitem_pricing',
		route: '/pricing',
		id: 6
	}
}
