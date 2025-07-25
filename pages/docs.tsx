import { GetStaticProps } from 'next'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  BookOpenIcon,
  DocumentTextIcon,
  LightningBoltIcon,
  TagIcon,
  SparklesIcon,
  HandIcon,
  UserIcon,
  ShieldExclamationIcon,
  CashIcon,
  RefreshIcon,
} from '@heroicons/react/outline'

import { NextPageWithLayout } from './_app'
import withMainLayout from '../layouts/withMainLayout'

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

type GuideItem = {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  emoji: string
}

const guides: GuideItem[] = [
  {
    title: 'Create a Deal using GitHub Labels',
    description: 'Learn how to create deals with GitHub labels',
    href: '/docs/create-job-github-label',
    icon: TagIcon,
    emoji: '🏷️',
  },
  {
    title: 'Auto dealing',
    description: 'Understand how automatic dealing works',
    href: '/docs/auto-dealing',
    icon: SparklesIcon,
    emoji: '🪄',
  },
  {
    title: 'Double escrow',
    description: 'Use double escrow for secure transactions',
    href: '/docs/double-escrow',
    icon: HandIcon,
    emoji: '✌️',
  },
  {
    title: 'Claim your Reward',
    description: 'Learn how to claim your rewards',
    href: '/docs/claim-your-reward',
    icon: UserIcon,
    emoji: '🙋',
  },
  {
    title: 'Challenge a Claim',
    description: 'How to challenge claims',
    href: '/docs/challenge-job-github',
    icon: ShieldExclamationIcon,
    emoji: '⚔️',
  },
  {
    title: 'Execute a Payment',
    description: 'Execute payments securely',
    href: '/docs/pay-job-github-contribution',
    icon: CashIcon,
    emoji: '💰',
  },
  {
    title: 'Get refunded',
    description: 'Get your money back if no job is done',
    href: '/docs/get-refunded',
    icon: RefreshIcon,
    emoji: '🔁',
  },
  {
    title: 'Create a deal using GitHub comments',
    description: 'Create deals using GitHub comments',
    href: '/docs/create-deal-comments',
    icon: LightningBoltIcon,
    emoji: '⚡',
  },
]

const Docs: NextPageWithLayout = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                FEATURE Documentation
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                Quick overview. How to start using it?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is FEATURE section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              🤖 What is FEATURE?
            </h2>
          </div>
          <div className="mt-10 prose prose-indigo prose-lg mx-auto">
            <p>
              Our vision is to encourage developers to contribute to projects on GitHub, by being rewarded with cryptocurrencies.
              You can still use FEATURE to improve your software development productivity.
            </p>
            <p>
              It is currently deployed on Gnosis Chain, Polygon and{' '}
              <a href="https://arbitrum.io" className="text-indigo-600 hover:text-indigo-500">
                Arbitrum
              </a>.
            </p>
            <p>
              You can benefit from FEATURE services directly on Github. A Github bot parses your issues to create truly secure payments.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10">Getting Started</h3>
            <ol className="mt-5 list-decimal list-inside space-y-3">
              <li>
                <a href="https://evm.app.feature.sh" className="text-indigo-600 hover:text-indigo-500">
                  Click here
                </a>{' '}
                to start the FEATURE App installation.
              </li>
              <li>
                Once on the FEATURE installation page, click on Installation. You will be redirected to GitHub.
              </li>
              <li>
                Select the account or organization where you want to install the bot.
              </li>
              <li>
                Select the repositories in which the bot will be used, then click on Install.
                <div className="bg-gray-50 p-4 rounded-md mt-2">
                  <p className="text-gray-700">
                    <strong>The FEATURE bot will only have the permission to:</strong>
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>Read access to metadata</li>
                    <li>Read and write access to issues and pull requests</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">
                    FEATURE never has access to your code but only to the names of directories and contributors (metadata) and the thread of issues and pull requests.
                  </p>
                </div>
              </li>
              <li>
                Then, sign in or start your 14-day free trial, in order to be able to use FEATURE.
              </li>
              <li>
                After signing in, you&apos;re done! You can see every deal that have been created with FEATURE bot.
              </li>
            </ol>
            <p className="mt-8">
              Congratulations on completing the installation 🎉 Now it&apos;s time to make your first deal to start increasing your product development productivity 🤓
            </p>
          </div>
        </div>
      </div>


      {/* FEATURE guides section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              FEATURE Guides
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Learn how to use FEATURE to its full potential with our comprehensive guides
            </p>
          </div>
          <div className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {guides.map((guide) => (
              <div key={guide.title} className="group relative">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                  <div className="flex items-center justify-center h-full bg-indigo-50">
                    <span className="text-6xl">{guide.emoji}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={guide.href} className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {guide.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{guide.description}</p>
                </div>
                <a
                  href={guide.href}
                  className="mt-4 inline-flex text-base font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Learn more
                  <span className="ml-1 text-indigo-500" aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700">
        <div className="mx-auto max-w-4xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Start using FEATURE to improve your software development productivity.
          </p>
          <a
            href="https://evm.app.feature.sh"
            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
          >
            Install FEATURE Now
          </a>
        </div>
      </div>
    </div>
  )
}

Docs.withLayout = withMainLayout

export default Docs
