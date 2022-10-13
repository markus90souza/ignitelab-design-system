import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export type ButtonProps = {
  label: ReactNode
  asChild?: boolean
}

const Button = ({ label, asChild }: ButtonProps) => {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      className={clsx(
        'w-full px-3 py-4 bg-ui-cyan-500 font-semibold text-ui-black rounded text-sm transition-colors hover:bg-ui-cyan-400 focus:ring-2 ring-ui-gray-800',
      )}
    >
      {label}
    </Component>
  )
}

export { Button }
