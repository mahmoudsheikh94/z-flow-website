'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface PoweredByBadgeProps {
  variant?: 'light' | 'dark';
}

export function PoweredByBadge({ variant = 'light' }: PoweredByBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <Link
        href="https://z-flow.de"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full
          transition-all duration-300 group
          ${variant === 'dark'
            ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
            : 'bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200 hover:border-neutral-300'
          }
        `}
      >
        <Image
          src="/images/logo-256.png"
          alt="Z-Flow"
          width={20}
          height={20}
          className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        />
        <span className={`text-sm ${variant === 'dark' ? 'text-white/60' : 'text-text-muted'}`}>
          Powered by
        </span>
        <span className={`text-sm font-semibold transition-colors duration-300 ${
          variant === 'dark'
            ? 'text-white group-hover:text-brand-orange'
            : 'text-text-primary group-hover:text-brand-orange'
        }`}>
          Z-Flow
        </span>
        <svg
          className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 ${
            variant === 'dark' ? 'text-white/40' : 'text-text-muted'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
