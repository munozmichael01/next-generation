export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Turijobs */}
          <div>
            <h3 className="font-bold font-abcgintonord text-white mb-4">Turijobs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Quiénes somos</a></li>
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Contacto</a></li>
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="font-bold font-abcgintonord text-white mb-4">Empresas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Servicios</a></li>
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Índice de empresas</a></li>
            </ul>
          </div>

          {/* Candidatos */}
          <div>
            <h3 className="font-bold font-abcgintonord text-white mb-4">Candidatos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Buscar empleo</a></li>
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Salarios</a></li>
            </ul>
          </div>

          {/* Formación */}
          <div>
            <h3 className="font-bold font-abcgintonord text-white mb-4">Formación</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Cursos</a></li>
              <li><a href="#" className="text-carbon-400 hover:text-peach-300 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-deep-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-carbon-400 text-sm mb-4 md:mb-0">
            © {currentYear} Turijobs - Product & Technology Team
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-carbon-400 hover:text-peach-300 text-sm transition-colors">Política de privacidad</a>
            <a href="#" className="text-carbon-400 hover:text-peach-300 text-sm transition-colors">Aviso legal</a>
            <a href="#" className="text-carbon-400 hover:text-peach-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
