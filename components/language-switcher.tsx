import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { LanguageDict } from '../constants/lang'

type LanguageSwitcherProps = {
  languages: LanguageDict
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const router = useRouter()
  const { t: translate } = useTranslation('footer')

  const handleLanguageSwitch = async (
    ev: React.ChangeEvent<HTMLSelectElement>
  ) => {
    await router.push(router.asPath, router.asPath, {
      locale: ev.target.value,
      scroll: false,
    })
  }

  return (
    <div className={'flex items-center gap-x-2'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <select
        onChange={handleLanguageSwitch}
        value={router.locale}
        className={'px-3 py-1 outline-0'}
      >
        {Object.keys(languages).map((locale) => (
          <option value={locale} key={locale}>
            {translate(languages[locale].i18nDisplayName)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
