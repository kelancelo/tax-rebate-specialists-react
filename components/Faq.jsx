import { useState } from "react"

export default function Faq({ question, answer }) {
    const [open, setOpen] = useState(false)
    let imgStyles

    if (open) {
        imgStyles = {
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg)",
            transformStyle: "preserve-3d"
        }
    }
    else {
        imgStyles = {
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
            transformStyle: "preserve-3d"
        }
    }

    return (
        <div className="faq_accordion">
            <div
                className="faq_question"
            >
                <div
                    className="text-size-medium text-weight-bold"
                >
                    {question}
                </div>
                <img
                    src="wp-content/themes/tax-rebate-specialists/assets/images/icon_plus.svg"
                    loading="lazy"
                    alt=""
                    className="faq_icon"
                    data-img="i2f4ef33c"
                    srcSet=""
                    style={{...imgStyles, transition: 'transform 250ms', cursor: 'pointer'}}
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div
                style={{ width: "100%", maxHeight: open ? '20rem' : 0, transition: 'max-height 250ms' }}
                className="faq_answer"
            >
                <div className="margin-bottom margin-small">
                    <div className="max-width-large">
                        <p>
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}