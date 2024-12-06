export const ICON_PATHS = {
  navigation: {
    home: '/icons/navigation/home.svg',
    chevron: '/icons/navigation/chevron.svg',
    menu: '/icons/navigation/menu.svg',
  },
  services: {
    audit: '/icons/services/audit.svg',
    security: '/icons/services/security.svg',
    risk: '/icons/services/risk.svg',
    compliance: '/icons/services/compliance.svg',
    consulting: '/icons/services/consulting.svg',
    continuity: '/icons/services/continuity.svg',
  },
  frameworks: {
    sama: '/icons/frameworks/sama.svg',
    nca: '/icons/frameworks/nca.svg',
    cma: '/icons/frameworks/cma.svg',
    iso: '/icons/frameworks/iso.svg',
  },
  features: {
    check: '/icons/features/check.svg',
    arrow: '/icons/features/arrow.svg',
    close: '/icons/features/close.svg',
    download: '/icons/features/download.svg',
  },
} as const

type IconCategory = keyof typeof ICON_PATHS
export type IconName = IconCategory | `${IconCategory}.${string}`
export type IconPath = `${IconCategory}.${string}` 