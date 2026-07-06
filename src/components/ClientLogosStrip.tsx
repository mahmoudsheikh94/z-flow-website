import Image from 'next/image'

interface ClientLogo {
  name: string
  src: string
  // Intrinsic source dimensions — used by next/image for aspect ratio, NOT display size
  srcWidth: number
  srcHeight: number
  // Tailwind height class applied to the rendered <img>
  displayClass: string
}

const clientLogos: ClientLogo[] = [
  // Wordmark — very wide (1600×144), needs less height to stay balanced with the others
  { name: 'Prospectify', src: '/images/client_logos/PROSPECTIFY.webp', srcWidth: 1600, srcHeight: 144, displayClass: 'h-6 w-auto' },
  // Near-square icon+wordmark (512×140)
  { name: 'Surge', src: '/images/client_logos/Surge.avif', srcWidth: 512, srcHeight: 140, displayClass: 'h-8 w-auto' },
  // SVG — scales perfectly
  { name: 'Movacar', src: '/images/client_logos/movacar.svg', srcWidth: 220, srcHeight: 68, displayClass: 'h-7 w-auto' },
]

interface ClientLogosStripProps {
  label: string
}

export function ClientLogosStrip({ label }: ClientLogosStripProps) {
  return (
    <section className="section-dark py-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">
          {label}
        </p>
      </div>

      {/* Full-width overflow-hidden container for the marquee */}
      <div className="overflow-hidden">
        {/* Track is 2× wide — first half visible, second half is the seamless loop */}
        <div className="logos-marquee-track flex items-center gap-20 w-max">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.srcWidth}
                height={logo.srcHeight}
                className={`${logo.displayClass} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
