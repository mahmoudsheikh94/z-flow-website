import Image from 'next/image'

interface BrowserMockupProps {
  src?: string
  alt?: string
  title?: string
  stack?: string[]
  className?: string
}

export function BrowserMockup({ src, alt, title, stack, className = '' }: BrowserMockupProps) {
  const hasImage = src && alt

  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl border border-neutral-200 ${className}`}>
      {/* Browser chrome */}
      <div className="bg-neutral-100 px-4 py-3 flex items-center gap-2 border-b border-neutral-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-neutral-300" />
          <div className="w-3 h-3 rounded-full bg-neutral-300" />
          <div className="w-3 h-3 rounded-full bg-neutral-300" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md px-3 py-1 text-xs text-neutral-400 border border-neutral-200 max-w-xs mx-auto text-center truncate">
            z-flow.de
          </div>
        </div>
      </div>

      {/* Content area */}
      {hasImage ? (
        <div className="relative aspect-video">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-[#0e0918] to-[#1a1a2e] flex flex-col items-center justify-center px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative z-10 text-center">
            {title && (
              <h3 className="text-white font-bold text-lg md:text-xl mb-4 max-w-sm">
                {title}
              </h3>
            )}
            {stack && stack.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                {stack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
