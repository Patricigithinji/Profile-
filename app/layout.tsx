import "./globals.css"

export const metadata = {
  title: "Frontend Engineer",
  description: "Building fast, scalable, and thoughtful web interfaces.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  )
}
