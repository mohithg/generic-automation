export const captureViewport = (name, selector = []) => {
  const hide = [...selector];
  browser.saveViewportScreenshot(`./screens/${name}.png`, { hide });
};

export const capture = (name, selector = []) => {
  const hide = [...selector];
  browser.saveDocumentScreenshot(`./screens/${name}.png`, { hide });
};

const screenshot = {
  capture,
  captureViewport
};

export default screenshot;
