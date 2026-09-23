'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { PreviewCard } from '@base-ui/react/preview-card';
import { getGlossaryEntry, type GlossaryId } from '@/lib/glossary';

type TermProps = {
  /** Key in the shared glossary map */
  id: GlossaryId;
  /** Visible text; defaults to the glossary title */
  children?: ReactNode;
};

/**
 * Inline term with a Kindle-style definition card on hover / focus / tap.
 *
 * @example
 * <Term id="hcbs">HCBS</Term>
 * <Term id="general-fund" />
 */
export function Term({ id, children }: TermProps) {
  const entry = getGlossaryEntry(id);

  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Term] Unknown glossary id: "${id}"`);
    }
    return <span>{children ?? id}</span>;
  }

  return (
    <PreviewCard.Root>
      <PreviewCard.Trigger
        delay={200}
        closeDelay={150}
        render={
          <button
            type="button"
            className="inline cursor-help border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] leading-[inherit] text-fd-primary underline decoration-dotted decoration-fd-primary/50 underline-offset-[0.2em] transition-colors hover:decoration-fd-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary/40"
          />
        }
      >
        {children ?? entry.title}
      </PreviewCard.Trigger>
      <PreviewCard.Portal>
        <PreviewCard.Positioner side="top" sideOffset={8} className="z-50">
          <PreviewCard.Popup className="z-50 w-[min(20rem,calc(100vw-2rem))] origin-(--transform-origin) rounded-xl border bg-fd-popover/95 p-3 text-sm text-fd-popover-foreground shadow-lg outline-none backdrop-blur-lg data-closed:animate-fd-popover-out data-open:animate-fd-popover-in">
            <p className="mb-1 text-xs font-semibold tracking-wide text-fd-muted-foreground uppercase">
              {entry.title}
            </p>
            <p className="text-[0.925rem] leading-relaxed text-fd-popover-foreground">
              {entry.definition}
            </p>
            {entry.href ? (
              <p className="mt-2 border-t pt-2">
                <Link
                  href={entry.href}
                  className="text-xs font-medium text-fd-primary underline-offset-2 hover:underline"
                >
                  Learn more →
                </Link>
              </p>
            ) : null}
          </PreviewCard.Popup>
        </PreviewCard.Positioner>
      </PreviewCard.Portal>
    </PreviewCard.Root>
  );
}
