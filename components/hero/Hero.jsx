import HeroImg from "./hero.png"
import Image from "next/image"
import HeroLink from "@/components/hero/HeroLink"

export default function Hero() {
  return (
    <div className="h-screen-cropped">
      <h1 className="text-center leading-tight font-black p-6 hero-title">
        A Treasury of Timeless Quotations
      </h1>
      <p className="text-center text-foreground-light p-6 text-lg font-serif">
        Embark on a journey through time with HQ. Explore
        <strong> profound</strong> historical quotes that encapsulate the
        essence of bygone eras. Uncover the <strong>wisdom </strong>
        and echoes of our shared past.
      </p>
      <Image alt="old map" src={HeroImg} className="hero-img h-screen-1/2" />
      <h2 className="p-6 text-center">Browse our content by</h2>
      <div>
        <HeroLink href="/quotes" text="Quotes" />
        <HeroLink href="/authors" text="Authors" />
        <HeroLink href="/topics" text="Topics" />
      </div>
    </div>
  )
}
