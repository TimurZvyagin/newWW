$(function () {
  let header = $("#header"); /* это все шапка чтоб остовалась*/
  let intro = $("#intro");
  let introH;
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  $(window).on("scroll load resize ", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault(); /*че то ссылкой связано */

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html,body").animate(
      {
        scrollTop:
          elementOffset -
          75 /*крутая вещь тыкаешь на кноку и она тебя сама переключает на то что ты тыкнул */,
      },
      800
    ); /* как быстро будет переключать(измеряется в миллисек)*/
  });

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show"); /*убирает меньюшку*/
  });

  let slider = $("#rewiewsSlider");

  slider.slick({
    infinite: true /*прокрутка слайдов*/,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false /*убирает слова лишине */,
    dots: true,
  });
});
