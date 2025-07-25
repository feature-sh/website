import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowLeftIcon, ExclamationIcon } from '@heroicons/react/outline'

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

const DoubleEscrowPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                ✌️ Double escrow
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Different rewards, for different contributors!
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
          <p>
            The application allows setting up different rewards in function of the claimants if they are part of the core team or if they are external contributors.
          </p>
          
          <p>
            This is particularly useful to avoid a kind of <em>double spend</em> if core team members already receive a fixed salary while using FEATURE to provide additional incentives and track the velocity of core team members.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Double escrow works only with auto dealing enabled.
                </p>
              </div>
            </div>
          </div>
          
          <ol className="list-decimal list-inside space-y-6">
            <li>
              Enable auto dealing and double escrow in your <a href="https://dashboard.feature.sh/settings/wallets" className="text-indigo-600 hover:text-indigo-500">
                organization settings
              </a> as shown below:
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Enable double escrow
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/capture-dashboard-settings-double-escrow.png" 
                    alt="Enable double escrow" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Manage your organization wallets and set the one you want to use for auto dealing by selecting it as the default.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Organization wallets
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/select_organization_wallet.png" 
                    alt="Organization wallets" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Label an issue with a Feature label and let the magic happen 🪄. The transaction can take up to a few minutes to be processed, but fortunately the Bot will keep you updated about the progress!
              
              <p className="mt-4">
                The <em>Claim</em> link contains the information of the reward that the contributor or core team can claim.
              </p>
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Double escrow with the FEATURE bot
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/capture-github-double-escrow-label.png" 
                    alt="Double escrow with the FEATURE bot" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
          </ol>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  The selected wallet should have the necessary funds to create the deal, otherwise an error message will be thrown by the bot.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
              FEATURE bot error if there is not enough fund in the wallet
            </div>
            <div className="p-4">
              <img 
                src="/docs/capture-github-double-escrow-fail.png" 
                alt="FEATURE bot error" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
          
          <p className="mt-8">
            Use the double escrow ✌️ to create even more personalized incentives!
          </p>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs/auto-dealing" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Auto dealing
          </Link>
          <Link 
            href="/docs/claim-your-reward" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            Next: Claim your Reward
            <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

DoubleEscrowPage.withLayout = withMainLayout

export default DoubleEscrowPage
