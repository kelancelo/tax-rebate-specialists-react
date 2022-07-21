import { useRef, useEffect, useState } from "react"

export default function Form() {
    const formRef = useRef(null)
    const [qualifyingReason, setQualifyingReason] = useState('')
    const [textInputs, setTextInputs] = useState({
        'prequal-business-name': '',
        'prequal-first-name': '',
        'prequal-last-name': '',
        'prequal-job-title': '',
        'prequal-job-phone': '',
        'email': '',
        'employee-count-2020': '',
        'employee-count-2021': ''
    })

    function handleChange(e, type) {
        if (type === 'radio') setQualifyingReason(e.target.value)
        else setTextInputs(prevVal => ({ ...prevVal, [e.target.name]: e.target.value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(JSON.stringify({ ...textInputs, qualifyingReason }))
        setQualifyingReason('')
        setTextInputs({
            'prequal-business-name': '',
            'prequal-first-name': '',
            'prequal-last-name': '',
            'prequal-job-title': '',
            'prequal-job-phone': '',
            'email': '',
            'employee-count-2020': '',
            'employee-count-2021': ''
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in')
                    observer.unobserve(entry.target)
                }
            })
        })

        for (const child of formRef.current.querySelectorAll('.input-div')) {
            observer.observe(child)
        }
    }, [])

    return (
        <section id="prequal-form" className="section-prequal-form">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xhuge">
                        <div className="margin-bottom margin-large">
                            <div className="max-width-large">
                                <div className="margin-bottom margin-small">
                                    <h2 data-text="tn58993a9e">Begin to qualify!</h2>
                                </div>
                                <p className="text-size-medium" data-text="t1f18868">
                                    Fill out this brief pre-qualification form to see if you qualify
                                    and get an estimate of your potential Employee Retention Credit
                                    (ERC) rebate.
                                </p>
                            </div>
                        </div>
                        <div className="max-width-large">
                            <div className="prequal-form_component w-form">
                                <form
                                    id="wf-form-Prequal-Form"
                                    name="wf-form-Prequal-Form"
                                    data-name="Prequal Form"
                                    className="prequal_form"
                                    aria-label="Prequal Form"
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                >
                                    <div
                                        data-w-id="49d16183-8fa6-f891-274b-17c24c993740"
                                        style={{
                                            opacity: 0,
                                            transform: "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-wrapper input-div"
                                    >
                                        <label
                                            htmlFor="prequal-business-name"
                                            className="field-label"
                                        >
                                            Business name*
                                        </label>
                                        <input
                                            type="text"
                                            className="employee-counter-2020-input w-input"
                                            maxLength={256}
                                            name="prequal-business-name"
                                            data-name="Prequal Business Name"
                                            id="Prequal-Business-Name"
                                            required
                                            value={textInputs['prequal-business-name']}
                                            onChange={(e) => handleChange(e, 'text')}
                                        />
                                    </div>
                                    <div
                                        data-w-id="b0bdb7c8-d55b-be50-cc1f-d543e800fa1d"
                                        style={{
                                            opacity: 0,
                                            transform:
                                                "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-2col input-div"
                                    >
                                        <div className="form-field-wrapper">
                                            <label htmlFor="prequal-first-name" className="field-label">
                                                First name*
                                            </label>
                                            <input
                                                type="text"
                                                className="employee-counter-2020-input w-input"
                                                maxLength={256}
                                                name="prequal-first-name"
                                                data-name="Prequal First Name"
                                                placeholder=""
                                                id="Prequal-First-Name"
                                                required
                                                value={textInputs['prequal-first-name']}
                                                onChange={(e) => handleChange(e, 'text')}
                                            />
                                        </div>
                                        <div className="form-field-wrapper">
                                            <label htmlFor="prequal-last-name" className="field-label">
                                                Last name*
                                            </label>
                                            <input
                                                type="text"
                                                className="employee-counter-2020-input w-input"
                                                maxLength={256}
                                                name="prequal-last-name"
                                                data-name="Prequal Last Name"
                                                placeholder=""
                                                id="Prequal-Last-Name"
                                                required
                                                value={textInputs['prequal-last-name']}
                                                onChange={(e) => handleChange(e, 'text')}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        data-w-id="51a22b03-a56b-1bfb-212d-9cb5de769efd"
                                        style={{
                                            opacity: 0,
                                            transform:
                                                "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-wrapper input-div"
                                    >
                                        <label htmlFor="prequal-job-title" className="field-label">
                                            Job title*
                                        </label>
                                        <input
                                            type="text"
                                            className="employee-counter-2020-input w-input"
                                            maxLength={256}
                                            name="prequal-job-title"
                                            data-name="Prequal Job Title"
                                            placeholder=""
                                            id="Prequal-Job-Title"
                                            required
                                            value={textInputs['prequal-job-title']}
                                            onChange={(e) => handleChange(e, 'text')}
                                        />
                                    </div>
                                    <div
                                        data-w-id="9943b326-1582-6303-3c61-61bcf1fd9acc"
                                        style={{
                                            opacity: 0,
                                            transform:
                                                "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-wrapper input-div"
                                    >
                                        <label htmlFor="prequal-job-phone" className="field-label">
                                            Mobile phone*
                                        </label>
                                        <input
                                            type="tel"
                                            className="employee-counter-2020-input w-input"
                                            maxLength={10}
                                            name="prequal-job-phone"
                                            data-name="Prequal Job Phone"
                                            placeholder="888-123-4567"
                                            id="Prequal-Job-Phone"
                                            required
                                            value={textInputs['prequal-job-phone']}
                                            onChange={(e) => handleChange(e, 'text')}
                                        />
                                    </div>
                                    <div
                                        data-w-id="bf56c478-b69b-4009-7546-6ae1055a17cd"
                                        style={{
                                            opacity: 0,
                                            transform:
                                                "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-wrapper input-div"
                                    >
                                        <label htmlFor="prequal-email" className="field-label">
                                            Email*
                                        </label>
                                        <input
                                            type="email"
                                            className="employee-counter-2020-input w-input"
                                            maxLength={256}
                                            name="email"
                                            data-name="Prequal Email"
                                            placeholder="johnsmith@samplecompany.org"
                                            id="Prequal-Email"
                                            required
                                            value={textInputs['email']}
                                            onChange={(e) => handleChange(e, 'text')}
                                        />
                                    </div>
                                    <input
                                        type="hidden"
                                        className=""
                                        maxLength={256}
                                        name="affiliate-referrer"
                                        data-name="Affiliate Referrer"
                                        id="Affiliate-Referrer"
                                        defaultValue="taxrebatespecialists"
                                    />
                                    <input
                                        type="hidden"
                                        name="affiliate"
                                        defaultValue="taxrebates1"
                                    />
                                    <div className="margin-bottom margin-0">
                                        <div className="text-size-large text-weight-bold">
                                            Did you experience one of the following in 2020 or 2021?
                                        </div>
                                        <p>
                                            Check the box that best describes how COVID regulations
                                            affected your business. (Note: Only one reason is necessary
                                            to qualify.)
                                        </p>
                                    </div>
                                    <div className="margin-bottom margin-xsmall">
                                        <div
                                            data-w-id="bdc64751-21ad-e9e3-bba0-997e9db6e559"
                                            style={{
                                                opacity: 0,
                                                transform: "translateX(25%)",
                                                transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                            }}
                                            className="w-layout-grid prequal-form-radio-2col input-div"
                                        >
                                            <label className="prequal-form-radio">
                                                <input
                                                    type="radio"
                                                    name="qualifying-reason"
                                                    id="Full-or-partial-closure"
                                                    value="Full or partial closure"
                                                    data-name="Qualifying Reason"
                                                    checked={qualifyingReason === 'Full or partial closure'}
                                                    onChange={(e) => handleChange(e, 'radio')}
                                                />
                                                <span
                                                    htmlFor="Full-or-partial-closure"
                                                    className="prequal-form-radio-label"
                                                >
                                                    Full or partial closure
                                                </span>
                                            </label>
                                            <label className="prequal-form-radio ">
                                                <input
                                                    type="radio"
                                                    name="qualifying-reason"
                                                    id="Supply-chain-disruption"
                                                    value="Supply chain disruption"
                                                    data-name="Qualifying Reason"
                                                    checked={qualifyingReason === 'Supply chain disruption'}
                                                    onChange={(e) => handleChange(e, 'radio')}
                                                />
                                                <span
                                                    htmlFor="Supply-chain-disruption"
                                                    className="prequal-form-radio-label"
                                                >
                                                    Supply chain disruption
                                                </span>
                                            </label>
                                            <label className="prequal-form-radio ">
                                                <input
                                                    type="radio"
                                                    name="qualifying-reason"
                                                    id="Reduced-revenue"
                                                    value="Reduced revenue"
                                                    data-name="Qualifying Reason"
                                                    checked={qualifyingReason === 'Reduced revenue'}
                                                    onChange={(e) => handleChange(e, 'radio')}
                                                />
                                                <span
                                                    htmlFor="Reduced-revenue"
                                                    className="prequal-form-radio-label"
                                                >
                                                    Reduced revenue
                                                </span>
                                            </label>
                                            <label className="prequal-form-radio ">
                                                <input
                                                    type="radio"
                                                    name="qualifying-reason"
                                                    id="Does-not-apply"
                                                    value="Does not apply"
                                                    data-name="Qualifying Reason"
                                                    checked={qualifyingReason === 'Does not apply'}
                                                    onChange={(e) => handleChange(e, 'radio')}
                                                />
                                                <span
                                                    htmlFor="Does-not-apply"
                                                    className="prequal-form-radio-label"
                                                >
                                                    Does not apply
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="margin-bottom margin-0">
                                        <div className="text-size-large text-weight-bold">
                                            Average W-2 employee counts
                                        </div>
                                        <p>
                                            The amount calculated is based on an average claimed, if you
                                            were to qualify for all six (6) quarters of the
                                            ERC&nbsp;program, for each employee. (Note: You must have
                                            W-2 employees to qualify.)
                                        </p>
                                    </div>
                                    <div
                                        data-w-id="b11fde49-bdd1-26cc-a904-809c18b5c633"
                                        style={{
                                            opacity: 0,
                                            transform:
                                                "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-wrapper input-div"
                                    >
                                        <label htmlFor="employee-count-2020" className="field-label">
                                            Average number of full-time W-2 employees in 2020?*
                                        </label>
                                        <input
                                            type="text"
                                            className="employee-counter-2020-input w-input"
                                            maxLength={256}
                                            name="employee-count-2020"
                                            data-name="Employee Count 2020"
                                            placeholder={0}
                                            id="employee-count-2020"
                                            required
                                            value={textInputs['employee-count-2020']}
                                            onChange={(e) => handleChange(e, 'text')}

                                        />
                                    </div>
                                    <div
                                        data-w-id="adf2af8d-d107-b553-ac4a-2218b458125f"
                                        style={{
                                            opacity: 0,
                                            transform:
                                                "translateX(25%)",
                                            transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                        }}
                                        className="form-field-wrapper input-div"
                                    >
                                        <label htmlFor="employee-count-2021" className="field-label">
                                            Average number of full-time W-2 employees in 2021*
                                        </label>
                                        <input
                                            type="text"
                                            className="employee-counter-2021-input w-input"
                                            maxLength={256}
                                            name="employee-count-2021"
                                            data-name="Employee Count 2021"
                                            placeholder={0}
                                            id="employee-count-2021"
                                            required
                                            value={textInputs['employee-count-2021']}
                                            onChange={(e) => handleChange(e, 'text')}
                                        />
                                    </div>
                                    <div className="margin-top margin-small">
                                        <div
                                            data-w-id="6985b5d8-2dec-c1f0-8e21-ee6605c1e3db"
                                            style={{
                                                opacity: 0,
                                                transform:
                                                    "translateX(25%)",
                                                transition: "transform 500ms ease-out, opacity 500ms ease-out"
                                            }}
                                            className="potential-rebate input-div"
                                        >
                                            <div className="heading-large rebate-text">
                                                Your potential ERC&nbsp;rebate:
                                            </div>
                                            <div className="added-value-wrapper">
                                                <div className="heading-large rebate-amount dollar-sign">
                                                    $
                                                </div>
                                                <div
                                                    className="employee-added-value"
                                                    id="employee-added-value"
                                                >
                                                    0
                                                </div>
                                                <div className="w-embed">
                                                    <input
                                                        type="hidden"
                                                        className="hack44-send-value"
                                                        val=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="w-node-_9121c1a1-47fb-bb07-cd92-d5d2a2ded74f-0a73ca7f"
                                        className="margin-bottom margin-xsmall"
                                    >
                                        <label
                                            id="w-node-_82cfbf4c-4c83-36d5-b733-645ce4dac2a3-0a73ca7f"
                                            data-w-id="82cfbf4c-4c83-36d5-b733-645ce4dac2a3"
                                            className="w-checkbox form-checkbox input-div"
                                            style={{
                                                opacity: 0,
                                                transform: "translateX(25%)",
                                                transition: "transform 500ms ease-out, opacity 500ms ease-out, opacity 500ms ease-out"
                                            }}
                                        >
                                            <input
                                                type="checkbox"
                                                id="Agree-Checkbox"
                                                name="agree-checkbox"
                                                data-name="Agree Checkbox"
                                                required
                                                className="w-checkbox-input form-checkbox-icon"
                                            />
                                            <span
                                                className="form-checkbox-label text-size-small w-form-label"
                                                htmlFor="Agree-Checkbox"
                                            >
                                                I understand this is an estimate only, based on the
                                                employee counts entered above, and does not represent a
                                                guaranteed amount you will receive, or that you will
                                                qualify for the ERC program.
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        defaultValue="See if I qualify!"
                                        data-wait="Please wait..."
                                        id="w-node-b0bdb7c8-d55b-be50-cc1f-d543e800fa5c-0a73ca7f"
                                        className="button w-button"
                                    >
                                        Submit Query
                                    </button>
                                    <div
                                        style={{ position: "relative", overflow: "hidden" }}
                                        aria-hidden="true"
                                    >
                                        <div style={{ position: "absolute", left: 40000 }}>
                                            <input
                                                type="checkbox"
                                                name="contact_me_by_fax_only"
                                                defaultValue={1}
                                                tabIndex={-1}
                                                autoComplete="nope"
                                                autofill="off"
                                            />
                                        </div>
                                    </div>
                                </form>
                                <div
                                    className="success-message w-form-done"
                                    tabIndex={-1}
                                    role="region"
                                    aria-label="Prequal Form success"
                                >
                                    <div className="success-text" data-text="t5a0ea5a1">
                                        Thank you! Your submission has been received!
                                    </div>
                                </div>
                                <div
                                    className="error-message w-form-fail"
                                    tabIndex={-1}
                                    role="region"
                                    aria-label="Prequal Form failure"
                                >
                                    <div className="error-text" data-text="tn7c112e99">
                                        Oops! Something went wrong while submitting the form.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}