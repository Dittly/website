// See https://reactjs.org/docs/javascript-environment-requirements.html
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0)
}
