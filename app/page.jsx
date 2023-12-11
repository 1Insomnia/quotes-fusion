import HomeTextDisplay from "@/components/HomeTextDisplay"
import Section from "@/components/Section"

export default function Home() {
  return (
    <>
      <Section container={true}>
        <h1 className="text-center leading-tight font-black inktrap mt-12">
          A Treasury of Timeless Quotations
        </h1>
        <p className="text-center text-foreground-light mt-12 text-lg">
          Embark on a journey through time with HQ. Explore
          <strong> profound</strong> historical quotes that encapsulate the
          essence of bygone eras. Uncover the <strong>wisdom </strong>
          and echoes of our shared past.
        </p>
      </Section>
      <Section
        container={true}
        cn="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <HomeTextDisplay href="/quotes" title="Quotes" data={12000} />
        <HomeTextDisplay href="/authors" title="Authors" data={2000} />
      </Section>
    </>
  )
}
