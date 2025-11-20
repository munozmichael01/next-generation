'use client'

import { useState } from 'react'
import Image from 'next/image'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'

interface MediaItem {
  type: 'image' | 'video'
  src: string
  alt?: string
  device?: 'iphone' | 'macbook' | 'none' // Type of device mockup
}

interface MilestoneMediaProps {
  milestoneId: string
  media: MediaItem[]
  isGeneratingPDF?: boolean
}

export default function MilestoneMedia({ milestoneId, media, isGeneratingPDF = false }: MilestoneMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!media || media.length === 0) {
    return (
      <div className="bg-carbon-200 flex items-center justify-center p-8 min-h-[300px]">
        <div className="text-center text-carbon-500">
          <div className="w-48 h-48 mx-auto bg-carbon-300 rounded-lg flex items-center justify-center">
            <span className="text-6xl">📷</span>
          </div>
          <p className="mt-4 text-sm font-medium">No media available</p>
        </div>
      </div>
    )
  }

  // For PDF generation, show only the first image without device frame
  if (isGeneratingPDF) {
    const firstImage = media.find(item => item.type === 'image') || media[0]
    if (firstImage.type === 'image') {
      return (
        <div className="bg-carbon-200 flex items-center justify-center p-8 min-h-[300px]">
          <Image
            src={firstImage.src}
            alt={firstImage.alt || `${milestoneId} screenshot`}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
      )
    }
    // If only video exists, show placeholder for PDF
    return (
      <div className="bg-carbon-200 flex items-center justify-center p-8 min-h-[300px]">
        <div className="text-center text-carbon-500">
          <div className="w-48 h-48 mx-auto bg-carbon-300 rounded-lg flex items-center justify-center">
            <span className="text-6xl">🎥</span>
          </div>
          <p className="mt-4 text-sm font-medium">Video content</p>
        </div>
      </div>
    )
  }

  const currentMedia = media[currentIndex]
  const hasMultiple = media.length > 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
  }

  const renderMediaContent = () => {
    if (currentMedia.type === 'video') {
      return (
        <video
          key={currentMedia.src}
          controls
          className="rounded-lg max-h-[400px] w-auto"
          poster={currentMedia.alt}
        >
          <source src={currentMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    }

    // If device mockup is specified, use DeviceFrameset
    if (currentMedia.device && currentMedia.device !== 'none') {
      const deviceType = currentMedia.device === 'iphone' ? 'iPhone X' : 'MacBook Pro'
      // Use smaller dimensions to keep mockups compact while maintaining aspect ratios
      // iPhone X: 375x812 aspect ratio
      // MacBook Pro: 16:10 aspect ratio
      const deviceWidth = currentMedia.device === 'iphone' ? 280 : 500
      const screenHeight = currentMedia.device === 'iphone'
        ? Math.round(deviceWidth * (812 / 375)) // Actual iPhone screen height
        : Math.round(deviceWidth * (9 / 16))    // Shorter visible area for MacBook

      return (
        <DeviceFrameset device={deviceType} color="black" width={deviceWidth}>
          <div style={{
            width: '100%',
            height: `${screenHeight}px`,
            overflow: 'hidden',
            position: 'relative',
            background: '#000'
          }}>
            <Image
              src={currentMedia.src}
              alt={currentMedia.alt || `${milestoneId} screenshot`}
              fill
              className="object-cover object-top"
              sizes={`${deviceWidth}px`}
            />
          </div>
        </DeviceFrameset>
      )
    }

    // Default: show image without device frame
    return (
      <Image
        src={currentMedia.src}
        alt={currentMedia.alt || `${milestoneId} screenshot`}
        width={400}
        height={300}
        className="rounded-lg object-cover max-h-[400px] w-auto"
      />
    )
  }

  return (
    <div className="relative bg-carbon-200 flex items-center justify-center p-8 min-h-[400px]">
      {/* Media Content */}
      <div className="w-full h-full flex items-center justify-center">
        {renderMediaContent()}
      </div>

      {/* Navigation Arrows - Only show if multiple items */}
      {hasMultiple && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-carbon-900 rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-carbon-900 rounded-full p-2 shadow-lg transition-all z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-peach-700 w-6' : 'bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Media Type Badge */}
      <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded z-10">
        {currentIndex + 1} / {media.length}
      </div>
    </div>
  )
}
