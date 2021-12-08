import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Thumbnail from './index';

export default {
  title: 'Example/Thumbnail',
  component: Thumbnail,
  argTypes: {
    isRound: { contro: 'boolean' },
    src: { control: 'text' },
    size: { control: 'number' },
  },
} as ComponentMeta<typeof Thumbnail>;

const Template: ComponentStory<typeof Thumbnail> = args => <Thumbnail {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  isRound: true,
  src: 'https://m.media-amazon.com/images/I/71nbfl-JklS._AC_SL1024_.jpg',
  size: 100,
};
