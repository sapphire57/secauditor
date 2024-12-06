import Image from 'next/image'
import { ICON_PATHS } from '@/lib/icons'
import type { IconName } from '@/lib/icons'

interface IconProps {
  name: IconName
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className = '' }: IconProps) {
  const [category, iconName] = name.split('.') as [keyof typeof ICON_PATHS, string]
  const iconPath = ICON_PATHS[category]?.[iconName as keyof typeof ICON_PATHS[typeof category]]

  if (!iconPath) {
    console.warn(`Icon not found: ${name}`)
    return null
  }

  return (
    <Image
      src={iconPath}
      alt=""
      width={size}
      height={size}
      className={className}
    />
  )
} 