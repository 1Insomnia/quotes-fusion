import "./globals.css"

export const metadata = {
  title: "Quotes fusion",
  description: "Historical quotes from the most influencial figures"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-foreground bg-background">{children}</body>
    </html>
  )
}
