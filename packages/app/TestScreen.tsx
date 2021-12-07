import React from 'react';

import DragBox from 'app/src/components/DragBox';
import Image from 'app/src/components/Image';
import { SafeAreaView, Text } from 'dripsy';
import { observer } from 'mobx-react-lite';

const TestScreen: React.FC = observer(() => {
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
        style={{
          width: 100,
          height: 100,
        }}
        source={require('app/assets/icons/Icon=AddOutlineWhite.png')}
      />
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg',
        }}
      />
      <DragBox />
    </SafeAreaView>
  );
});

export default TestScreen;
