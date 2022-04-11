import Image from 'next/image';

import {NextPageWithLayout} from "./_app";
import withMainLayout from "../layouts/withMainLayout";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, [
                'feature',
                'header',
                'footer',
            ])),
        },
    }
}

const Features: NextPageWithLayout = () => {
    const { t: translate } = useTranslation('feature')

    return (
        <div className="bg-white pb-8 sm:pb-12 xl:pb-12">
            <div
                className="px-4 2xl:px-0 items-center bg-gray-900 flex-col xl:flex xl:flex-row xl:justify-between overflow-hidden pt-24 pb-12 xl:relative xl:py-48">

                <div
                    className="text-center xl:text-left max-w-5xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-white tracking-tight md:text-6xl">
                        {translate('hero_headline')}
                    </h1>
                    <h2 className="text-5xl font-extrabold text-indigo-500 text-white tracking-tight md:text-6xl">
                        {translate('hero_subheadline')}
                    </h2>
                    <p className="mt-6 max-w-3xl mx-auto xl:mx-0 text-xl text-gray-300">
                        {translate('hero_description')}
                    </p>
                </div>


                <div className={'xl:flex-shrink-0 flex items-center justify-center xl:mt-0 mt-12'}>
                    <Image
                        width={660}
                        height={467}
                        className="shadow-xl"
                        src={'/features/transactions.png'}
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

Features.withLayout = withMainLayout

export default Features;