import type { Meta, StoryObj } from '@storybook/react';
import Adventages from './adventages';



const meta = {
  title: 'Adventages',
  component: Adventages,
  tags: ['autodocs'],

} satisfies Meta<typeof Adventages>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Adventage: Story = {
	 args: {
      adventages:[
        	{
			title: 'ReactJS class component',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '1',
		},
    	{
			title: 'VueJS directive',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '2',
		},
		{
			title: 'NextJS Server Side Rendering',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '3',
		},
		{
			title: 'SEO',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolor vitae dolores ab tenetur a.',
			id: '4',
		},
      ]
  },
 
}