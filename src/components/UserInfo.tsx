import React, { useEffect, useState } from 'react';

interface WindowSize {
  left: number
  top: number
  windowWidth: number
  windowHeight: number
  screenWidth: number
  screenHeight: number
}

const getWindowSizes = (): WindowSize => ({
  left: window.screenX,
  top: window.screenY,
  windowWidth: window.outerWidth,
  windowHeight: window.outerHeight,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
});

export const UserInfo: React.FC = () => {
  const [sizes, setSizes] = useState<WindowSize>(getWindowSizes());
  useEffect(() => {
    const checkInterval = window.setInterval(() => {
      setSizes(getWindowSizes());
    }, 1000);
    return () => {
      window.clearInterval(checkInterval);
    };
  }, []);
  return (
    <div>
      <ul>
        <li>left: {sizes.left}</li>
        <li>top: {sizes.top}</li>
        <li>windowWidth: {sizes.windowWidth}</li>
        <li>screenWidth: {sizes.screenWidth}</li>
        <li>windowHeight: {sizes.windowHeight}</li>
        <li>screenHeight: {sizes.screenHeight}</li>
      </ul>
    </div>
  );
};