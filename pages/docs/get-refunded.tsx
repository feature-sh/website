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

const GetRefundedPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                🔁 Get refunded
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Receive your money back if nobody has claimed your Deal on time.
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
            Nobody has claimed on time? As a Deal creator, you can be refunded your money put in Escrow.
          </p>
          
          <ol className="list-decimal list-inside space-y-6">
            <li>
              If <strong>time to claim a reward has expired</strong>, FEATURE bot will automatically comment the related issue.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Claim time expired
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/claim_time_expired.png" 
                    alt="Claim time expired" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Click on <strong>Refund the Payment</strong>, then <strong>connect your wallet</strong>.
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Anyone can execute the refund, but <strong>only the Deal creator will receive the money in Escrow</strong>. The one who executes it will only pay the transaction fees.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Last step before getting refunded
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/web3_refund.png" 
                    alt="Last step before getting refunded" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Once the transaction is mined, the <strong>refund is complete</strong>! Check your wallet to see your money back.
            </li>
          </ol>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs/pay-job-github-contribution" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Execute a Payment
          </Link>
          <Link 
            href="/docs/create-deal-comments" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            Next: Create a deal using GitHub comments
            <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

GetRefundedPage.withLayout = withMainLayout

export default GetRefundedPage
