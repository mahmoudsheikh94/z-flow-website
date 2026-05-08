import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { ReactElement } from 'react'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')

const mdxComponents = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mt-12 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="text-xl font-semibold text-text-primary mt-8 mb-3" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="text-text-secondary text-lg leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="space-y-3 mb-6 ml-1" {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol className="space-y-3 mb-6 ml-1 list-decimal list-inside" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="text-text-secondary text-lg leading-relaxed flex items-start gap-3" {...props} />
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a className="text-brand-orange hover:underline" {...props} />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-4 border-brand-orange pl-6 my-8 italic text-text-secondary" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <code className="bg-neutral-100 px-2 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre className="bg-neutral-900 text-white rounded-xl p-6 overflow-x-auto my-8 text-sm" {...props} />
  ),
  img: (props: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-xl my-8 w-full" alt="" {...props} />
  ),
  hr: () => <hr className="my-12 border-neutral-200" />,
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
}

export async function getBlogPostContent(slug: string, locale: string) {
  const filePath = path.join(CONTENT_DIR, slug, `${locale}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { content } = matter(source)
  const stats = readingTime(content)

  const { content: mdxContent } = await compileMDX({
    source: content,
    components: mdxComponents as Record<string, React.ComponentType>,
  })

  return {
    content: mdxContent as ReactElement,
    readingTime: Math.ceil(stats.minutes),
  }
}
