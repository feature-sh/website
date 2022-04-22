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
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
      mostPopular: false,
    },
    {
      payload: { price: 50 },
      i18nBilling: 'billing_monthly' as I18nBilling,
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
      mostPopular: true,
    },
    {
      i18nBilling: 'billing_quote' as I18nBilling,
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom integrations',
      ],
      mostPopular: false,
    },
  ].map((plan, idx) => ({
    ...plan,
    i18nTitle: `plan_${idx + 1}_title`,
    i18nDescription: `plan_${idx + 1}_description`,
    i18nCta: `plan_${idx + 1}_cta`
  })),
}
