export type GlossaryEntry = {
  title: string;
  definition: string;
  href?: string;
};

/**
 * Shared term definitions for <Term id="..." /> popovers.
 * Scoped to terms used in the Sept 17 Commission briefing.
 */
export const glossary = {
  pprs: {
    title: 'PPRS',
    definition:
      'Pikes Peak Respite Services — a Colorado HCBS / home care agency.',
  },
  hcbs: {
    title: 'HCBS',
    definition:
      'Home- and Community-Based Services — Medicaid supports that help people live at home and in the community instead of in institutions.',
  },
  ltss: {
    title: 'LTSS',
    definition:
      'Long-Term Services and Supports — the broader ongoing-care category that includes both institutional care and HCBS.',
  },
  hcpf: {
    title: 'HCPF',
    definition:
      'Colorado Department of Health Care Policy & Financing — the state agency that runs Medicaid.',
  },
  cfc: {
    title: 'CFC',
    definition:
      'Community First Choice — a Medicaid option that expanded attendant-style community supports (including homemaker and personal care). A central budget flashpoint in the Sept 17 worksheets.',
    href: '/docs/cfc-budget',
  },
  adls: {
    title: 'ADLs',
    definition:
      'Activities of Daily Living — basic self-care tasks such as bathing, dressing, eating, and toileting.',
  },
  'general-fund': {
    title: 'General Fund',
    definition:
      "Colorado’s main state tax-supported budget pot — the state’s own dollars (not the federal share of Medicaid). Competes with schools, roads, and other state priorities.",
    href: '/docs/concepts-first',
  },
  'federal-match': {
    title: 'Federal match',
    definition:
      'The share of a Medicaid dollar paid by the federal government (also called FMAP). An enhanced match means Colorado pays less per dollar of service — until utilization grows past the forecast.',
    href: '/docs/concepts-first',
  },
  utilization: {
    title: 'Utilization',
    definition:
      'How much of a service is actually used — hours, visits, or dollars billed — not just what is allowed on paper.',
    href: '/docs/concepts-first',
  },
  'paid-family-caregiving': {
    title: 'Paid family caregiving',
    definition:
      'When a family member (often a parent) is paid under Medicaid / HCBS rules to provide authorized supports, instead of only unpaid family care.',
    href: '/docs/concepts-first',
  },
  'agency-delivered-care': {
    title: 'Agency-delivered care',
    definition:
      'An agency (like PPRS) hires or contracts workers and sends them to support the member — handling hiring, training, billing, and compliance.',
    href: '/docs/concepts-first',
  },
  homemaker: {
    title: 'Homemaker',
    definition:
      'Help with household tasks such as cleaning, laundry, and light organization when disability makes those hard to manage independently.',
  },
  'personal-care': {
    title: 'Personal care',
    definition:
      'Help with the person’s daily living needs — bathing, dressing, meals, and similar supports (often tied to ADLs). Distinct from skilled nursing.',
  },
  waiver: {
    title: 'Waiver',
    definition:
      'A Medicaid authority that lets a state offer HCBS (and other flexibilities) outside the standard benefit package, usually with eligibility rules.',
  },
  'case-management': {
    title: 'Case management',
    definition:
      'Coordination of a member’s service plan, authorizations, and providers — the “middle layer,” not usually the hands-on direct care worker.',
    href: '/docs/concepts-first',
  },
  'cost-shifting': {
    title: 'Cost shifting',
    definition:
      'When cutting services in one setting pushes people into a more expensive setting (hospital, nursing facility, crisis care), so the “cut” may not save money.',
    href: '/docs/cut-cautions',
  },
  'clinical-oversight': {
    title: 'Clinical oversight',
    definition:
      'Professional review or supervision of whether a service is appropriate, documented, and delivered as intended.',
    href: '/docs/peer-support',
  },
  commission: {
    title: 'Colorado Commission on Medicaid',
    definition:
      'A Colorado body that reviews Medicaid policy and budget issues. Its Sept 17, 2026 member worksheets framed the HCBS / LTSS cost discussion.',
    href: '/docs',
  },
  'fiscal-year': {
    title: 'Fiscal year (FY)',
    definition:
      'A budget year, not a calendar year. Colorado’s runs July–June (e.g. FY2025–26).',
    href: '/docs/concepts-first',
  },
  medicaid: {
    title: 'Medicaid',
    definition:
      'Joint federal–state health coverage for eligible people. In Colorado it is administered by HCPF.',
  },
  'program-integrity': {
    title: 'Program integrity',
    definition:
      'Preventing and detecting fraud, waste, abuse, and improper payments in Medicaid.',
  },
  'administrative-sustainability': {
    title: 'Administrative sustainability',
    definition:
      'Controlling Medicaid costs by reducing unnecessary complexity and duplication — not only by cutting services or rates.',
  },
} as const satisfies Record<string, GlossaryEntry>;

export type GlossaryId = keyof typeof glossary;

export function getGlossaryEntry(id: string): GlossaryEntry | undefined {
  return glossary[id as GlossaryId];
}
