import TestScreen from 'app/TestScreen';
import {theme} from 'app/theme';
import {DripsyProvider} from 'dripsy';
import React from 'react';
// @ts-ignore: has not @types
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

const App = () => {
  return (
    <DripsyProvider theme={theme}>
      {__DEV__ ? <FlipperAsyncStorage /> : null}
      <TestScreen />
    </DripsyProvider>
  );
};

export default App;
