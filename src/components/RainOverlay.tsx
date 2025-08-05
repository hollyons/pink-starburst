import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import rainAnimation from '../images/Rain.json';

export default function RainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-50">
      <Player
        autoplay
        loop
        src={rainAnimation}
        style={{ height: '100vh', width: '100vw' }}
      />
    </div>
  );
}