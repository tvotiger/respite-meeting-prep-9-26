'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Popover } from '@base-ui/react/popover';
import { getGlossaryEntry, type GlossaryId } from '@/lib/glossary';

type TermProps = {
  /** Key in the shared glossary map */
  id: GlossaryId;
  /** Visible text; defaults to the glossary title */
  children?: ReactNode;
};

function useFineHover() {
  const [fineHover, setFineHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setFineHover(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return fineHover;
}

/**
 * Inline term with a Kindle-style definition card on hover / focus / tap.
 *
 * @example
 * <Term id="hcbs">HCBS</Term>
 * <Term id="general-fund" />
 */
export function Term({ id, children }: TermProps) {
  const entry = getGlossaryEntry(id);
  const openOnHover = useFineHover();

  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[Term] Unknown glossary id: "${id}"`);
    }
    return <span>{children ?? id}</span>;
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        openOnHover={openOnHover}
        delay={200}
        closeDelay={150}
        className="inline touch-manipulation cursor-help border-0 bg-transparent p-0 font-[inherit] text-[length:inherit] leading-[inherit] text-fd-primary underline decoration-dotted decoration-fd-primary/50 underline-offset-[0.2em] transition-colors hover:decoration-fd-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-primary/40"
      >
        {children ?? entry.title}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner side="top" sideOffset={8} className="z-50">
          <Popover.Popup className="z-50 w-[min(20rem,calc(100vw-2rem))] origin-(--transform-origin) rounded-xl border bg-fd-popover/95 p-3 text-sm text-fd-popover-foreground shadow-lg outline-none backdrop-blur-lg data-closed:animate-fd-popover-out data-open:animate-fd-popover-in">
            <Popover.Title className="mb-1 text-xs font-semibold tracking-wide text-fd-muted-foreground uppercase">
              {entry.title}
            </Popover.Title>
            <Popover.Description className="text-[0.925rem] leading-relaxed text-fd-popover-foreground">
              {entry.definition}
            </Popover.Description>
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
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
