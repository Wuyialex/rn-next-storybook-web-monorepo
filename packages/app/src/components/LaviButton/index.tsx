import React from 'react';

import { View } from 'dripsy';

interface Props {
  color?: string;
}

const LaviButton: React.FC<Props> = ({ color }) => {
  return (
    <View
      sx={{
        backgroundColor: color ?? '$background',
        width: 100,
        height: 100,
      }}
    />
  );
};

export default LaviButton;
