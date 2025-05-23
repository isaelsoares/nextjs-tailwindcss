import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabItemProps {
  value: string
  title: string
  isSelect?: boolean
}

export function TabItem({ value, title, isSelect = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelect && (
        <motion.div
          layoutId="adctiveTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
