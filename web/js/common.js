const fullscreen = $('#fullscreen');
const body = $('body');
fullscreen.click(function() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullScreen) {
    document.documentElement.webkitRequestFullScreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.msRequestFullScreen) {
    document.documentElement.msRequestFullScreen();
  }
  $('#myModal').modal('show');
  setTimeout(() => {
    $('#myModal').modal('hide');
  }, 2000)
});

const exitScreen = $('#exitfullscreen');
exitScreen.onclick = function () {
  if (document.cancelFullscreen) {
    document.cancelFullscreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msCancelFullScreen) {
    document.msCancelFullScreen();
  }
};
function checkFull(){
  let isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
  if(isFull === undefined) isFull = false;
  return isFull;
}
$(window).resize(function () {
  if (!checkFull()) {
    console.log("退出全屏");
  }
});

document.onkeydown=function(e){
  e = e|| window.event || arguments.callee.caller.arguments[0];
  if(e && e.keyCode === 27){
    if (checkFull())
      exitScreen.onclick();
    e.preventDefault();
    e.stopPropagation();
  }
};

// headerMenuIcon.click(function() {
//   headerMenuRight.css({ 'display': 'block'})
//   setTimeout(function(){
//     $('#sidebar-wrapper').css({'right': '0'})
//     headerMenuRightMask.css({ 'background': 'rgba(0, 0, 0, 0.5)'})
//   }, 10);
// })
