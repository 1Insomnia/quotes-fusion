import HeroImg from "./hero.png"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="h-screen-cropped">
      <h1 className="text-center leading-tight font-black p-6 hero-title">
        A Treasury of Timeless Quotations
      </h1>
      <p className="text-center text-foreground-light p-6 text-lg">
        Embark on a journey through time with HQ. Explore
        <strong> profound</strong> historical quotes that encapsulate the
        essence of bygone eras. Uncover the <strong>wisdom </strong>
        and echoes of our shared past.
      </p>
      <div></div>
      {/* <Image alt="old map" src={HeroImg} className="hero-img" /> */}
    </div>
  )
}
