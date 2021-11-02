const preloadImage = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = reject;
  });

export const preloadImages = (arr) => Promise.all(arr.map(preloadImage));
