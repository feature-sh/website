import { NextRequest, NextResponse } from 'next/server'
import { GOOGLE_OPTIMIZE_COOKIE_NAME } from '../constants/google-optimize'
import {
  getGoogleOptimizeCurrentExperiment,
  GoogleOptimizeExperimentVariant,
} from '../lib/google-optimize'

const optimizedPaths =
  process.env.GOOGLE_OPTIMIZE_OPTIMIZED_PATHS?.split(' ') || []


export const middleware = (req: NextRequest) => {
  let res = NextResponse.next()
  let cookie = req.cookies[GOOGLE_OPTIMIZE_COOKIE_NAME]

  if (!cookie) {
    let n = Math.random() * 100
    const experiment = getGoogleOptimizeCurrentExperiment()

    if (!experiment) {
      return res
    }
    const variant = experiment.variants.find((variant) => {
      if (variant.weight >= n) return true
      n -= variant.weight
    }) as GoogleOptimizeExperimentVariant

    cookie = `${experiment.id}.${variant.id}`
  }

  const [, variantId] = cookie.split('.')
  const url = req.nextUrl.clone()

  console.log({ path: url.pathname })

  console.log({ optimizedPaths })
  if (optimizedPaths.includes(url.pathname)) {
	console.log({ cookie })

    if (variantId !== '0') {
      url.pathname = url.pathname.replace('/', `/${cookie}/`)
    }
    res = NextResponse.rewrite(url)
  }

  if (!req.cookies[GOOGLE_OPTIMIZE_COOKIE_NAME]) {
    res.cookie(GOOGLE_OPTIMIZE_COOKIE_NAME, cookie)
  }

  return res
}
