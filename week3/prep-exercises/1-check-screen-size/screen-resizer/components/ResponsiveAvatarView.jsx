import React, { useEffect, useState } from 'react';
import RandomAvatar from './RandomAvatar';
import { useScreenSizeRange } from '../hooks/useScreenSizeRange';

const avatarBaseProps = {
  Mithi: { skinTone: 'brown', facialHair: 'mediumBeard' },
  Diana: { skinTone: 'light', facialHair: 'none' },
  Mikong: { skinTone: 'yellow', facialHair: 'stubble' },
};

export default function ResponsiveAvatarView() {
  const isSmall = useScreenSizeRange(0, 699, 'Small Screen');
  const isMedium = useScreenSizeRange(700, 1000, 'Medium Screen');
  const isLarge = useScreenSizeRange(1001, Infinity, 'Large Screen');

  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const onResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  let avatarName = '';
  if (isLarge) avatarName = 'Mithi';
  else if (isMedium) avatarName = 'Diana';
  else if (isSmall) avatarName = 'Mikong';

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Current Size: {windowSize.width} x {windowSize.height}</h2>
      <RandomAvatar baseProps={avatarBaseProps[avatarName]} />
      <p>Now showing: <strong>{avatarName}</strong></p>
    </div>
  );
}
