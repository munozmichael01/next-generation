import Image from 'next/image'
import Link from 'next/link'
import { Language, getTranslation } from '@/lib/translations'

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const t = (key: string) => getTranslation(language, key as any)

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
            {t('introTitle')}
          </a>
          <a href="#milestones" className="text-carbon-900 hover:text-peach-700 transition-colors">
            {t('milestonesPreviewTitle')}
          </a>
          <a href="#roadmap" className="text-carbon-900 hover:text-peach-700 transition-colors">
            {t('roadmapTitle')}
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onLanguageChange('es')}
            className={`text-sm ${language === 'es' ? 'text-peach-700 font-bold' : 'text-carbon-600'} hover:text-peach-700 transition-colors`}
          >
            ES
          </button>
          <span className="text-carbon-300">|</span>
          <button
            onClick={() => onLanguageChange('en')}
            className={`text-sm ${language === 'en' ? 'text-peach-700 font-bold' : 'text-carbon-600'} hover:text-peach-700 transition-colors`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  )
}
