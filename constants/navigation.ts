/* Not used yet */

export type NavigationItem = {
  i18nLabel: string
  route?: string
}

export const items: { [key: string]: NavigationItem } = {
  product: {
    i18nLabel: 'navitem_product',
    route: '/product',
  },

  features: {
    i18nLabel: 'navitem_features',
    route: '/features',
  },

  blog: {
    i18nLabel: 'feature_blog',
    route: '/blog',
  },

  dashboard: {
    i18nLabel: 'navitem_dashboard',
    route: '/dashboard',
  },

  book: {
    i18nLabel: 'navitem_book',
    route: process.env.NEXT_PUBLIC_CALENDAR_URL_BOOK_A_DEMO || '#',
  },

  pricing: {
    i18nLabel: 'navitem_pricing',
    route: '/pricing',
  },
}
