import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type HeadingProps = {
  label: ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Heading = ({ label, size = 'md', asChild }: HeadingProps) => {
  const Component = asChild ? Slot : 'h2'
  return (
    <Component
      className={clsx('text-ui-gray-100 font-bold font-sans', {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      })}
    >
      {label}
    </Component>
  )
}

export { Heading }
