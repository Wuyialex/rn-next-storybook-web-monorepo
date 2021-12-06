import React from 'react';

import TestScreen from 'app/TestScreen';
import { theme } from 'app/theme';
import { DripsyProvider } from 'dripsy';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <DripsyProvider theme={theme}>
        <TestScreen />
      </DripsyProvider>
    </GestureHandlerRootView>
  );
};

export default App;
