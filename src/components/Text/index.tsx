import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export type TextProps = {
  label: ReactNode
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Text = ({ label, size = 'md', asChild }: TextProps) => {
  const Component = asChild ? Slot : 'span'
  return (
    <Component
      className={clsx('text-ui-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {label}
    </Component>
  )
}

export { Text }
