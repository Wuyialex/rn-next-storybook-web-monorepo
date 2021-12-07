import React from 'react';

import Image from 'app/src/components/Image';
import { View, Text } from 'dripsy';
interface Props {
  color?: string;
}

const LaviButton: React.FC<Props> = () => {
  return (
    <View
      sx={{
        alignItems: 'center',
      }}
    >
      <Text variant="Text10BoldBlackCenter">LAVI</Text>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require('app/assets/icons/Icon=LiveOvalBadge.png')}
      />
    </View>
  );
};

export default LaviButton;
