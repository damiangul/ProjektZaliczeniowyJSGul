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

let skillsB = anime({
  loop: true,
  targets: ".skillanimation",
  rotate: {
    value: 720,
    duration: 2000,
    easing: "easeInOutSine",
  },
  scale: {
    value: 1.2,
    duration: 4000,
    easing: "easeInOutQuart",
  },
  direction: "alternate",
  delay: 4000,
});

let textNode = document.querySelector(".text");

textNode.innerHTML = textNode.innerText
  .split(" ")
  .map((word) => {
    return `<span>${word}</span>`;
  })
  .join("&nbsp;");

let animeText = anime
  .timeline({ loop: true })
  .add({
    targets: ".text span",
    opacity: [0, 1],
    scale: [20, 1],
    easing: "easeOutCirc",
    duration: 2000,
    delay: (e, i) => 1000 * i,
  })
  .add({
    targets: ".text",
    opacity: [1, 0],
    scale: [1, 5],
    easing: "easeOutExpo",
    duration: 2000,
  });
