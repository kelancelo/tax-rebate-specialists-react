import Link from "next/link"
import BeginQualifyButton from "./BeginQualifyButton"

export default function Navbar() {
    return (
        <div
            data-animation="default"
            className="navbar_component w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="all"
            data-w-id="10c2d423-90ae-f300-8299-3e61b29d8e3a"
            role="banner"
            data-duration={400}
            data-doc-height={1}
            sym="true"
        >
            <div className="container-large">
                <div className="navbar_container">
                    <Link
                        href="/"
                    >
                        <a
                            aria-current="page"
                            className="navbar_logo-link w-nav-brand w--current"
                            data-link="a2f"
                            aria-label="home"
                        >
                            <img
                                src="/wp-content/themes/tax-rebate-specialists/assets/images/trs-logo-white-horizontal.svg"
                                loading="lazy"
                                alt="Tax Rebate Specialists logo"
                                className="navbar_logo"
                                data-img="in43925152"
                            />
                        </a>
                    </Link>
                    <div className="navbar_wrapper hide-mobile-landscape">
                        <BeginQualifyButton id="cta-green" />
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0" />
        </div>

    )
}