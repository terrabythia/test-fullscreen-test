import React, { useEffect, useState } from 'react';
import { isWindowFullScreen, isWindowFullScreenLegacy } from '../helpers/fullscreen';

interface FullScreenTestsProps {
  errorMargin: number
}

export const FullScreenTests: React.FC<FullScreenTestsProps> = ({
  errorMargin,
}) => {
  const [legacyPass, setLegacyPass] = useState(() => isWindowFullScreenLegacy(errorMargin));
  const [pass, setPass] = useState(() => isWindowFullScreen(errorMargin));
  useEffect(() => {
    const checkInterval = window.setInterval(() => {
      setLegacyPass(isWindowFullScreenLegacy(errorMargin));
      setPass(isWindowFullScreen(errorMargin));
    }, 1000);
    return () => window.clearInterval(checkInterval);
  }, [errorMargin]);
  return (
    <div>
      <h1>FullScreenTests</h1>
      <div>
        Fullscreen legacy: {legacyPass ? 'pass' : 'fail'}
      </div>
      <div>
        Fullscreen new: {pass ? 'pass' : 'fail'}
      </div>
    </div>
  );
};