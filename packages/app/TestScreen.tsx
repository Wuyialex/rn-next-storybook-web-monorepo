import React from 'react';

import { SafeAreaView } from 'dripsy';

import DragBox from './src/DragBox';

const TestScreen: React.FC = () => {
  return (
    <SafeAreaView
      sx={{
        backgroundColor: '$background',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <DragBox />
    </SafeAreaView>
  );
};

export default TestScreen;
