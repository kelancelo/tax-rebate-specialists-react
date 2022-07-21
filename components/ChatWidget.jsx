import { useState } from "react"

export default function ChatWidget() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={` woot-widget-holder woot-elements--right ${!open && 'woot--hide'}`}>
                <iframe
                    src="https://chat.taxrebatespecialists.com/widget?website_token=bFFCodeSmD27PLpBZNTbTbP8&cw_conversation=eyJhbGciOiJIUzI1NiJ9.eyJzb3VyY2VfaWQiOiIwMTU5NjY4ZC02YmFmLTQ3MjItOGM4OS0yNTA3YTMyN2MzNTUiLCJpbmJveF9pZCI6Nn0.VoAuguy1wG0jblM2S3KpqKwIr3H4Y56SUUOFUUTeFiQ"
                    id="chatwoot_live_chat_widget"
                    style={{}}
                >
                </iframe>
            </div>

            <div className=" woot--bubble-holder">
                <button
                    className={`woot-widget-bubble woot-elements--right ${open && 'woot--hide'}`}
                    style={{ background: "rgb(3, 166, 60) none repeat scroll 0% 0%" }}
                    onClick={() => setOpen(true)}
                >
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg=="
                        alt="bubble-icon"
                    />
                </button>
                <button
                    className={` woot-elements--right woot-widget-bubble woot--close ${!open && 'woot--hide'}`}
                    style={{ background: "rgb(3, 166, 60) none repeat scroll 0% 0%" }}
                    onClick={() => setOpen(false)}
                />
                <span className=" woot--notification" />
            </div>

        </>
    )
}