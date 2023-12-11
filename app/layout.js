import "./globals.css"
// Comps
import Header from "@/components/nav/Header"

export const metadata = {
  title: "Quotes fusion",
  description: "Historical quotes from the most influencial figures"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-foreground bg-background">
        <Header />
        {children}
      </body>
    </html>
  )
}
