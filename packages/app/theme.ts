import { makeTheme } from 'dripsy';

const theme = makeTheme({
  colors: {
    $text: 'white',
    $background: 'gray',
    $primary: 'blue',
  },
});

type MyTheme = typeof theme;

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme };
