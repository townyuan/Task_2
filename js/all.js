
//常見問題
$(document).ready(function() {
  $('.common-problem .accordion-header').click(function() {
    let content = $(this).next('.accordion-content');
    content.slideToggle();
    let icon = $(this).find('.accordion-icon');
    icon.toggleClass('rotate');
  });
});