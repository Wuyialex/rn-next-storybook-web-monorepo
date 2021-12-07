import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import DragBox from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DragBox',
  component: DragBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof DragBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DragBox> = args => <DragBox {...args} />;

export const Basic = Template.bind({});
