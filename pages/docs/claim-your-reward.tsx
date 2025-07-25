import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowLeftIcon, InformationCircleIcon } from '@heroicons/react/outline'

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

const ClaimYourRewardPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                🙋 Claim your Reward
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Say you contributed.
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
            If you made a Pull Request relative to the deal, you are ready to claim your reward:
          </p>
          
          <ol className="list-decimal list-inside space-y-6">
            <li>
              <strong>Comment</strong> the <strong>number</strong> of your <strong>Pull Request</strong> with the keyword <strong><code>$PR</code>, <code>$pr</code>, <code>$claim</code></strong> or <strong><code>$fixed</code></strong>.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Linking a PR to claim
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/capture-github-contributor-claim.png" 
                    alt="Linking a PR to claim" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              <strong>Click</strong> on the link to be redirected to the <strong>claiming page</strong>.
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      If you are in <Link href="/docs/auto-dealing" className="text-blue-600 hover:text-blue-500">auto dealing</Link> just click on <code>Claim</code> and you will be redirected to the claiming page.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              <strong>Connect your wallet</strong> and click on <strong>Claim</strong>.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <img 
                    src="/docs/web3_claim.png" 
                    alt="Claim your reward" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center">
                  Claim your reward
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Once redirected on GitHub, the FEATURE bot will tell you that <strong>you claimed successfully</strong>!
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <img 
                    src="/docs/capture-github-challenge-content.png" 
                    alt="Successful claim" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
          </ol>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  If nobody has challenged your claim within the challenge period, you will be able to <Link href="/docs/pay-job-github-contribution" className="text-blue-600 hover:text-blue-500">execute the payment</Link> to receive your reward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs/double-escrow" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Double escrow
          </Link>
          <Link 
            href="/docs/pay-job-github-contribution" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            Next: Execute a Payment
            <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

ClaimYourRewardPage.withLayout = withMainLayout

export default ClaimYourRewardPage
