import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {}

export type TextInputRootProps = {
  children: ReactNode
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return (
    <div className="flex items-center w-full h-12 gap-3 px-3 py-4 bg-ui-gray-800 rounded focus-within:ring-2 ring-ui-cyan-500 ">
      {children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export type TextInputIconProps = {
  children: ReactNode
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return (
    <Slot className={'w-6 h-6 text-ui-gray-400 focus-within:text-ui-gray-100'}>
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

const Input = ({ ...rest }: TextInputProps) => {
  return (
    <input
      className={clsx(
        'bg-transparent flex-1 text-ui-gray-100 text-xs outline-none placeholder:text-ui-gray-400 ',
      )}
      {...rest}
    />
  )
}

Input.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input,
  Icon: TextInputIcon,
}
