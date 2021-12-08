import React, { useMemo } from 'react';

import { StyleProp } from 'react-native';

import Image from 'app/src/components/Image';
import { Pressable, useSx } from 'dripsy';
import { FastImageProps } from 'react-native-fast-image';

interface Props extends FastImageProps {
  style: StyleProp<any>;
  size?: number;
  src?: string;
  isRound?: boolean;
  onPress?(): any;
}

const Thumbnail: React.FC<Props> = ({ style, isRound = true, size = 100, src, onPress }) => {
  const sx = useSx();

  return (
    <Pressable
      style={sx({
        width: size,
        height: size,
        borderRadius: isRound ? size : 0,
        ...style,
      })}
      onPress={onPress}
      disabled={!onPress}
    >
      <Image
        style={sx({
          flex: 1,
          borderRadius: isRound ? size : 0,
        })}
        source={useMemo(
          () => ({
            uri: src,
          }),
          [src],
        )}
      />
    </Pressable>
  );
};

export default Thumbnail;
