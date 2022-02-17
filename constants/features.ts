import {
	GlobeAltIcon,
	LightningBoltIcon,
	ScaleIcon,
} from '@heroicons/react/outline'
import { SVGProps } from 'react'

export type Feature = {
	i18nLabel: string
	i18nDescription: string
	icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
	isPremium: boolean
}

export const features: Feature[] = [
	{
		i18nLabel: 'features_gamify_heading',
		i18nDescription: 'features_gamify_description',
		icon: GlobeAltIcon,
		isPremium: false,
	},
	{
		i18nLabel: 'features_reward_heading',
		i18nDescription: 'features_reward_description',
		isPremium: false,
		icon: ScaleIcon,
	},
	{
		i18nLabel: 'features_badge_heading',
		i18nDescription: 'features_badge_description',
		icon: LightningBoltIcon,
		isPremium: false,
	},
	{
		i18nLabel: 'features_prioritarize_heading',
		i18nDescription: 'features_prioritarize_description',
		icon: GlobeAltIcon,
		isPremium: false,
	},
	{
		i18nLabel: 'features_performance_heading',
		i18nDescription: 'features_performance_description',
		icon: ScaleIcon,
		isPremium: false,
	},
	{
		i18nLabel: 'features_accounting_heading',
		i18nDescription: 'features_accounting_description',
		icon: LightningBoltIcon,
		isPremium: true,
	},
]
