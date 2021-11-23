import {theme} from 'components/theme';
import {DripsyProvider, SafeAreaView, Text} from 'dripsy';
import React from 'react';

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
        <Text
          sx={{
            color: '$text',
            fontSize: 20,
          }}>
          Hello word
        </Text>
      </SafeAreaView>
    </DripsyProvider>
  );
};

export default App;
