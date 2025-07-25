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

const ChallengeJobGithubPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                ⚔️ Challenge a Claim
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Challenge the developer if the specifications are not met.
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
            During the review period, you can challenge the claimer if the specifications are not met.
          </p>
          
          <ol className="list-decimal list-inside space-y-6">
            <li>
              If you think that the last claimer&apos;s PR doesn&apos;t meet the deal creator&apos;s specifications, click on <strong>Challenge the Claim</strong>.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Challenge the claimant
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/successful_claim.png" 
                    alt="Challenge the claimant" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Once redirected, connect your wallet and click on <strong>Challenge Claim</strong>.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <img 
                    src="/docs/web3_challenge.png" 
                    alt="Challenge claim with web3" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              After that, <strong>wait</strong> for the jurors to make their ruling.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4">
                  <img 
                    src="/docs/dispute_created.png" 
                    alt="A dispute has been created for this challenge" 
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center">
                  A dispute has been created for this challenge
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              Once the dispute is resolved, the bot will tell you who wins the dispute.
              
              <ol className="list-[lower-alpha] pl-6 mt-4 space-y-6">
                <li>
                  If the <strong>claimer wins</strong>, he will <strong>earn the dispute funds</strong> and will be able to <Link href="/docs/execute-payment" className="text-indigo-600 hover:text-indigo-500"><strong>execute the payment</strong></Link>.
                  
                  <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <img 
                        src="/docs/claimer_wins.png" 
                        alt="Claimer wins the dispute" 
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center">
                      Claimer wins the dispute
                    </div>
                  </div>
                </li>
                
                <li className="mt-6">
                  If the <strong>challenger wins</strong>, he will <strong>earn the dispute funds</strong> and the <strong>previous claim will be canceled</strong>. Then, anybody can <Link href="/docs/claim-your-reward" className="text-indigo-600 hover:text-indigo-500"><strong>claim the reward</strong></Link> <strong>again</strong>.
                  
                  <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <img 
                        src="/docs/challenger_wins.png" 
                        alt="Challenger wins the dispute" 
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center">
                      Challenger wins the dispute
                    </div>
                  </div>
                </li>
                
                <li className="mt-6">
                  If the <strong>jurors couldn&apos;t choose a winner</strong>, the <strong>deposit fund is refunded to the challenger</strong>, and the <strong>claimer will be able to</strong> <Link href="/docs/execute-payment" className="text-indigo-600 hover:text-indigo-500"><strong>execute the payment</strong></Link> after the challenger period has expired.
                  
                  <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="p-4">
                      <img 
                        src="/docs/nobody_wins.png" 
                        alt="Nobody wins the dispute" 
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 text-center">
                      Nobody wins the dispute
                    </div>
                  </div>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs/claim-your-reward" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Claim your Reward
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

ChallengeJobGithubPage.withLayout = withMainLayout

export default ChallengeJobGithubPage
