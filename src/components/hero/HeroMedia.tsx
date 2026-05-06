'use client'

import { useState } from 'react'
import Image from 'next/image'
import { VideoModal } from './VideoModal'

interface HeroMediaProps {
  imageSrc: string
  imageAlt: string
  videoSrc: string
  caption?: string
}

export function HeroMedia({ imageSrc, imageAlt, videoSrc, caption }: HeroMediaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="hero-animate hero-animate-6 relative">
        {/* Photo Container with Ken Burns effect */}
        <div
          className="relative overflow-hidden rounded-2xl cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setIsModalOpen(true)
            }
          }}
          aria-label="Play video introduction"
        >
          {/* Glow effect behind the image */}
          <div className="absolute -inset-4 bg-gradient-to-br from-brand-orange/20 via-transparent to-brand-orange/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Image with Ken Burns */}
          <div className="relative hero-media-container rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover aspect-[3/2]"
              priority
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full bg-white/20 hero-play-pulse" />
                <div className="absolute inset-0 rounded-full bg-white/10 hero-play-pulse-delayed" />

                {/* Play button */}
                <button
                  className="relative w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-110 transition-all duration-500"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <svg
                    className="w-8 h-8 text-brand-orange ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-orange/30 transition-colors duration-500" />
          </div>
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-4 text-center text-white/50 text-sm">
            {caption}
          </p>
        )}
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={videoSrc}
        posterSrc={imageSrc}
      />
    </>
  )
}
