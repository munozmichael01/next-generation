'use client'

import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = async () => {
    if (!contentRef.current) return

    try {
      const canvas = await html2canvas(contentRef.current, {
        scale: 1,
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF',
      })

      const imgData = canvas.toDataURL('image/jpeg', 0.75)
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
                <button 
                  onClick={handleDownloadPDF}
                  className="bg-peach-700 hover:bg-peach-300 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  📥 Descargar PDF
                </button>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section id="intro" className="py-16 px-6 bg-carbon-100">
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
          <section id="milestones" className="py-16 px-6 bg-white">
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

          {/* Roadmap Preview */}
          <section id="roadmap" className="py-16 px-6 bg-carbon-100">
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
        </div>
      </main>

      <Footer />
    </>
  )
}
