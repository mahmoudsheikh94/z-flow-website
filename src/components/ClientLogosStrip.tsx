import Image from 'next/image'

interface ClientLogo {
  name: string
  src: string
  href: string
  srcWidth: number
  srcHeight: number
  displayClass: string
}

const clientLogos: ClientLogo[] = [
  { name: 'Prospectify', src: '/images/client_logos/PROSPECTIFY.webp', href: 'https://weprospectify.com/', srcWidth: 1600, srcHeight: 144, displayClass: 'h-6 w-auto' },
  { name: 'Surge', src: '/images/client_logos/Surge.avif', href: 'https://www.surgemusic.io/', srcWidth: 512, srcHeight: 140, displayClass: 'h-8 w-auto' },
  { name: 'Movacar', src: '/images/client_logos/movacar.svg', href: 'https://www.movacar.com/', srcWidth: 220, srcHeight: 68, displayClass: 'h-7 w-auto' },
]

// Repeat enough times so the strip is always fully covered with no gaps
const repeated = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]

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

      <div className="overflow-hidden">
        {/* Track width = 4 sets of logos; animates exactly one set (25%) for a seamless loop */}
        <div className="logos-marquee-track flex items-center gap-20 w-max">
          {repeated.map((logo, i) => (
            <a
              key={`${logo.name}-${i}`}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${logo.name}`}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.srcWidth}
                height={logo.srcHeight}
                className={`${logo.displayClass} object-contain`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
