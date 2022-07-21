import Link from "next/link"

export default function BeginQualifyButton({ id, className }) {
    return (
        <Link href="/#prequal-form">
            <a
                id={id}
                className={"button w-button" + ' ' + className}
                data-text="t3838c96c"
                data-link="a5ac3fee2"
            >
                Begin qualifying
            </a>
        </Link>
    )
}