import * as motion from 'motion/react-client';
import { useState } from 'react';

export default function Rotate() {
  return (
    <motion.div
      style={box}
      animate={{ rotate: 360 }}
      transition={{ duration: 10 }}
    />
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  position: 'absolute',
  top: '100px',
  width: 100,
  height: 100,
  backgroundColor: '#ff0088',
  borderRadius: 5,
};
