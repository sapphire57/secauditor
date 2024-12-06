import Image from 'next/image'
import { ICON_PATHS, type IconPath } from '@/lib/icons'

interface IconProps {
  name: IconPath
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className = '' }: IconProps) {
  const [category, iconName] = name.split('.')
  const iconPath = ICON_PATHS[category as keyof typeof ICON_PATHS]?.[iconName]

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
      className={`${className} text-current`}
    />
  )
} 