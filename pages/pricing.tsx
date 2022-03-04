import React from "react";
import withMainLayout from "../layouts/withMainLayout";
import Home from "./index";
import {GetStaticProps, NextPage} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {classNames} from "../utils/classNames";
import {CheckIcon} from "@heroicons/react/solid";
import {NextPageWithLayout} from "./_app";
import { pricing } from "../constants/pricing";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [
                'homepage',
                'header',
                'footer',
            ])),
        },
    }
}

const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

const Pricing: NextPageWithLayout = () => {
    return (
        <>
        <div className={'bg-gray-900'}>
        <div className="relative max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-28 lg:px-8">
            <div className="relative">
                <h1 className="text-3xl font-extrabold text-white sm:text-5xl max-w-xl sm:leading-none sm:tracking-tight lg:text-6xl">
                    Pricing plans for teams of all sizes
                </h1>
                <p className="mt-6 max-w-2xl text-xl text-gray-400">
                    Choose an affordable plan that's packed with the best features for engaging your audience, creating
                    customer loyalty, and driving sales.
                </p>
            </div>
        </div>
            </div>
        <main className={"-translate-y-4"}>
        {/* Pricing Section */}
        <section className="relative" aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="sr-only">
                Pricing
            </h2>

            {/* Tiers */}
            <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                {pricing.tiers.map((tier) => (
                    <div
                        key={tier.title}
                        className={classNames("relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col")}
                    >
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
                            {tier.mostPopular ? (
                                <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                                    Most popular
                                </p>
                            ) : null}
                            <p className="mt-4 flex items-baseline text-gray-900">
                                <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                            </p>
                            <p className="mt-6 text-gray-500">{tier.description}</p>

                            {/* Feature list */}
                            <ul role="list" className="mt-6 space-y-6">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex">
                                        <CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                                        <span className="ml-3 text-gray-500">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href="#"
                            className={classNames(
                                tier.mostPopular
                                    ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                            )}
                        >
                            {tier.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>

        {/* Logo Cloud */}
        <section
            aria-labelledby="customer-heading"
            className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
        >
            <h2 id="customer-heading" className="sr-only">
                Our customers
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                        alt="StaticKit"
                    />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                        alt="Transistor"
                    />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                    <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                        alt="Workcation"
                    />
                </div>
            </div>
        </section>

        {/* Testimonial */}
        <div className="relative">
            {/* Decorative background */}
            <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50" />

            <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                        <img
                            src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative lg:col-span-1">
                        <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-white.svg" alt="" />
                        <blockquote className="mt-6 text-white">
                            <p className="text-xl font-medium sm:text-2xl">
                                Workflow has completely transformed how we interact with customers. We've seen record bookings,
                                higher customer satisfaction, and reduced churn.
                            </p>
                            <footer className="mt-6">
                                <p className="flex flex-col font-medium">
                                    <span>Marie Chilvers</span>
                                    <span>CEO, Workcation</span>
                                </p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ */}
        <section
            aria-labelledby="faq-heading"
            className="max-w-2xl mx-auto py-24 px-4 divide-y divide-gray-200 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
        >
            <h2 id="faq-heading" className="text-3xl font-extrabold text-gray-900">
                Frequently asked questions
            </h2>
            <div className="mt-8">
                <dl className="divide-y divide-gray-200">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                            <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                            <dd className="mt-2 md:mt-0 md:col-span-7">
                                <p className="text-base text-gray-500">{faq.answer}</p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    </main></>)
}


Pricing.withLayout = withMainLayout

export default Pricing;