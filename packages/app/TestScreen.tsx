import React from 'react';

import DragBox from 'app/src/components/DragBox';
import { SafeAreaView, Text, Image } from 'dripsy';

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
      <Image
        sx={{
          width: 100,
          height: 100,
        }}
        source={require('app/assets/icons/Icon=AddOutlineWhite.png')}
      />
      <DragBox />
    </SafeAreaView>
  );
};

export default TestScreen;
