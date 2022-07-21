import { useRef, useEffect } from "react"
// import Image from "next/image"
import BeginQualifyButton from "./BeginQualifyButton"
// import businessOwners2 from '../public/wp-content/themes/tax-rebate-specialists/assets/images/business-owners-2.jpg'

export default function Header() {
    const headerImageRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const imageEntry = entries[0]
            if (imageEntry.isIntersecting) {
                imageEntry.target.classList.add('fade-in')
                observer.unobserve(imageEntry.target)
            }
        })
        observer.observe(headerImageRef.current)
    }, [])

    return (
        <header className="section-header">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxhuge">
                        <div className="w-layout-grid header_component">
                            <div className="header_content">
                                <div className="margin-bottom margin-small">
                                    <h1 data-text="tn3cb3defa">
                                        COVID-relief tax rebates for most business owners
                                    </h1>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <p className="text-size-large" data-textarea="tan3e7dac2f">
                                        The{" "}
                                        <span className="text-span">
                                            Employee Retention Tax Credit (ERC)
                                        </span>
                                        &nbsp;includes funds to help business owners who kept W-2
                                        employees on their payroll during 2020 (Q2–Q4) and 2021
                                        (Q1–Q3).
                                    </p>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <ul role="list">
                                        <li data-text="tne2b87f7">Up to $26,000 per W-2 employee</li>
                                        <li data-text="t36a8b578">
                                            ERC is a refundable tax credit (it is not a loan like PPP)
                                        </li>
                                        <li data-text="t1b7c8b20">No restrictions on use</li>
                                        <li data-text="tn69ca5460">No limit on funding</li>
                                        <li data-text="t3aea9efd">
                                            Qualify with full/partial closure, supply chain disruption,
                                            or reduced revenue
                                        </li>
                                        <li data-text="tn13e898b8">
                                            Qualification approval within 2–3 weeks
                                        </li>
                                        <li data-text="t2a9e0b56">
                                            IRS&nbsp;distributes your funds within 4–6 months
                                        </li>
                                    </ul>
                                </div>
                                <div className="margin-top margin-small">
                                    <div className="button-row">
                                        <div className="button-wrapper">
                                            <BeginQualifyButton className='hero-button' />
                                        </div>
                                    </div>
                                </div>
                                <div className="margin-top margin-small">
                                    <p className="text-size-tiny" data-text="t74c2dbc">
                                        It only takes two minutes to start the process!
                                    </p>
                                </div>
                            </div>
                            <div className="header_image-wrapper">
                                <img
                                    src="/wp-content/themes/tax-rebate-specialists/assets/images/business-owners-2.jpg"
                                    loading="lazy"
                                    data-w-id="f74bfce3-b25a-0971-3c4e-bcdb9192a67b"
                                    sizes="(max-width: 991px) 90vw, 41vw"
                                    alt="Business owners and employees in their stores"
                                    srcSet="/wp-content/themes/tax-rebate-specialists/assets/images/business-owners-2-p-500.jpeg 500w/wp-content/themes/tax-rebate-specialists/assets/images/business-owners-2-p-800.jpeg 800w/wp-content/themes/tax-rebate-specialists/assets/images/business-owners-2-p-1080.jpeg 1080w/wp-content/themes/tax-rebate-specialists/assets/images/business-owners-2.jpg 1500w"
                                    className="hero-image"
                                    data-img="i5c05a14b"
                                    style={{
                                        transform: "translateX(25%)",
                                        opacity: 0,
                                        transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                    }}
                                    ref={headerImageRef}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}