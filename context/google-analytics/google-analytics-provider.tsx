import { googleAnalyticsContext } from './google-analytics-context'

const throwIfSSR = () => {
  throw new Error('Using GA during SSR is not allowed')
}

function gaHandler() {
  const dataLayer = ((window as any).dataLayer =
    (window as any).dataLayer || [])

  dataLayer.push(arguments)
}

export const GoogleAnalyticsProvider: React.FC = ({ children }) => {
  const ga = typeof window === 'undefined' ? throwIfSSR : gaHandler

  return (
    <googleAnalyticsContext.Provider value={ga}>
      {children}
    </googleAnalyticsContext.Provider>
  )
}
