import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  url: string
  icon: ElementType
}

export function NavItem({ title, url, icon: Icon }: NavItemProps) {
  return (
    <nav className="space-y-0.5">
      <a
        href={url}
        className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
      >
        <Icon className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-violet-500">
          {title}
        </span>
        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-500" />
      </a>
    </nav>
  )
}
