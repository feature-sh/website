import { GetStaticProps } from 'next'
import Link from 'next/link'
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

const CreateDealGitHubLabelsPage: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                🏷️ Create a Deal using GitHub Labels
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Use Feature&apos;s dashboard and GitHub labels to easily create new deals to provide incentives to your developers
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
            By labelling any issue with a special label, you can automatically create a new deal for your developers.
          </p>
          
          <ol className="list-decimal list-inside space-y-6">
            <li>
              <a href="https://dashboard.feature.sh/settings/labels" className="text-indigo-600 hover:text-indigo-500">
                Access to the label editor
              </a> for your organization. Once you are on the right page, you can start creating, editing or deleting any label available to your installation.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Feature&apos;s Label Editor
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/capture-dashboard-label-contributor.png" 
                    alt="Feature's Label Editor" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              
              <p className="mt-4 text-gray-600">
                Note that any operation performed on labels will affect <strong>all the repositories managed by features</strong>.
              </p>
            </li>
            
            <li className="mt-8">
              Once your label is created, you can simply label any issue with it and our Bot will take care of it.
              
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500">
                  Manually create a deal with a label
                </div>
                <div className="p-4">
                  <img 
                    src="/docs/capture-github-label-without-auto-deal.png" 
                    alt="Manually create a deal with a label" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              
              <p className="mt-4">
                You can then put the cryptocurrency amount in escrow and proceed normally.
              </p>
            </li>
          </ol>
          
          <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900">Protip</h3>
            <p className="mt-2 text-indigo-700">
              Feature allows you to automate this process so that you won&apos;t have to manually deposit anything in escrow, using organization wallets.
            </p>
            <p className="mt-4">
              Learn more about the <Link href="/docs/auto-dealing" className="text-indigo-600 font-medium">auto dealing</Link> feature.
            </p>
          </div>
        </div>
      </div>

      {/* Next/Previous navigation */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <Link 
            href="/docs" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Documentation Home
          </Link>
          <Link 
            href="/docs/auto-dealing" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            Next: Auto dealing
            <ArrowLeftIcon className="h-4 w-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

CreateDealGitHubLabelsPage.withLayout = withMainLayout

export default CreateDealGitHubLabelsPage
