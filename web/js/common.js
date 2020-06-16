const headerMenuRight = $('.header-menu-right')
const headerMenuRightMask = $('.header-menu-right-mask')
const headerMenuIcon = $('.header-menu-icon')
headerMenuRightMask.click(function() {
  headerMenuRightMask.css({ 'background': 'rgba(0, 0, 0, 0)'})
  $('#sidebar-wrapper').css({
    'right': '-50%'
  })

  setTimeout(function(){
    headerMenuRight.css({ 'display': 'none'})
  }, 500);
})
headerMenuIcon.click(function() {
  headerMenuRight.css({ 'display': 'block'})
  setTimeout(function(){
    $('#sidebar-wrapper').css({'right': '0'})
    headerMenuRightMask.css({ 'background': 'rgba(0, 0, 0, 0.5)'})
  }, 10);
})


// back to top
const back = $('.back-to-top')
$(window).scroll(function(){
  const screenWidth = $(document.body).width()
  if (screenWidth <= 768) {
    return
  }
  if ($(window).scrollTop() > $(document.body).height() / 2){
    back.fadeIn(300);
  }
  else {
    back.fadeOut(300);
  }
});
back.click(function() {
  scrollTo(0, 0)
})
