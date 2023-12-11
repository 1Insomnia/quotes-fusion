"use client"

import PropTypes from "prop-types"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

export default function NavLink({ href, text, cn }) {
  const pathName = usePathname()
  const activePath = pathName.split("/").filter(path => path)[0]

  return (
    <Link
      href={`/${href}`}
      className={clsx("nav-link", activePath === href && "active", cn)}
    >
      {text}
    </Link>
  )
}

NavLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  cn: PropTypes.string
}
