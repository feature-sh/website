import { useContext } from 'react'
import { googleAnalyticsContext } from './google-analytics-context'

export const useGoogleAnalytics = () => useContext(googleAnalyticsContext)
