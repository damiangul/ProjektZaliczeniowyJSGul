let lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});

let animation = anime({
  targets: ".segment",
  width: "25%",
  duration: 1500,
  easing: "linear",
  delay: function (el, i, l) {
    return i * 100;
  },
  endDelay: 100,
  loop: false,
});

setTimeout(() => {
  $(".startAnimation").hide("slow");
  $("body").removeClass("animation");
  $(".nav__mobile").attr("class", "nav__mobile");
}, 1800);
