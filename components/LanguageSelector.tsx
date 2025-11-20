'use client'

interface LanguageSelectorProps {
  currentLanguage: string
  onLanguageChange: (lang: string) => void
}

export default function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const languages = [
    { code: 'es', label: 'ES', flag: '🇪🇸' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ]

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-md p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
            currentLanguage === lang.code
              ? 'bg-peach-700 text-white font-bold'
              : 'bg-transparent text-carbon-600 hover:bg-carbon-100'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="text-lg">{lang.flag}</span>
          <span className="text-sm font-medium">{lang.label}</span>
        </button>
      ))}
    </div>
  )
}
