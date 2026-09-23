import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-3 text-sm font-medium tracking-wide text-fd-muted-foreground uppercase">
        Meeting prep
      </p>
      <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight">
        Sept 17 Commission briefing
      </h1>
      <p className="mb-8 max-w-xl text-lg text-fd-muted-foreground">
        Highlights from the Colorado Commission on Medicaid member worksheets
        on HCBS / LTSS spending growth and budget pressure.
      </p>
      <Link
        href="/docs"
        className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
      >
        Open the briefing
      </Link>
    </main>
  );
}
