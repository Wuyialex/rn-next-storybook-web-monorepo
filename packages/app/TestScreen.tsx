import React from 'react';

import { SafeAreaView, Text } from 'dripsy';

import DragBox from './src/components/DragBox';

const TestScreen: React.FC = () => {
  return (
    <SafeAreaView
      sx={{
        backgroundColor: '$lightgrey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        sx={{
          marginTop: '$4',
        }}
        variant="Text10BoldBlackCenter"
      >
        1234567890 차카타파하 Aa Bb Gg
      </Text>
      <DragBox />
    </SafeAreaView>
  );
};

export default TestScreen;
