import type { Meta, StoryObj } from '@storybook/react';
import Heading from './heading';




const meta = {
  title: 'Adventages',
  component: Heading,
    argTypes: {
    tag:{
        type:'string',
        description:' heading',
        defaultValue: 'h1',
        options:['h1','h2','h3'],
      	control: {
				type: 'radio',
			},
    }},
  tags: ['autodocs'],

} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
	 args: {
        tag: 'h1',
	   children: 'Heading',
  },
}
export const H2: Story = {
	 args: {
      tag: 'h2',
	children: 'Heading',
  },
}
export const H3: Story = {
	 args: {
        tag: 'h3',
	children: 'Heading',
  },
}