import React, { useEffect, useState } from 'react';

interface WindowSize {
  left: number
  top: number
  windowOuterWidth: number
  windowOuterHeight: number
  windowInnerWidth: number
  windowInnerHeight: number
  screenWidth: number
  screenHeight: number
}

const getWindowSizes = (): WindowSize => ({
  left: window.screenX,
  top: window.screenY,
  windowOuterWidth: window.outerWidth,
  windowOuterHeight: window.outerHeight,
  windowInnerWidth: window.innerWidth,
  windowInnerHeight: window.innerHeight,
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
        <li>window inner width: {sizes.windowInnerWidth}</li>
        <li>window outer width: {sizes.windowOuterWidth}</li>
        <li>screen width: {sizes.screenWidth}</li>
        <li>window inner height: {sizes.windowInnerHeight}</li>
        <li>window outer height: {sizes.windowOuterHeight}</li>
        <li>screen height: {sizes.screenHeight}</li>
      </ul>
    </div>
  );
};