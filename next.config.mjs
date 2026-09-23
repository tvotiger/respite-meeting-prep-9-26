import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** Project pages URL: https://tvotiger.github.io/respite-meeting-prep-9-26/ */
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/respite-meeting-prep-9-26' : '');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath || undefined,
};

export default withMDX(config);
