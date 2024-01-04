import type { Meta, StoryObj } from '@storybook/react';
import Card from './card';



const meta = {
  title: 'Adventages',
  component: Card,
    argTypes: {
    color:{
        type:'string',
        description:' color style',
        defaultValue: 'primary',
        options:['primary','white'],
      	control: {
				type: 'select',
			},
    }},
  tags: ['autodocs'],

} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPrimary: Story = {
	 args: {
        children:" Card",
        color:'primary'
  },
}
export const CardWhite: Story = {
	 args: {
        children:" Card",
        color:'white'
  },
}