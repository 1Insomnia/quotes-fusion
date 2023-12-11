import PropTypes from "prop-types"
import clsx from "clsx"

export default function Section({ children, container = false, cn }) {
  return (
    <section className={clsx("py-12 lg:py-24")}>
      <div className={clsx(container && "container", cn)}>{children}</div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  cn: PropTypes.string,
  container: PropTypes.bool
}
