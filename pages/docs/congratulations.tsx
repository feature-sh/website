import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowLeftIcon, BadgeCheckIcon } from '@heroicons/react/outline'

import { NextPageWithLayout } from '../_app'
import withMainLayout from '../../layouts/withMainLayout'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'header',
        'footer',
      ])),
    },
  }
}

const CongratulationsPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                🎉 Congratulations!
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl mx-auto">
                You&apos;ve completed all the documentation guides.<br />You&apos;re now ready to use FEATURE like a pro!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to docs link */}
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        <Link 
          href="/docs" 
          className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Documentation
        </Link>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="prose prose-indigo prose-lg mx-auto">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <BadgeCheckIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
            
            <h2 className="text-2xl font-bold text-gray-900">
              You&apos;re now a FEATURE Expert!
            </h2>
            
            <p className="mt-4 text-lg text-gray-600">
              You&apos;ve gone through all the documentation guides and learned how to:
            </p>
            
            <ul className="mt-4 space-y-2 text-left list-disc list-inside">
              <li>Set up auto dealing for seamless transactions</li>
              <li>Configure double escrow for different contributor rewards</li>
              <li>Claim your rewards after completing work</li>
              <li>Challenge claims when specifications aren&apos;t met</li>
              <li>Execute payments to contributors</li>
              <li>Get refunded when no one claims your deal</li>
              <li>Create deals using GitHub comments</li>
            </ul>
            
            <div className="mt-8">
              <p className="text-gray-600">
                Ready to start using FEATURE for your next project?
              </p>
              
              <div className="mt-6">
                <Link
                  href="https://github.com/apps/feature-bot"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Install FEATURE GitHub App
                </Link>
              </div>
              
              <p className="mt-8 text-sm text-gray-500">
                If you have any questions or need support, join our 
                <a href="https://discord.gg/feature" className="text-indigo-600 hover:text-indigo-500 mx-1">
                  Discord community
                </a>
                or 
                <a href="https://github.com/feature-sh/feature/issues" className="text-indigo-600 hover:text-indigo-500 mx-1">
                  open an issue on GitHub
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs/create-deal-comments" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Create a deal using GitHub comments
          </Link>
          <div></div> {/* Empty div to maintain flex spacing */}
        </div>
      </div>
    </div>
  )
}

CongratulationsPage.withLayout = withMainLayout

export default CongratulationsPage
