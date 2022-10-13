import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '.'

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  args: {
    label: 'Medium',
    size: 'md',
  },
}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    label: <h1>Teste</h1>,
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
  },
}
