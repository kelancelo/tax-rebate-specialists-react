import Link from "next/link"
import Head from "next/head"

export default function Affiliate() {
    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <section className="section-legal">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="padding-vertical padding-xxhuge">
                            <div className="max-width-large">
                                <div className="margin-bottom margin-small contento">
                                    <h2>Sign Up</h2>
                                    <div className="dashboard-section dashboard-section-registration">
                                        <p>
                                            If you are not an affiliate, you can join the affiliate program
                                            here:{" "}
                                        </p>
                                        <div
                                            className="affiliates-registration"
                                            id="affiliates-registration"
                                        >
                                            <img
                                                id="affiliates-registration-throbber"
                                                src="/wp-content/plugins/affiliates/images/affiliates-throbber.gif"
                                                style={{ display: "none" }}
                                            />
                                            <form id="affiliates-registration-form" method="post">
                                                <div>
                                                    <div className="field">
                                                        <label>
                                                            Web Handle{" "}
                                                            <input
                                                                type="text"
                                                                className="user_login required "
                                                                name="user_login"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Email{" "}
                                                            <input
                                                                type="text"
                                                                className="user_email required "
                                                                name="user_email"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            First Name{" "}
                                                            <input
                                                                type="text"
                                                                className="first_name required "
                                                                name="first_name"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Last Name{" "}
                                                            <input
                                                                type="text"
                                                                className="last_name required "
                                                                name="last_name"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Business Name{" "}
                                                            <input
                                                                type="text"
                                                                className="business_name"
                                                                name="business_name"
                                                                defaultValue=""
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Street Address{" "}
                                                            <input
                                                                type="text"
                                                                className="streetaddress required "
                                                                name="streetaddress"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            City{" "}
                                                            <input
                                                                type="text"
                                                                className="city required "
                                                                name="city"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            State{" "}
                                                            <input
                                                                type="text"
                                                                className="state required "
                                                                name="state"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Zip{" "}
                                                            <input
                                                                type="text"
                                                                className="zip required "
                                                                name="zip"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            SSN or EIN{" "}
                                                            <input
                                                                type="text"
                                                                className="ein_social required "
                                                                name="ein_social"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Date of Birth{" "}
                                                            <input
                                                                type="text"
                                                                className="date_of_birth required "
                                                                name="date_of_birth"
                                                                defaultValue=""
                                                                required="required"
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Mobile{" "}
                                                            <input
                                                                type="text"
                                                                className="mobile required "
                                                                name="mobile"
                                                                defaultValue=""
                                                                required="required"
                                                                maxLength={11}
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="field">
                                                        <label>
                                                            Sponsor{" "}
                                                            <input
                                                                type="text"
                                                                className="sponsor"
                                                                name="sponsor"
                                                                defaultValue=""
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="terms">
                                                        By signing up, you indicate that you have read and agree
                                                        to the{" "}
                                                        <Link href="/agreement">
                                                            <a target="_blank" style={{textDecoration: 'underline'}}>
                                                                Agreement
                                                            </a>
                                                        </Link>
                                                        .
                                                    </div>
                                                    <input
                                                        name="lmfao"
                                                        id="lmfao"
                                                        className="lmfao field"
                                                        style={{ display: "none" }}
                                                        defaultValue=""
                                                        type="text"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        id="affiliates-registration-nonce"
                                                        name="affiliates-registration-nonce"
                                                        defaultValue="756e6435e2"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="_wp_http_referer"
                                                        defaultValue="/affiliate/"
                                                    />
                                                    <div className="sign-up">
                                                        <input
                                                            type="submit"
                                                            name="affiliates-registration-submit"
                                                            defaultValue="Sign Up"
                                                        />
                                                    </div>
                                                </div>
                                                <input
                                                    type="hidden"
                                                    name="affiliate"
                                                    defaultValue="taxrebates1"
                                                />
                                            </form>
                                        </div>{" "}
                                    </div>
                                    <style
                                        type="text/css"
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                "\n.dashboard-section-registration {\n\tmargin: 4px;\n}\n"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}