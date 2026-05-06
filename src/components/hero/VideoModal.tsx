'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  posterSrc?: string
}

export function VideoModal({ isOpen, onClose, videoSrc, posterSrc }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      // Auto-play video when modal opens
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented, user will need to click play
        })
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus()
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0, 1] }}
          onClick={handleBackdropClick}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Video introduction"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close Button */}
          <motion.button
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group"
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.1 }}
            aria-label="Close video"
          >
            <svg
              className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>

          {/* Video Container */}
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              playsInline
              poster={posterSrc}
              preload="metadata"
            >
              <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
