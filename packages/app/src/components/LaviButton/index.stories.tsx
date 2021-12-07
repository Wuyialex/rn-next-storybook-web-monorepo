import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import LaviButton from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LaviButton',
  component: LaviButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof LaviButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LaviButton> = args => <LaviButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'pink',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'beige',
};
