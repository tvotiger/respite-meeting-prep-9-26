import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { Term } from '@/components/term';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function withBasePath(href: string | undefined) {
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
  if (!basePath) return href;
  if (href === basePath || href.startsWith(`${basePath}/`)) return href;
  return `${basePath}${href}`;
}

export function getMDXComponents(components?: MDXComponents) {
  const defaults = defaultMdxComponents;
  const DefaultA = defaults.a;

  return {
    ...defaults,
    Term,
    a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const resolved = withBasePath(href);
      if (resolved?.startsWith('/') && !resolved.startsWith('//')) {
        return <Link href={resolved} {...props} />;
      }
      if (DefaultA) {
        return <DefaultA href={resolved} {...props} />;
      }
      return <a href={resolved} {...props} />;
    },
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
