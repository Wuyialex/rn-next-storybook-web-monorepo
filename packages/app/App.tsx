import {theme} from 'app/theme';
import {DripsyProvider, SafeAreaView, Text} from 'dripsy';
import React from 'react';
import DragBox from './src/DragBox';

const App = () => {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaView
        sx={{
          backgroundColor: '$background',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <DragBox />
      </SafeAreaView>
    </DripsyProvider>
  );
};

export default App;
