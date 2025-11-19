import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-carbon-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.svg" 
            alt="Turijobs" 
            width={152} 
            height={24}
            className="h-6 w-auto"
          />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#intro" className="text-carbon-900 hover:text-peach-700 transition-colors">
            Introducción
          </a>
          <a href="#milestones" className="text-carbon-900 hover:text-peach-700 transition-colors">
            Hitos 2025
          </a>
          <a href="#roadmap" className="text-carbon-900 hover:text-peach-700 transition-colors">
            Roadmap 2026
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-sm text-carbon-600 hover:text-peach-700">
            ES
          </button>
        </div>
      </div>
    </header>
  )
}
