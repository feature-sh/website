/**
 * TODO: features are not translated for now. Waiting for more concrete data before implementing.
 */

export type I18nBilling =
  | 'billing_monthly'
  | 'billing_yearly'
  | 'billing_free'
  | 'billing_quote'

export type PricingTier = {
  i18nTitle: string
  i18nBilling: I18nBilling
  i18nDescription: string
  i18nCta: string
  features: string[]
  mostPopular: boolean
  payload?: { [key: string]: any }
}

export const isFrequencyPricing = (billing: I18nBilling) =>
  billing === 'billing_monthly' || billing === 'billing_yearly'

export const pricing: { tiers: PricingTier[] } = {
  tiers: [
    {
      i18nBilling: 'billing_free' as I18nBilling,
      features: [
        'Deal creation',
        'Dashboard to track the deals',
        'Easy accounting for crypto',
        'Micro-certifications',
        'Up to 5 members'
      ],
      mostPopular: false,
    },
    {
      payload: { price: 50 },
      i18nBilling: 'billing_monthly' as I18nBilling,
      features: [
        'Workflow automations',
        'Tracking developer velocity',
        'More than 5 members'
      ],
      mostPopular: true,
    },
    {
      i18nBilling: 'billing_quote' as I18nBilling,
      features: [
        'Consulting on deal creation',
        'Guarantee of task execution',
        'Additional credits'
      ],
      mostPopular: false,
    },
  ].map((plan, idx) => ({
    ...plan,
    i18nTitle: `plan_${idx + 1}_title`,
    i18nDescription: `plan_${idx + 1}_description`,
    i18nCta: `plan_${idx + 1}_cta`,
  })),
}
