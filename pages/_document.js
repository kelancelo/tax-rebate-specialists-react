import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="/wp-content/themes/tax-rebate-specialists/assets/images/favicon.png?v=1654969985"
                    rel="shortcut icon"
                    type="image/x-icon"
                />
                <link
                    href="/wp-content/themes/tax-rebate-specialists/assets/images/webclip.png?v=1654969985"
                    rel="apple-touch-icon"
                />
                {/* <link
                    rel="stylesheet"
                    id="normalize-css"
                    href="/wp-content/themes/tax-rebate-specialists/assets/css/normalize.css"
                    media="all"
                />
                <link
                    rel="stylesheet"
                    id="webflow-css"
                    href="/wp-content/themes/tax-rebate-specialists/assets/css/webflow.css"
                    media="all"
                />
                <link
                    rel="stylesheet"
                    id="tax-rebate-specialistswebflow-css"
                    href="/wp-content/themes/tax-rebate-specialists/assets/css/tax-rebate-specialists.webflow.css"
                    media="all"
                />
                <link
                    rel="stylesheet"
                    id="wp-block-library-css"
                    href="/wp-includes/css/dist/block-library/style.css"
                    media="all"
                />
                <link
                    rel="stylesheet"
                    id="affiliates-css"
                    href="/wp-content/plugins/affiliates/css/affiliates.css"
                    media="all"
                /> */}
                <style
                    id="wp-custom-css"
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    .section-header {\n      background-color: #FEF6F0;\n    }\n\n    footer .footer_legal-link {\n      color: #FFF;\n      text-decoration: none;\n    }\n\n    form#affiliates-registration-form {\n      max-width: 450px;\n    }\n\n    form#affiliates-registration-form input,\n    form#loginform input {\n      height: auto;\n      min-height: 2.75rem;\n      margin-bottom: 0px;\n      padding: 0.5rem 0.75rem;\n      border-style: solid;\n      border-width: 1px;\n      border-color: #414141;\n      background-color: #fff;\n      color: #414141;\n      font-size: 1rem;\n      line-height: 1.6;\n    }\n\n    form#affiliates-registration-form input[type=submit],\n    form#loginform input[type=submit] {\n      padding: 0.75rem 1.5rem;\n      border-style: solid;\n      border-width: 1px;\n      border-color: #03a63c;\n      border-radius: 0.5rem;\n      background-color: #03a63c;\n      box-shadow: 0 0 20px 0 transparent;\n      -webkit-transform: translate(0px, 0px);\n      -ms-transform: translate(0px, 0px);\n      transform: translate(0px, 0px);\n      -webkit-transition: box-shadow 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n      transition: box-shadow 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n      transition: box-shadow 500ms ease-in-out, transform 500ms ease-in-out;\n      transition: box-shadow 500ms ease-in-out, transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n      color: #fff;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .section-plain {\n      height: 100%;\n    }\n\n    .fs-cc-components {\n      display: none;\n    }\n\n    .form-input.is-select-input {\n      background: #FFF;\n    }\n\n    span.required {\n      color: #f27405;\n    }\n  "
                    }}
                />
                {/* Chat widget*/}
                <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n    :root {\n      --b-100: #F2F3F7;\n    }\n\n    .woot-widget-holder {\n      box-shadow: 0 5px 40px rgba(0, 0, 0, .16);\n      opacity: 1;\n      will-change: transform, opacity;\n      transform: translateY(0);\n      overflow: hidden !important;\n      position: fixed !important;\n      transition: opacity 0.2s linear, transform 0.25s linear;\n      z-index: 2147483000 !important;\n    }\n\n    .woot-widget-holder.woot-widget-holder--flat {\n      box-shadow: none;\n      border-radius: 0;\n      border: 1px solid var(--b-100);\n    }\n\n    .woot-widget-holder iframe {\n      border: 0;\n      height: 100% !important;\n      width: 100% !important;\n      max-height: 100vh !important;\n    }\n\n    .woot-widget-holder.has-unread-view {\n      border-radius: 0 !important;\n      min-height: 80px !important;\n      height: auto;\n      bottom: 94px;\n      box-shadow: none !important;\n      border: 0;\n    }\n\n    .woot-widget-bubble {\n      background: #1f93ff;\n      border-radius: 100px;\n      border-width: 0px;\n      bottom: 20px;\n      box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;\n      cursor: pointer;\n      height: 64px;\n      padding: 0px;\n      position: fixed;\n      user-select: none;\n      width: 64px;\n      z-index: 2147483000 !important;\n    }\n\n    .woot-widget-bubble.woot-widget-bubble--flat {\n      border-radius: 0;\n    }\n\n    .woot-widget-holder.woot-widget-holder--flat {\n      bottom: 90px;\n    }\n\n    .woot-widget-bubble.woot-widget-bubble--flat {\n      height: 56px;\n      width: 56px;\n    }\n\n    .woot-widget-bubble.woot-widget-bubble--flat img {\n      margin: 16px;\n    }\n\n    .woot-widget-bubble.woot-widget-bubble--flat.woot--close::before,\n    .woot-widget-bubble.woot-widget-bubble--flat.woot--close::after {\n      left: 28px;\n      top: 16px;\n    }\n\n    .woot-widget-bubble.unread-notification::after {\n      content: '';\n      position: absolute;\n      width: 12px;\n      height: 12px;\n      background: #ff4040;\n      border-radius: 100%;\n      top: 0px;\n      right: 0px;\n      border: 2px solid #ffffff;\n      transition: background 0.2s ease;\n    }\n\n    .woot-widget-bubble.woot-widget--expanded {\n      bottom: 24px;\n      display: flex;\n      height: 48px !important;\n      width: auto !important;\n      align-items: center;\n    }\n\n    .woot-widget-bubble.woot-widget--expanded div {\n      align-items: center;\n      color: #fff;\n      display: flex;\n      font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif;\n      font-size: 16px;\n      font-weight: 500;\n      justify-content: center;\n      padding-right: 20px;\n      width: auto !important;\n    }\n\n    .woot-widget-bubble.woot-widget--expanded img {\n      height: 20px;\n      margin: 14px 8px 14px 16px;\n      width: 20px;\n    }\n\n    .woot-widget-bubble.woot-elements--left {\n      left: 20px;\n    }\n\n    .woot-widget-bubble.woot-elements--right {\n      right: 20px;\n    }\n\n    .woot-widget-bubble:hover {\n      background: #1f93ff;\n      box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;\n    }\n\n    .woot-widget-bubble img {\n      all: revert;\n      height: 24px;\n      margin: 20px;\n      width: 24px;\n    }\n\n    @media only screen and (min-width: 667px) {\n      .woot-widget-holder.woot-elements--left {\n        left: 20px;\n      }\n\n      .woot-widget-holder.woot-elements--right {\n        right: 20px;\n      }\n    }\n\n    .woot--close:hover {\n      opacity: 1;\n    }\n\n    .woot--close::before,\n    .woot--close::after {\n      background-color: #fff;\n      content: ' ';\n      display: inline;\n      height: 24px;\n      left: 32px;\n      position: absolute;\n      top: 20px;\n      width: 2px;\n    }\n\n    .woot--close::before {\n      transform: rotate(45deg);\n    }\n\n    .woot--close::after {\n      transform: rotate(-45deg);\n    }\n\n    .woot--hide {\n      bottom: -100vh !important;\n      transform: translateY(40px);\n      top: unset !important;\n      opacity: 0;\n      visibility: hidden !important;\n      z-index: -1 !important;\n    }\n\n    .woot-widget--without-bubble {\n      bottom: 20px !important;\n    }\n\n    @media only screen and (max-width: 667px) {\n      .woot-widget-holder {\n        height: 100%;\n        right: 0;\n        top: 0;\n        width: 100%;\n      }\n\n      .woot-widget-holder iframe {\n        min-height: 100% !important;\n      }\n\n\n      .woot-widget-holder.has-unread-view {\n        height: auto;\n        right: 0;\n        width: auto;\n        bottom: 0;\n        top: auto;\n        max-height: 100vh;\n        padding: 0 8px;\n      }\n\n      .woot-widget-holder.has-unread-view iframe {\n        min-height: unset !important;\n      }\n\n      .woot-widget-holder.has-unread-view.woot-elements--left {\n        left: 0;\n      }\n\n      .woot-widget-bubble.woot--close {\n        bottom: 60px;\n        opacity: 0;\n        visibility: hidden !important;\n        z-index: -1 !important;\n      }\n    }\n\n    @media only screen and (min-width: 667px) {\n      .woot-widget-holder {\n        border-radius: 16px;\n        bottom: 104px;\n        height: calc(85% - 64px - 20px);\n        max-height: 590px !important;\n        min-height: 250px !important;\n        width: 400px !important;\n      }\n    }\n\n    .woot-hidden {\n      display: none !important;\n    }\n  "
                    }}
                />
                <script defer src="/wp-content/themes/tax-rebate-specialists/assets/js/main.js"></script>
            </Head>
            <body className="home page-template-default page page-id-107 wp-embed-responsive">
                <div className="page-wrapper">
                    <div className="global-styles w-embed" sym="true">
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    '\n        /* Snippet gets rid of top margin on first element in any rich text*/\n        .w-richtext>:first-child {\n          margin-top: 0;\n        }\n\n        /* Snippet gets rid of bottom margin on last element in any rich text*/\n        .w-richtext>:last-child,\n        .w-richtext ol li:last-child,\n        .w-richtext ul li:last-child {\n          margin-bottom: 0;\n        }\n\n        /* Snippet makes all link elements listed below to inherit color from their parent */\n        a,\n        .w-tab-link,\n        .w-nav-link,\n        .w-dropdown-btn,\n        .w-dropdown-toggle,\n        .w-dropdown-link {\n          color: inherit;\n        }\n\n        /* Snippet prevents all click and hover interaction with an element */\n        .clickable-off {\n          pointer-events: none;\n        }\n\n        /* Snippet enables all click and hover interaction with an element */\n        .clickable-on {\n          pointer-events: auto;\n        }\n\n        /* Snippet enables you to add class of div-square which creates and maintains a 1:1 dimension of a div.*/\n        .div-square::after {\n          content: "";\n          display: block;\n          padding-bottom: 100%;\n        }\n\n        /*Hide focus outline for main content element*/\n        main:focus-visible {\n          outline: -webkit-focus-ring-color auto 0px;\n        }\n\n        /* Make sure containers never lose their center alignment*/\n        .container-medium,\n        .container-small,\n        .container-large {\n          margin-right: auto !important;\n          margin-left: auto !important;\n        }\n\n        /*Reset selects, buttons, and links styles*/\n        .w-input,\n        .w-select,\n        a {\n          color: inherit;\n          text-decoration: inherit;\n          font-size: inherit;\n        }\n\n        /*Apply "..." after 3 lines of text */\n        .text-style-3lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 3;\n          -webkit-box-orient: vertical;\n        }\n\n        /* Apply "..." after 2 lines of text */\n        .text-style-2lines {\n          display: -webkit-box;\n          overflow: hidden;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n        }\n\n        /* Apply "..." at 100% width */\n        .truncate-width {\n          width: 100%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n\n        /* Removes native scrollbar */\n        .no-scrollbar {\n          -ms-overflow-style: none;\n          overflow: -moz-scrollbars-none;\n        }\n\n        .no-scrollbar::-webkit-scrollbar {\n          display: none;\n        }\n      '
                            }}
                        />
                    </div>
                    <main className="main-wrapper">
                        <Main />
                        <NextScript />
                    </main>
                </div>
            </body>
        </Html>
    )
}
