import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="px-8 py-6 flex gap-6 text-sm text-zinc-400">
      <Link href="/" className="hover:text-white">
        Home
      </Link>
      <Link href="/projects" className="hover:text-white">
        Projects
      </Link>
      <Link href="/about" className="hover:text-white">
        About
      </Link>
    </nav>
  )
}
