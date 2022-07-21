import Link from 'next/link'

export default function Footer() {
    return (
        <footer id="footer" className="footer" sym="true">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="padding-bottom padding-xlarge">
                            <div className="footer_top-wrapper">
                                <Link
                                    href="/"
                                >
                                    <a
                                        id="w-node-fed0fda2-e277-aa07-1a98-71b3575b9db9-575b9db3"
                                        aria-current="page"
                                        className="footer_logo-link w-nav-brand w--current"
                                        data-link="a2f"
                                    >
                                        <img
                                            src="/wp-content/themes/tax-rebate-specialists/assets/images/trs-logo-color.svg"
                                            loading="lazy"
                                            alt=""
                                            className="footer_logo"
                                            data-img="i52c0a069"
                                        />
                                    </a>
                                </Link>
                                <div className="margin-bottom">
                                    <div className="max-width-medium">
                                        <div
                                            className="heading-xsmall in-footer"
                                            data-text="tn725617d9"
                                        >
                                            We help business owners get their restriction-free,
                                            COVID-relief rebates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="line-divider" />
                        <div className="padding-top padding-medium">
                            <div className="footer_bottom-wrapper">
                                <div className="footer_credit-text" data-textarea="ta33fd8d0e">
                                    Copyright ©<span className="current-year">2022</span> Tax Rebate
                                    Specialists, LLC. All right reserved.
                                </div>
                                <div className="w-layout-grid footer_legal-list">
                                    <Link href="/privacyPolicy">
                                        <a
                                            className="footer_legal-link"
                                            data-text="tn3fbde6f6"
                                            data-link="a-1db89ce9"
                                        >
                                            Privacy Policy
                                        </a>
                                    </Link>
                                    <Link href="/toc">
                                        <a
                                            className="footer_legal-link"
                                            data-text="tn7fe2d65b"
                                            data-link="a2262b174"
                                        >
                                            Terms and conditions
                                        </a>
                                    </Link>
                                    <Link href="/#prequal-form">
                                        <a
                                            className="footer_legal-link footer_begin_qualifying"
                                            data-text="tn50f55a74"
                                            data-link="a5ac3fee2"
                                        >
                                            Begin Qualifying
                                        </a>
                                    </Link>
                                    <Link href="/affiliate">
                                        <a className="footer_legal-link" >
                                            Sign Up
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}