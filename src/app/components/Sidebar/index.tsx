import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>

      <nav className="space-y-0.5">
        <NavItem
          url="https://github.com/isaelsoares"
          title="Home"
          icon={Home}
        />
        <NavItem
          url="https://github.com/isaelsoares"
          title="Dashboard"
          icon={BarChart}
        />
        <NavItem
          url="https://github.com/isaelsoares"
          title="Projects"
          icon={SquareStack}
        />
        <NavItem
          url="https://github.com/isaelsoares"
          title="Tasks"
          icon={CheckSquare}
        />
        <NavItem
          url="https://github.com/isaelsoares"
          title="Reporting"
          icon={Flag}
        />
        <NavItem
          url="https://github.com/isaelsoares"
          title="Users"
          icon={Users}
        />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav>
          <NavItem
            url="https://github.com/isaelsoares"
            title="Support"
            icon={LifeBuoy}
          />
          <NavItem
            url="https://github.com/isaelsoares"
            title="Settings"
            icon={Cog}
          />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
