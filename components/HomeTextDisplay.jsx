import Link from "next/link"
import PropTypes from "prop-types"

export default function HomeTextDisplay({ href, title, data }) {
  return (
    <Link
      href={href}
      className="block bg-background-contrast text-center shadow-md py-6 px-12 lg:py-12 lg:px-24 border-4 hover:border-background-neutral hover:shadow-xl transition duration-300 ease"
    >
      <h2 className="inktrap underline text-background-neutral">{title}</h2>
      <p className="text-lg md:text-xl text-background-neutral-active">
        {data.toLocaleString("en-US")}
      </p>
    </Link>
  )
}

HomeTextDisplay.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.number
}
