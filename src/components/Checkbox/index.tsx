import { clsx } from 'clsx'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export type CheckboxProps = {}

const Checkbox = ({}: CheckboxProps) => {
  return (
    <RadixCheckbox.Root
      className={'w-6 h-6 bg-ui-gray-800 rounded p-[2px] flex items-center'}
    >
      <RadixCheckbox.Indicator asChild>
        <Check weight={'bold'} className={'h-5 w-5 text-ui-cyan-500'} />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

export { Checkbox }
