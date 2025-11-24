'use client'

import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MilestoneMedia from '@/components/MilestoneMedia'
import { Language, getTranslation } from '@/lib/translations'

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string) => getTranslation(language, key as any)
  // Media configurations for each milestone
  const milestone1Media = [
    { type: 'image' as const, src: '/milestones/milestone-1/HomeB2C-desktop-1.jpg', device: 'none' as const, alt: 'Home B2C Desktop' },
    { type: 'image' as const, src: '/milestones/milestone-1/MisPreferencias-mobile-1.png', device: 'none' as const, alt: 'Admin B2C Mobile - Preferencias' },
    { type: 'image' as const, src: '/milestones/milestone-1/AdminB2C-MisOfertas-Small-dektop-2.png', device: 'none' as const, alt: 'Admin B2C Desktop - Mis Ofertas' },
    { type: 'image' as const, src: '/milestones/milestone-1/MiPerfil-mobile-2.jpg', device: 'none' as const, alt: 'Admin B2C Mobile - Mi Perfil' },
  ]

  // Milestones 2-6 use mockups (placeholder - same images with device frames)
  const milestoneMediaWithMockups = [
    { type: 'image' as const, src: '/milestones/milestone-1/MisPreferencias-mobile-1.png', device: 'iphone' as const, alt: 'Admin B2C Mobile - Preferencias' },
    { type: 'image' as const, src: '/milestones/milestone-1/AdminB2C-MisOfertas-Small-dektop-2.png', device: 'macbook' as const, alt: 'Admin B2C Desktop - Mis Ofertas' },
    { type: 'image' as const, src: '/milestones/milestone-1/MiPerfil-mobile-2.jpg', device: 'iphone' as const, alt: 'Admin B2C Mobile - Mi Perfil' },
  ]
  const milestone2Media = milestoneMediaWithMockups
  const milestone3Media = milestoneMediaWithMockups
  const milestone4Media = milestoneMediaWithMockups
  const milestone5Media = milestoneMediaWithMockups
  const milestone6Media = milestoneMediaWithMockups


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
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="min-h-screen pt-16">
        <div ref={contentRef}>
          {/* Hero Section */}
          <section className="bg-white text-carbon-900 py-20 px-6 border-b-4 border-peach-700">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold font-abcgintonord mb-6 text-carbon-900">
                  {t('heroTitle')}
                </h1>
                <h2 className="text-3xl md:text-4xl font-abcgintonord text-peach-700 mb-8">
                  {t('heroSubtitle')}
                </h2>
                <p className="text-xl md:text-2xl text-carbon-600 mb-12 max-w-3xl mx-auto">
                  {t('heroDescription')}
                </p>
                {!isGeneratingPDF && (
                  <button
                    onClick={handleDownloadPDF}
                    className="bg-peach-700 hover:bg-peach-300 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
                  >
                    📥 {t('downloadPDF')}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section id="intro" className="py-16 px-6 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-6">
                {t('introTitle')}
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-carbon-900 leading-relaxed mb-4">
                  {t('introParagraph1')}
                </p>
                <p className="text-lg text-carbon-900 leading-relaxed">
                  {t('introParagraph2')}
                </p>
              </div>
            </div>
          </section>

          {/* Milestones Preview */}
          <section id="milestones" className="py-16 px-6 bg-white" style={{ pageBreakInside: 'avoid' }}>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center">
                {t('milestonesPreviewTitle')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { titleKey: 'milestone1Title', categoryKey: 'categoryB2C', color: 'bg-peach-700', descKey: 'milestone1PreviewDesc' },
                  { titleKey: 'milestone2Title', categoryKey: 'categorySearch', color: 'bg-peach-300', descKey: 'milestone2PreviewDesc' },
                  { titleKey: 'milestone3Title', categoryKey: 'categoryB2C', color: 'bg-peach-700', descKey: 'milestone3PreviewDesc' },
                  { titleKey: 'milestone4Title', categoryKey: 'categoryInProgress', color: 'bg-carbon-500', descKey: 'milestone4PreviewDesc' },
                  { titleKey: 'milestone5Title', categoryKey: 'categoryMarketing', color: 'bg-peach-300', descKey: 'milestone5PreviewDesc' },
                  { titleKey: 'milestone6Title', categoryKey: 'categoryMatching', color: 'bg-peach-700', descKey: 'milestone6PreviewDesc' },
                ].map((milestone, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-peach-700 hover:shadow-xl transition-shadow">
                    <span className={`inline-block ${milestone.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                      {t(milestone.categoryKey)}
                    </span>
                    <h3 className="text-xl font-bold font-abcgintonord text-carbon-900 mb-3">
                      {t(milestone.titleKey)}
                    </h3>
                    <p className="text-carbon-600">
                      {t(milestone.descKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Milestones - DETAILED */}
          <section className="py-16 bg-carbon-100" style={{ pageBreakInside: 'avoid' }}>
              <h2 className="text-4xl font-bold font-abcgintonord text-carbon-900 mb-12 text-center px-6">
                {t('milestonesDetailTitle')}
              </h2>
              <div className="space-y-12">
                {/* Milestone 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-[70%]">
                      <MilestoneMedia
                        milestoneId="admin-b2c"
                        media={milestone1Media}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    </div>
                    <div className="md:w-[30%] p-8">
                      <span className="inline-block bg-peach-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t('categoryB2C')}</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">{t('milestone1Title')}</h3>
                      <p className="text-carbon-600 mb-6 text-lg">{t('milestone1Description')}</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('kpi')}:</strong> {t('milestone1KPI')}</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('impact')}:</strong> {t('milestone1Impact')}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-[70%]">
                      <MilestoneMedia
                        milestoneId="new-search"
                        media={milestone2Media}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    </div>
                    <div className="md:w-[30%] p-8">
                      <span className="inline-block bg-peach-300 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t('categorySearch')}</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">{t('milestone2Title')}</h3>
                      <p className="text-carbon-600 mb-6 text-lg">{t('milestone2Description')}</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('kpi')}:</strong> {t('milestone2KPI')}</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('impact')}:</strong> {t('milestone2Impact')}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-[70%]">
                      <MilestoneMedia
                        milestoneId="multi-apply"
                        media={milestone3Media}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    </div>
                    <div className="md:w-[30%] p-8">
                      <span className="inline-block bg-peach-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t('categoryB2C')}</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">{t('milestone3Title')}</h3>
                      <p className="text-carbon-600 mb-6 text-lg">{t('milestone3Description')}</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('kpi')}:</strong> {t('milestone3KPI')}</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('impact')}:</strong> {t('milestone3Impact')}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border-l-4 border-carbon-500">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-[70%]">
                      <MilestoneMedia
                        milestoneId="home-b2c"
                        media={milestone4Media}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    </div>
                    <div className="md:w-[30%] p-8">
                      <span className="inline-block bg-carbon-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t('categoryInProgress')}</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">{t('milestone4Title')}</h3>
                      <p className="text-carbon-600 mb-6 text-lg">{t('milestone4Description')}</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('status')}:</strong> {t('milestone4Status')}</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('goal')}:</strong> {t('milestone4Goal')}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestone 5 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex">
                    <div className="md:w-[70%]">
                      <MilestoneMedia
                        milestoneId="seo-optimization"
                        media={milestone5Media}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    </div>
                    <div className="md:w-[30%] p-8">
                      <span className="inline-block bg-peach-300 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t('categoryMarketing')}</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">{t('milestone5Title')}</h3>
                      <p className="text-carbon-600 mb-6 text-lg">{t('milestone5Description')}</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('kpi')}:</strong> {t('milestone5KPI')}</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('impact')}:</strong> {t('milestone5Impact')}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Milestone 6 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:w-[70%]">
                      <MilestoneMedia
                        milestoneId="skills-dataset"
                        media={milestone6Media}
                        isGeneratingPDF={isGeneratingPDF}
                      />
                    </div>
                    <div className="md:w-[30%] p-8">
                      <span className="inline-block bg-peach-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{t('categoryMatching')}</span>
                      <h3 className="text-3xl font-bold font-abcgintonord text-carbon-900 mb-4">{t('milestone6Title')}</h3>
                      <p className="text-carbon-600 mb-6 text-lg">{t('milestone6Description')}</p>
                      <div className="space-y-3">
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('kpi')}:</strong> {t('milestone6KPI')}</span></div>
                        <div className="flex items-start"><span className="text-peach-700 font-bold mr-2 mt-1 text-xl">▸</span><span className="text-carbon-900 text-lg"><strong>{t('impact')}:</strong> {t('milestone6Impact')}</span></div>
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
                {t('roadmapTitle')}
              </h2>
              <div className="space-y-8">
                {[
                  {
                    quarterKey: 'roadmapQ1',
                    itemsKey: 'roadmapQ1Items',
                    color: 'border-peach-700'
                  },
                  {
                    quarterKey: 'roadmapQ2',
                    itemsKey: 'roadmapQ2Items',
                    color: 'border-peach-300'
                  },
                ].map((roadmap, index) => (
                  <div key={index} className={`bg-white rounded-lg shadow-lg p-8 border-l-4 ${roadmap.color}`}>
                    <h3 className="text-2xl font-bold font-abcgintonord text-peach-700 mb-4">
                      {t(roadmap.quarterKey)}
                    </h3>
                    <ul className="space-y-2">
                      {(t(roadmap.itemsKey) as string[]).map((item, idx) => (
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
                {t('techAchievementsTitle')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { titleKey: 'techAchievement1Title', descKey: 'techAchievement1Desc', metricKey: 'techAchievement1Metric', icon: '🏗️' },
                  { titleKey: 'techAchievement2Title', descKey: 'techAchievement2Desc', metricKey: 'techAchievement2Metric', icon: '🚀' },
                  { titleKey: 'techAchievement3Title', descKey: 'techAchievement3Desc', metricKey: 'techAchievement3Metric', icon: '📊' },
                  { titleKey: 'techAchievement4Title', descKey: 'techAchievement4Desc', metricKey: 'techAchievement4Metric', icon: '✅' },
                  { titleKey: 'techAchievement5Title', descKey: 'techAchievement5Desc', metricKey: 'techAchievement5Metric', icon: '⚡' },
                  { titleKey: 'techAchievement6Title', descKey: 'techAchievement6Desc', metricKey: 'techAchievement6Metric', icon: '🔒' },
                ].map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-bold font-abcgintonord text-carbon-900 mb-2">
                      {t(achievement.titleKey)}
                    </h3>
                    <p className="text-carbon-600 mb-4 text-sm">
                      {t(achievement.descKey)}
                    </p>
                    <div className="bg-peach-700 text-white text-sm font-bold px-3 py-1 rounded-full inline-block">
                      {t(achievement.metricKey)}
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
                {t('impactTitle')}
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: '2.5M+', labelKey: 'impactMetric1', color: 'text-peach-700' },
                  { number: '450K+', labelKey: 'impactMetric2', color: 'text-peach-700' },
                  { number: '85%', labelKey: 'impactMetric3', color: 'text-peach-700' },
                  { number: '3.2M', labelKey: 'impactMetric4', color: 'text-peach-700' },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-5xl font-bold font-abcgintonord ${metric.color} mb-2`}>
                      {metric.number}
                    </div>
                    <div className="text-carbon-600 font-medium">
                      {t(metric.labelKey)}
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
                {t('techStackTitle')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-bold font-abcgintonord text-peach-700 mb-4">
                    {t('techStackFrontend')}
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
                    {t('techStackBackend')}
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
                    {t('techStackInfra')}
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
                {t('teamTitle')}
              </h2>
              <div className="bg-carbon-100 rounded-lg shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold font-abcgintonord text-peach-700 mb-4">
                      {t('teamOurTeam')}
                    </h3>
                    <p className="text-carbon-900 mb-4">
                      {t('teamDescription')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">12</div>
                        <div className="text-sm text-carbon-600">{t('teamDevelopers')}</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">5</div>
                        <div className="text-sm text-carbon-600">{t('teamPMs')}</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">4</div>
                        <div className="text-sm text-carbon-600">{t('teamDesigners')}</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-3xl font-bold text-peach-700">4</div>
                        <div className="text-sm text-carbon-600">{t('teamDevOps')}</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-abcgintonord text-peach-700 mb-4">
                      {t('teamValuesTitle')}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900">{t('teamValue1')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900">{t('teamValue2')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900">{t('teamValue3')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900">{t('teamValue4')}</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-peach-700 mr-2 mt-1">✓</span>
                        <span className="text-carbon-900">{t('teamValue5')}</span>
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
                {t('closingTitle')}
              </h2>
              <p className="text-xl text-carbon-600 mb-8">
                {t('closingText')}
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
