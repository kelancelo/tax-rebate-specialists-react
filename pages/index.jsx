import Header from '../components/Header'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Form from '../components/Form'
import FAQs from '../components/FAQs'
import Head from 'next/head'

export default function Index() {
    return (
        <>
            <Head>
                <title>
                    Tax Rebate Specialists – Copyright © 2022 Tax Rebate Specialists, LLC. All
                    right reserved.
                </title>
            </Head>
            <Header />
            <Testimonials />
            <CTA className='section-cta' />
            <Form />
            <CTA className='section-cta-2' />
            <FAQs />
        </>
    )
}