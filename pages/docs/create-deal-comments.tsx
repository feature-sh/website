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

const CreateDealCommentsPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                ⚡ Create a deal using GitHub comments
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Attract developers with a reward
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
          <ol className="list-decimal list-inside space-y-6">
            <li>
              Open an <strong>issue</strong> on Github.
            </li>
            
            <li className="mt-6">
              <strong>Entitle</strong> it or add a <strong>comment</strong> with this format: <em>$&lt;issue_type&gt; &lt;crypto_amount&gt;&lt;currency&gt; (&lt;network&gt;)</em>.
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      The keywords to launch a deal are these: <code>$f, $bounty, $grant, $feature, $feat, $fix, $audit, $CS, $doc, $documentation, $refacto, $refactoring, $code, $chore, $test, $docs, $ci, $perf, $build and $style</code>.
                      <br /><br />
                      And the keyword networks are: <code>(polygon), (xdai), (arbitrum_one), (celo), (bsc)</code> and <code>(bitfinity_testnet)</code>.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Comment an issue with keywords to create a Deal
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/create_deal_command.png" 
                    alt="Comment an issue with keywords to create a Deal" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              The FEATURE bot will ask you to <strong>put the cryptocurrency amount in Escrow</strong>. <strong>Click on the link</strong> to be redirected to the related page.
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Feature works with coin as well as tokens (ERC20).
                    </p>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              <strong>Connect your wallet</strong>. If enough funds, you will be able to approve the transfer.
            </li>
            
            <li className="mt-4">
              <strong>Click on Create the Deal</strong>. Once transaction done, you will be automatically redirected to GitHub.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Create your Deal
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/web3_deal.png" 
                    alt="Create your Deal" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </li>
            
            <li className="mt-8">
              The bot will comment that <strong>you&apos;ve created the Deal successfully</strong>!
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Deal created!
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/settlement_done.png" 
                    alt="Deal created!" 
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
            href="/docs/get-refunded" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Previous: Get refunded
          </Link>
          <Link
            href="/docs/congratulations"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            Next: Congratulations
            <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

CreateDealCommentsPage.withLayout = withMainLayout

export default CreateDealCommentsPage
