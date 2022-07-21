import Testimonial from "./Testimonial"
import BeginQualifyButton from "./BeginQualifyButton"

export default function Testimonials() {
    return (
        <section className="section-testimonials">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                        <div className="margin-bottom margin-xxlarge">
                            <div className="max-width-large">
                                <div className="margin-bottom margin-small">
                                    <h2 data-text="tn23837a3a">Still not sold?</h2>
                                </div>
                                <p className="text-size-medium" data-text="tn6d02ee94">
                                    Check out these happy business owner reviews!
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-medium">
                            <div className="testimonial_component">
                                <Testimonial
                                    clientMessage='"My accountant told me we didn&lsquo;t qualify, but Tax Rebate Solutions helped our company get the ERC refund for 8 of our 10 employees."'
                                    clientName='Mitchell W.'
                                    clientAddress='Staten Island'
                                />
                                <Testimonial
                                    clientMessage='"Our business received over $100,000 in Employee Retention Credit! Tax Rebate Solutions made the process simple for me."'
                                    clientName='William F.'
                                    clientAddress='Brooklyn'
                                />
                                <Testimonial
                                    clientMessage='"TRS knows how to simplify the process and review applications so businesses get the maximum funds possible. We received $627,500 in ERC!"'
                                    clientName='Mary T.'
                                    clientAddress='Philadelphia'
                                />

                            </div>
                        </div>
                        <div className="margin-top margin-small">
                            <div className="button-row">
                                <div className="button-wrapper">
                                    <BeginQualifyButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}