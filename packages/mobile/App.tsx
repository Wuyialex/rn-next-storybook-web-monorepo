import React from 'react';
import TestScreen from 'app/TestScreen';
import {theme} from 'app/theme';
import {DripsyProvider} from 'dripsy';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// @ts-ignore: has not @types
import FlipperAsyncStorage from 'rn-flipper-async-storage-advanced';

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <DripsyProvider theme={theme}>
        {__DEV__ ? <FlipperAsyncStorage /> : null}
        <TestScreen />
      </DripsyProvider>
    </GestureHandlerRootView>
  );
};

export default App;
