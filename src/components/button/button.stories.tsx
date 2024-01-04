import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';
import { useState } from 'react';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
 
  argTypes: {
    appearance:{
        type:'string',
        description:'buton color style',
        defaultValue: 'primary',
        options:['primary', 'ghost', 'success', 'failure'],
      	control: {
				type: 'select',
			},
    },
    size:{
        type:'string',
         description: 'Button size',
        defaultValue:'m',
        options:[ 's','m','l'],
        control:{ type:'radio'},
        
    },
   

  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
   children: 'Button',
	appearance: 'primary',
  },
};
export const Ghost:Story ={
    args:{
        children: 'Button',
        appearance:'ghost'
    }
}
export const Failure: Story = {
    args:{
        appearance:'failure',
        children:'Button'
    }
}
export const Success: Story = {
    args:{
        appearance:'success',
        children:'Button'
    }
}
export const Large:Story={
    args:{
        children:'Button',
        size:'l'
    }
}
export const Medium:Story={
    args:{
        children:'Button',
        size:'m'
    }
}
export const Small:Story={
    args:{
        children:'Button',
        size:'s'
    }
}

 export const Arrow:Story={
    args:{
        children:'Button',
        appearance:'primary',
         onClick:()=>{},
    },
    render:(args)=>{

        const [toggle, setToggle] = useState<boolean>(false);

        const toggleButton = ()=> setToggle(prev => !prev)

        return <Button {...args} arrow={toggle ? 'down' : 'right'} onClick={toggleButton} />
    }
}