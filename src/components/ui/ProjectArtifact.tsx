import type { ProjectCategory } from '@/data/projects'

/**
 * On-brand SVG artifact shown inside BrowserMockup when a project has no real
 * screenshot. Each category renders a visual that honestly depicts the TYPE of
 * work (a node-flow for automation, a RAG pipeline for AI, an app wireframe for
 * software, a spreadsheet→system motif for digitalization) — not a fake UI.
 *
 * Drawn in the brand palette (navy #0e0918 + orange #ee4f27) on a grid texture
 * so it reads as intentional design, never as an empty placeholder.
 */
export function ProjectArtifact({
  category,
}: {
  category: ProjectCategory
}) {
  return (
    <div className="aspect-video bg-[#0e0918] relative overflow-hidden">
      <svg
        viewBox="0 0 450 253"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`${category} project visual`}
      >
        <defs>
          <pattern
            id={`pa-grid-${category}`}
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M22 0H0V22"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="450" height="253" fill={`url(#pa-grid-${category})`} />
        {category === 'automation' && <Automation />}
        {category === 'ai' && <Ai />}
        {category === 'software' && <Software />}
        {category === 'digitalization' && <Digitalization />}
      </svg>
    </div>
  )
}

/* shared style tokens */
const node = {
  fill: '#ffffff',
  fillOpacity: 0.06,
  stroke: '#ffffff',
  strokeOpacity: 0.16,
} as const
const nodeA = {
  fill: '#ee4f27',
  fillOpacity: 0.16,
  stroke: '#ee4f27',
  strokeOpacity: 0.5,
} as const
const glyph = { fill: '#ffffff', opacity: 0.5 } as const
const glyphA = { fill: '#ee4f27', opacity: 0.9 } as const

function Automation() {
  return (
    <g transform="translate(0,5)">
      <path d="M95 115 H150" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" fill="none" />
      <path d="M255 115 H310" stroke="#ee4f27" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <path d="M200 95 C 230 65, 240 65, 255 90" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" fill="none" />
      <path d="M200 135 C 230 165, 240 165, 255 140" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" fill="none" />
      <rect x="40" y="95" width="55" height="42" rx="8" {...nodeA} />
      <circle cx="67" cy="116" r="7" {...glyphA} />
      <rect x="150" y="95" width="55" height="42" rx="8" {...node} />
      <rect x="163" y="109" width="29" height="4" rx="2" {...glyph} />
      <rect x="163" y="118" width="20" height="4" rx="2" {...glyph} />
      <rect x="255" y="75" width="55" height="34" rx="8" {...node} />
      <rect x="255" y="123" width="55" height="34" rx="8" {...node} />
      <rect x="345" y="95" width="60" height="42" rx="8" {...nodeA} />
      <path d="M362 116 l6 6 l12 -14" stroke="#ee4f27" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <text x="225" y="200" fill="#ffffff" opacity="0.45" fontSize="12" textAnchor="middle" fontFamily="ui-sans-serif, system-ui">
        trigger → enrich → route → done
      </text>
    </g>
  )
}

function Ai() {
  return (
    <g transform="translate(0,5)">
      <g transform="translate(40,81)">
        <rect x="0" y="0" width="40" height="30" rx="6" {...node} />
        <rect x="6" y="14" width="40" height="30" rx="6" {...node} />
        <rect x="14" y="24" width="26" height="3" rx="1.5" {...glyph} />
        <rect x="14" y="31" width="18" height="3" rx="1.5" {...glyph} />
      </g>
      <path d="M95 105 H135" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1.5" fill="none" />
      <g transform="translate(140,85)">
        <circle cx="12" cy="12" r="4" {...glyphA} />
        <circle cx="34" cy="6" r="4" {...glyph} />
        <circle cx="30" cy="28" r="4" {...glyph} />
        <circle cx="10" cy="34" r="4" {...glyphA} />
        <circle cx="44" cy="20" r="4" {...glyph} />
      </g>
      <path d="M200 105 H245" stroke="#ee4f27" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <rect x="245" y="81" width="70" height="50" rx="10" {...nodeA} />
      <text x="280" y="111" fill="#ee4f27" opacity="0.95" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-sans-serif, system-ui">
        LLM
      </text>
      <path d="M315 106 H360" stroke="#ee4f27" strokeOpacity="0.6" strokeWidth="1.5" fill="none" />
      <rect x="360" y="87" width="55" height="38" rx="8" {...node} />
      <rect x="370" y="99" width="35" height="3.5" rx="1.5" {...glyph} />
      <rect x="370" y="107" width="28" height="3.5" rx="1.5" {...glyph} />
      <rect x="370" y="115" width="20" height="3.5" rx="1.5" {...glyphA} />
      <text x="225" y="200" fill="#ffffff" opacity="0.45" fontSize="12" textAnchor="middle" fontFamily="ui-sans-serif, system-ui">
        your data → retrieval → grounded answer
      </text>
    </g>
  )
}

