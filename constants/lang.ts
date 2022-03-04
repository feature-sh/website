export type Language = {
  i18nDisplayName: string
  isDefaultLocale: boolean
}

export type LanguageDict = { [key: string]: Language }

export const languages: LanguageDict = {
    'en-US': {
        i18nDisplayName: 'language_english',
        isDefaultLocale: true,
    },
    'fr': {
        i18nDisplayName: 'language_french',
        isDefaultLocale: false,
    },
}
