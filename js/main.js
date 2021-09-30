$(document).ready(function () {
  let tabsItem = $(".tabs__item");

  tabsItem.on('click', function(event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible');
    $(activeContent).toggleClass('visible');
    $('.tabs__item__active').toggleClass('tabs__item__active')
    $(this).toggleClass('tabs__item__active');
  });
});
