import {theme} from 'components/theme';
import {DripsyProvider} from 'dripsy';
import * as NextImage from 'next/image';
import '../styles/globals.css';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <DripsyProvider theme={theme}>
      <Story />
    </DripsyProvider>
  ),
];
