import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Isares Khamwirai (Naeem) | Portfolio",
  description: "Turning ideas into code.",
  themeColor:"#111111",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#111] text-zinc-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
