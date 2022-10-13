import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    label: 'Texto do component',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
  args: {
    label: 'Medium',
    size: 'md',
  },
}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    label: <p>Teste</p>,
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
  },
}