function Software() {
  return (
    <g transform="translate(0,-5)">
      <rect x="30" y="55" width="60" height="150" rx="8" {...node} />
      <rect x="40" y="67" width="40" height="6" rx="3" {...glyphA} />
      <rect x="40" y="85" width="40" height="5" rx="2.5" {...glyph} />
      <rect x="40" y="97" width="32" height="5" rx="2.5" {...glyph} />
      <rect x="40" y="109" width="36" height="5" rx="2.5" {...glyph} />
      <rect x="105" y="55" width="95" height="44" rx="8" {...node} />
      <rect x="210" y="55" width="95" height="44" rx="8" {...node} />
      <rect x="315" y="55" width="95" height="44" rx="8" {...nodeA} />
      <text x="362" y="83" fill="#ee4f27" opacity="0.95" fontSize="18" fontWeight="700" textAnchor="middle" fontFamily="ui-sans-serif, system-ui">
        3×
      </text>
      <rect x="105" y="111" width="305" height="94" rx="8" {...node} />
      <rect x="125" y="165" width="22" height="28" rx="2" fill="#ffffff" opacity="0.14" />
      <rect x="160" y="153" width="22" height="40" rx="2" fill="#ffffff" opacity="0.14" />
      <rect x="195" y="171" width="22" height="22" rx="2" fill="#ffffff" opacity="0.14" />
      <rect x="230" y="145" width="22" height="48" rx="2" fill="#ffffff" opacity="0.14" />
      <rect x="265" y="129" width="22" height="64" rx="2" fill="#ee4f27" opacity="0.8" />
      <rect x="300" y="141" width="22" height="52" rx="2" fill="#ee4f27" opacity="0.8" />
      <rect x="335" y="157" width="22" height="36" rx="2" fill="#ffffff" opacity="0.14" />
      <rect x="370" y="123" width="22" height="70" rx="2" fill="#ee4f27" opacity="0.8" />
    </g>
  )
}

function Digitalization() {
  return (
    <g transform="translate(0,-3)">
      <g transform="translate(40,65)" opacity="0.55">
        <rect x="0" y="0" width="150" height="110" rx="8" {...node} />
        <line x1="0" y1="27" x2="150" y2="27" stroke="#fff" strokeOpacity="0.12" />
        <line x1="0" y1="54" x2="150" y2="54" stroke="#fff" strokeOpacity="0.12" />
        <line x1="0" y1="81" x2="150" y2="81" stroke="#fff" strokeOpacity="0.12" />
        <line x1="50" y1="0" x2="50" y2="110" stroke="#fff" strokeOpacity="0.12" />
        <line x1="100" y1="0" x2="100" y2="110" stroke="#fff" strokeOpacity="0.12" />
        <rect x="8" y="10" width="30" height="4" {...glyph} />
        <rect x="58" y="37" width="30" height="4" {...glyph} />
        <rect x="108" y="64" width="30" height="4" {...glyph} />
        <rect x="8" y="91" width="30" height="4" {...glyph} />
      </g>
      <path d="M205 120 H250" stroke="#ee4f27" strokeOpacity="0.7" strokeWidth="1.5" fill="none" />
      <path d="M244 115 l8 5 l-8 5" stroke="#ee4f27" strokeOpacity="0.7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="translate(265,65)">
        <rect x="0" y="0" width="150" height="110" rx="8" {...nodeA} />
        <rect x="14" y="16" width="60" height="6" rx="3" {...glyphA} />
        <rect x="14" y="36" width="122" height="14" rx="4" {...glyph} />
        <rect x="14" y="58" width="122" height="14" rx="4" {...glyph} />
        <rect x="14" y="80" width="80" height="14" rx="4" {...glyph} />
        <path d="M118 84 l5 5 l10 -12" stroke="#ee4f27" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </g>
      <text x="225" y="200" fill="#ffffff" opacity="0.45" fontSize="12" textAnchor="middle" fontFamily="ui-sans-serif, system-ui">
        spreadsheet chaos → one clean system
      </text>
    </g>
  )
}
