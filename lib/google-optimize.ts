import experiments from '../constants/google-optimize-experiments.json'

export type GoogleOptimizeExperimentVariant = {
  name: string
  id: number
  weight: number
}

export type GoogleOptimizeExperiment = {
  name: string
  id: string
  variants: GoogleOptimizeExperimentVariant[]
}

const GOOGLE_OPTIMIZE_CURRENT_EXPERIMENT_NAME =
  process.env.GOOGLE_OPTIMIZE_CURRENT_EXPERIMENT_NAME

export const formatExperimentLocale = (
  namespace: string,
  experimentId: string,
  variantId: string | number
) => `${namespace}_${variantId}_${experimentId}`

export const getGoogleOptimizeCurrentExperiment =
  (): null | GoogleOptimizeExperiment => {
    if (GOOGLE_OPTIMIZE_CURRENT_EXPERIMENT_NAME === undefined) {
      return null
    }

    return (
      (experiments as GoogleOptimizeExperiment[]).find(
        (experiment) =>
          experiment.name === GOOGLE_OPTIMIZE_CURRENT_EXPERIMENT_NAME
      ) || null
    )
  }
