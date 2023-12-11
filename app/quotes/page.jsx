import { client } from "@/lib/client"
// Comps
import Section from "@/components/Section"

export default async function page() {
  const quotes = await client.fetch(
    `*[_type == "quote"]{quote, author->{name, image}}`,
    {
      method: "GET"
    }
  )
  console.log(quotes[0].author.image)

  return (
    <Section container>
      <h1>Quotes</h1>
      <div>
        {quotes.map((quote, index) => (
          <article key={index}>
            <p>&quot;{quote.quote}&quot;</p>
            <h4 className="text-primary-light text-sm">{quote.author.name}</h4>
          </article>
        ))}
      </div>
    </Section>
  )
}
