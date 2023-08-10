var btnshow = document.querySelectorAll(".down");
var listdown = document.querySelectorAll(".product__select__list");
var down = document.querySelectorAll(".product__select-down");
var up = document.querySelectorAll(".product__select-up");

[...btnshow].forEach(function (btn, index) {
  btn.addEventListener("click", () => {
    listdown[index].classList.toggle("os");
    down[index].classList.toggle("product__select-down-182");
  });
});
var statur = 1;
var scrollS = 220;
$(".header__top-close").click(function () {
  $(".header__top").addClass("oh");
  $(".header__top-input").val(2);
  statur = 2;
  scrollS = scrollS - 70;
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    $(".backtop").removeClass("oh");
    $(".backtop").addClass("backtop--show");
  } else {
    $(".backtop").removeClass("backtop--show");
  }
  // header
  if ($(window).scrollTop() > scrollS) {
    $(".header").addClass("header__fixed");
    if (statur == 1) {
      $(".header__top").addClass("oh");
    } else {
      $(".header__top").addClass("oh");
    }
  } else {
    $(".header").removeClass("header__fixed");

    if (statur != 2) {
      $(".header__top").removeClass("oh");
      return false;
    } else if (statur != 1) {
      $(".header__top").addClass("oh");
    }
  }
});

$(".backtop").addClass("oh");
$(".backtop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});
$("#menu__show").click(function () {
  $(".mobile__header-menu").removeClass("oh");
  $(".mobile__header-overlay").removeClass("oh");
});
$(".mobile__header-overlay").click(function () {
  $(".mobile__header-menu").addClass("oh");
  $(".mobile__header-overlay").addClass("oh");
});

$(".header-right__btn").click(function () {
  $(".search").removeClass("oh");
  $(".search__overlay").removeClass("oh");
});
$(".search__overlay").click(function () {
  $(".search").addClass("oh");
  $(".search__overlay").addClass("oh");
});
