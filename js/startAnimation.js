let lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 2000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false,
});

let animation = anime({
  targets: ".segment",
  width: "25%",
  duration: 2000,
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
}, 2300);
