// Comps
import NavLink from "./NavLink"

const links = [
  {
    id: 1,
    text: "Quotes",
    href: "quotes"
  },
  {
    id: 2,
    text: "Authors",
    href: "authors"
  }
]

export default function Header() {
  return (
    <header className="sticky top-0 header text-background-neutral bg-foreground font-sans">
      <div className="container">
        <div className="h-16 flex items-center justify-between">
          <NavLink href="" text="NF" cn="font-bold nav-link" />
          <ul className="flex items-center h-full">
            {links.map(link => (
              <li className="h-full" key={link.id}>
                <NavLink href={link.href} text={link.text} cn="text-sm mx-2" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
