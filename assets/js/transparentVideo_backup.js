// Detect if the device is Android
const isAndroid = /Android/i.test(navigator.userAgent);
const isFirefox = /Firefox/i.test(navigator.userAgent);
// const isAndroid = /Macintosh|MacIntel|MacPPC|Mac68K/i.test(navigator.userAgent);
if (isAndroid || isFirefox) {
  // Hide the video and show the image
  document.getElementById('transparentVideo').style.display = 'none';
  document.getElementById('androidVideo').style.display = 'block';
}