export const isWindowFullScreen = (errorMargin: number = 0): boolean => (
  Math.abs(window.screen.width - window.innerWidth) < errorMargin
  && Math.abs(window.screen.height - window.innerHeight) < errorMargin
);

export const isWindowFullScreenLegacy = (errorMargin: number = 0): boolean => {
  const winLeft = window.screenX;
  const winTop = window.screenY;
  const winWidth = window.outerWidth;
  const winHeight = window.outerHeight;
  return !(
    window.screen.width - winWidth >= errorMargin
      || window.screen.height - winHeight >= errorMargin
      || (window.screen.height + errorMargin < winTop + winHeight)
      || (window.screen.width + errorMargin < winLeft + winWidth)
      || winTop > errorMargin
      || winLeft > errorMargin
  );
};
