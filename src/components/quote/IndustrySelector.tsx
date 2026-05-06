'use client';

import { motion } from 'framer-motion';

interface IndustrySelectorProps {
  selected: 'marketing' | 'automotive' | null;
  onSelect: (industry: 'marketing' | 'automotive') => void;
}

const industries = [
  {
    id: 'marketing' as const,
    title: 'Marketing & Creative',
    description: 'Web design, branding, content, social media',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    examples: ['Website redesign', 'Brand identity', 'Content strategy', 'Social media management'],
  },
  {
    id: 'automotive' as const,
    title: 'Automotive',
    description: 'Vehicle services, repairs, detailing, parts',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 5h8m-4 9a9 9 0 110-18 9 9 0 010 18zm0 0v-3m0 3h3m-3 0H9m3-3h3m-6 0H6" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    ),
    examples: ['Vehicle service package', 'Custom build estimate', 'Fleet maintenance', 'Parts installation'],
  },
];

export function IndustrySelector({ selected, onSelect }: IndustrySelectorProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {industries.map((industry, index) => (
        <motion.button
          key={industry.id}
          onClick={() => onSelect(industry.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative p-6 rounded-2xl border-2 text-left transition-all duration-300
            ${selected === industry.id
              ? 'border-brand-orange bg-brand-orange/5 shadow-lg shadow-brand-orange/10'
              : 'border-neutral-200 bg-white hover:border-brand-orange/50 hover:shadow-md'
            }
          `}
        >
          {/* Selection indicator */}
          {selected === industry.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-4 right-4 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}

          {/* Icon */}
          <div className={`
            w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300
            ${selected === industry.id
              ? 'bg-brand-orange/10 text-brand-orange'
              : 'bg-neutral-100 text-text-secondary'
            }
          `}>
            {industry.icon}
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            {industry.title}
          </h3>
          <p className="text-text-secondary mb-4">
            {industry.description}
          </p>

          {/* Examples */}
          <div className="flex flex-wrap gap-2">
            {industry.examples.map((example) => (
              <span
                key={example}
                className={`
                  text-xs px-2.5 py-1 rounded-full transition-colors duration-300
                  ${selected === industry.id
                    ? 'bg-brand-orange/10 text-brand-orange'
                    : 'bg-neutral-100 text-text-muted'
                  }
                `}
              >
                {example}
              </span>
            ))}
          </div>
        </motion.button>
      ))}
    </div>
  );
}
