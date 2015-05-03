$(document).ready(function() {
  $('#contentone').mouseenter(function() {
    $(this).animate({backgroundSize: '125%'}, 1000);
  });
  $('#contentone').mouseleave(function() {
    $(this).animate({backgroundSize: '100%'}, 400);
  });
});

$(document).ready(function() {
  $('#contenttwo').mouseenter(function() {
    $(this).animate({
      backgroundPositionY: '50%'
    }, 1000);
  });
  $('#contenttwo').mouseleave(function() {
    $(this).animate({
       backgroundPositionY: '0%'
     }, 400);
  });
});

$(document).ready(function() {
  $('#expandedOne').hide();
})

$(document).ready(function() {
  $('#contentthree').mouseenter(function() {
    $('#expandedOne').show();
    $('#expansionOne').slideUp();
  });
  $('#contentthree').mouseleave(function() {
    $('#expandedOne').hide();
    $('#expansionOne').slideDown();
  })
});
/* img blur function */
/*function blurElement(element, size) {
     var filterVal = 'blur(' + size + 'px)';
     $(element)
         .css('filter', filterVal)
         .css('webkitFilter', filterVal)
         .css('mozFilter', filterVal)
         .css('oFilter', filterVal)
         .css('msFilter', filterVal)
         .css('transition', 'all 0.5s ease-out')
         .css('-webkit-transition', 'all 0.5s ease-out')
         .css('-moz-transition', 'all 0.5s ease-out')
         .css('-o-transition', 'all 0.5s ease-out');

 }*/