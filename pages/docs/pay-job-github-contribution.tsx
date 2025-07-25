import { GetStaticProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ArrowLeftIcon } from '@heroicons/react/outline'

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

const ExecutePaymentPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                💰 Execute a Payment
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Send or get the reward for the good work!
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
            Once the <strong>challenge period is over</strong>, you will be prompted to <strong>get your reward by the bot</strong>.
          </p>
          
          <ol className="list-decimal list-inside space-y-6">
            <li>
              <strong>Click on <em>&quot;Execute the Transaction&quot;</em></strong> to be redirected to the Deal execution page.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  You can execute the deal
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/challenge_time_expired.png" 
                    alt="You can execute the deal" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              <strong>Connect your wallet</strong> and <strong>click on Pay</strong> to receive your reward.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Last step before finalizing the payment!
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/web3_pay.png" 
                    alt="Last step before finalizing the payment" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Hurray! <strong>The developer will receive your tokens/coins shortly</strong>!
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Reward transferred to your wallet!
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/job_done.png" 
                    alt="Reward transferred to your wallet" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs/challenge-job-github" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Challenge a Claim
          </Link>
          <Link 
            href="/docs/get-refunded" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            Next: Get refunded
            <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

ExecutePaymentPage.withLayout = withMainLayout

export default ExecutePaymentPage
