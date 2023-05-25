

$(document).ready(function() {

  //選單開合
  $(".menu-switch").click(function (e) {
		e.preventDefault();
		$(".menu-switch").toggleClass("active");
		$(".jq-dropdown").slideToggle();
	});
  


  //常見問題
  $('.common-problem .accordion-header').click(function() {
    let content = $(this).next('.accordion-content');
    content.slideToggle();
    let icon = $(this).find('.accordion-icon');
    icon.toggleClass('rotate');
  });

  // gotop
  $('.back-to-top').click(function(){
    // 使用動畫效果返回頂部
    $('html, body').animate({scrollTop: 0}, 500);
  });
});