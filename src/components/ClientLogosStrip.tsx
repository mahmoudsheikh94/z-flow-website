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
    <section className="section-dark py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          <p className="text-white/30 text-xs uppercase tracking-widest whitespace-nowrap flex-shrink-0">
            {label}
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8 lg:gap-12">
            {clientLogos.map((logo) => (
              <div key={logo.name} className="opacity-40 hover:opacity-70 transition-opacity duration-300">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
