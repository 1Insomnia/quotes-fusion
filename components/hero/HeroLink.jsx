import PropTypes from "prop-types"
import clsx from "clsx"
import Link from "next/link"

function HeroLink({ href, text }) {
  return (
    <Link
      href={href}
      className={clsx(
        "text-background-neutral bg-background-contrast",
        "inline-block py-3 px-6",
        "font-bold tracking-wide",
        "hover:bg-background-contrast-hover"
      )}
    >
      {text}
    </Link>
  )
}
export default HeroLink

HeroLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}
