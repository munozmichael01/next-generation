'use client'

import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return

    try {
      setIsGeneratingPDF(true)

      // Esperar un momento para que el botón se oculte
      await new Promise(resolve => setTimeout(resolve, 100))

      const canvas = await html2canvas(contentRef.current, {
        scale: 1.5, // Balance entre calidad y rendimiento
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF',
      })

      const imgData = canvas.toDataURL('image/jpeg', 0.85) // Balance entre calidad y tamaño
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height

      const ratio = pdfWidth / imgWidth
      const scaledHeight = imgHeight * ratio

      let heightLeft = scaledHeight
      let position = 0

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, scaledHeight, undefined, 'FAST')
      heightLeft -= pdfHeight

      while (heightLeft > 0) {
        position = heightLeft - scaledHeight
        pdf.addPage()
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, scaledHeight, undefined, 'FAST')
        heightLeft -= pdfHeight
      }

      pdf.save('Turijobs-Highlights-2025.pdf')
    } catch (error) {
      console.error('Error generando PDF:', error)
      alert('Hubo un error al generar el PDF. Por favor, intenta nuevamente.')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen pt-16">
        <div ref={contentRef}>
          {/* Hero Section */}
          <section className="bg-white text-carbon-900 py-20 px-6 border-b-4 border-peach-700">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold font-abcgintonord mb-6 text-carbon-900">
                  Turijobs Product & Technology
                </h1>
                <h2 className="text-3xl md:text-4xl font-abcgintonord text-peach-700 mb-8">
                  Highlights 2025
                </h2>
                <p className="text-xl md:text-2xl text-carbon-600 mb-12 max-w-3xl mx-auto">
                  Resumen de avances clave, impacto y hoja de ruta estratégica
                </p>
                {!isGeneratingPDF && (
                  <button
                    onClick={handleDownloadPDF}
                    className="bg-peach-700 hover:bg-peach-300 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    📥 Descargar PDF
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section id="intro" className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-6">
                Introducción
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-carbon-900 leading-relaxed mb-4">
                  Durante 2025, el equipo de Producto y Tecnología de Turijobs ha trabajado en la evolución y mejora continua de nuestra plataforma,
                  con el objetivo de ofrecer la mejor experiencia tanto para candidatos como para empresas en el mercado laboral turístico.
                </p>
                <p className="text-lg text-carbon-900 leading-relaxed">
                  Este documento presenta los principales hitos alcanzados, el impacto generado y nuestra visión estratégica para el inicio de 2026.
                </p>
              </div>
            </div>
          </section>

          {/* Milestones Preview */}
          <section id="milestones" className="py-16 px-6 bg-white" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Hitos de Producto 2025
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Nuevo Admin B2C', category: 'B2C', color: 'bg-peach-700' },
                  { title: 'Nuevo Buscador', category: 'Search', color: 'bg-peach-300' },
                  { title: 'Multi-Apply V2', category: 'B2C', color: 'bg-peach-700' },
                  { title: 'Home B2C', category: 'In Progress', color: 'bg-carbon-500' },
                  { title: 'Mejoras SEO', category: 'Marketing', color: 'bg-peach-300' },
                  { title: 'Skills Dataset', category: 'Matching', color: 'bg-peach-700' },
                ].map((milestone, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-peach-700 hover:shadow-xl transition-shadow">
                    <span className={`inline-block ${milestone.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                      {milestone.category}
                    </span>
                    <h3 className="text-xl font-bold font-abcgintonord text-carbon-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-carbon-600">
                      Descripción breve del hito y su impacto en la plataforma...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Milestones - DETAILED */}
          <section className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Detalles de Hitos 2025
              </h2>
              <div className="space-y-12">
                {/* Milestone 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-1/2 bg-carbon-200 flex items-center justify-center p-8 min-h-[300px]">
                      <div className="text-center text-carbon-500">
                        <div className="w-48 h-48 mx-auto bg-carbon-300 rounded-lg flex items-center justify-center">
                          <span className="text-6xl">🖥️</span>
                        </div>
                        <p className="mt-4 text-sm font-medium">Imagen - Admin B2C</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <span className="inline-block bg-peach-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">B2C</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">Nuevo Admin B2C</h3>
                      <p className="text-carbon-600 mb-6 text-lg">Rediseño completo del panel con interfaz moderna y notificaciones en tiempo real.</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>KPI:</strong> +35% engagement</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>Impacto:</strong> -40% tiempo gestión</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap Preview */}
          <section id="roadmap" className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Roadmap 2026
              </h2>
              <div className="space-y-8">
                {[
                  {
                    quarter: 'Q1 2026',
                    items: ['App B2C (Flutter)', 'Search migration to Elastic', 'Salesforce marketing/data cloud'],
                    color: 'border-peach-700'
                  },
                  {
                    quarter: 'Q2 2026',
                    items: ['Search & Matching: CV Search + IA', 'Admin B2B', 'Calculadora de salarios'],
                    color: 'border-peach-300'
                  },
                ].map((roadmap, index) => (
                  <div key={index} className={`bg-white rounded-lg shadow-lg p-8 border-l-4 ${roadmap.color}`}>
                    <h3 className="text-2xl font-bold font-abcgintonord text-peach-700 mb-4">
                      {roadmap.quarter}
                    </h3>
                    <ul className="space-y-2">
                      {roadmap.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-peach-700 mr-2">▸</span>
                          <span className="text-carbon-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Achievements */}
          <section className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Logros Tecnológicos 2025
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Migración a Microservicios', description: 'Arquitectura modular y escalable', metric: '-30% latencia', icon: '🏗️' },
                  { title: 'CI/CD Optimizado', description: 'Pipeline de despliegue automatizado', metric: '80% más rápido', icon: '🚀' },
                  { title: 'Monitoreo Avanzado', description: 'Observabilidad completa del sistema', metric: '99.9% uptime', icon: '📊' },
                  { title: 'Testing Automatizado', description: 'Cobertura de tests incrementada', metric: '85% coverage', icon: '✅' },
                  { title: 'Performance Optimization', description: 'Mejoras en velocidad de carga', metric: '-45% load time', icon: '⚡' },
                  { title: 'Security Hardening', description: 'Implementación de mejores prácticas', metric: '0 vulnerabilidades críticas', icon: '🔒' },
                ].map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-bold font-abcgintonord text-carbon-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-carbon-600 mb-4 text-sm">
                      {achievement.description}
                    </p>
                    <div className="bg-peach-700 text-white text-sm font-bold px-3 py-1 rounded-full inline-block">
                      {achievement.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Metrics */}
          <section className="py-16 px-6 bg-white" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Impacto Global 2025
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: '2.5M+', label: 'Usuarios Activos', color: 'text-peach-700' },
                  { number: '450K+', label: 'Ofertas Publicadas', color: 'text-peach-700' },
                  { number: '85%', label: 'Satisfacción Usuario', color: 'text-peach-700' },
                  { number: '3.2M', label: 'Aplicaciones Totales', color: 'text-peach-700' },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-5xl font-bold font-abcgintonord ${metric.color} mb-2`}>
                      {metric.number}
                    </div>
                    <div className="text-carbon-600 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Stack Tecnológico 2025
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold font-abcgintonord text-peach-700 mb-4">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-carbon-900">
                    <li>• React 18 / Next.js 14</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Flutter (Mobile)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold font-abcgintonord text-peach-700 mb-4">
                    Backend
                  </h3>
                  <ul className="space-y-2 text-carbon-900">
                    <li>• Node.js / NestJS</li>
                    <li>• PostgreSQL</li>
                    <li>• Redis</li>
                    <li>• Elasticsearch</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold font-abcgintonord text-peach-700 mb-4">
                    Infrastructure
                  </h3>
                  <ul className="space-y-2 text-carbon-900">
                    <li>• AWS Cloud</li>
                    <li>• Docker / Kubernetes</li>
                    <li>• GitHub Actions</li>
                    <li>• Datadog Monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Team & Culture */}
          <section className="py-16 px-6 bg-white" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                Equipo & Cultura
              </h2>
              <div className="bg-carbon-100 rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold font-abcgintonord text-peach-700 mb-4">
                      Nuestro Equipo
                    </h3>
                    <p className="text-carbon-900 mb-4">
                      Un equipo multidisciplinario de 25+ profesionales apasionados por crear
                      la mejor experiencia de búsqueda de empleo en el sector turístico.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">12</div>
                        <div className="text-sm text-carbon-600">Developers</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">5</div>
                        <div className="text-sm text-carbon-600">Product Managers</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">4</div>
                        <div className="text-sm text-carbon-600">Designers</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">4</div>
                        <div className="text-sm text-carbon-600">DevOps/QA</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-abcgintonord text-peach-700 mb-4">
                      Valores & Metodología
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900"><strong>Agile & Scrum:</strong> Sprints de 2 semanas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900"><strong>Data-Driven:</strong> Decisiones basadas en métricas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900"><strong>User-Centric:</strong> El usuario en el centro</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900"><strong>Innovation:</strong> Cultura de experimentación</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900"><strong>Excellence:</strong> Código limpio y buenas prácticas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-6">
                ¡Gracias por ser parte de este viaje!
              </h2>
              <p className="text-xl text-carbon-600 mb-8">
                2025 ha sido un año de grandes logros y 2026 promete ser aún mejor.
                Seguimos construyendo el futuro del empleo en el sector turístico.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <div className="text-peach-700 text-6xl">🚀</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
