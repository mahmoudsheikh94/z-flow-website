import Image from 'next/image'

interface ClientLogo {
  name: string
  src: string
  width: number
  height: number
}

const clientLogos: ClientLogo[] = [
  { name: 'Prospectify', src: '/images/client_logos/PROSPECTIFY.webp', width: 140, height: 40 },
  { name: 'Surge', src: '/images/client_logos/Surge.avif', width: 120, height: 40 },
  { name: 'Movacar', src: '/images/client_logos/movacar.svg', width: 130, height: 40 },
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
        <div className="logos-marquee-track flex items-center gap-16 w-max">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 opacity-40 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
