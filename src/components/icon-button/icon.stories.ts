import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './icon-button';





const meta = {
  title: 'Adventages',
  component: IconButton,
    argTypes: {
    appearance:{
        type:'string',
        defaultValue: 'primary',
        options:['primary','white'],
      	control: {
				type: 'radio',
			},
    },
    icon:{
        type:'string',
        defaultValue:'menu',
        options:['menu','up','close'],
        control: {
				type: 'radio',
			},
    }
},
  tags: ['autodocs'],

} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Menu: Story = {
	 args: {
         icon:'menu',
         appearance:'primary'
  },
}
export const Up: Story = {
	 args: {
      icon:'up',
	 appearance:'primary'
  },
}
export const Close: Story = {
	 args: {
        icon:'close',
	    appearance:'white',
  },
}