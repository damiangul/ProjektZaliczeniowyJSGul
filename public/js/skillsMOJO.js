const burst = new mojs.Burst({
  radius: { 0: 500 },
  count: 5,
  children: {
    shape: "polygon",
    fill: "white",
    strokeWidth: { 1: 0 },
    radius: { 50: 0 },
    duration: 8000,
  },
});

const object = {
  radius: { 0: 500 },
  fill: "none",
  stroke: "white",
  opacity: { 3: 0 },
  duration: 6000,
};

const object1 = new mojs.Shape({
  ...object,
  delay: 500,
});

const object2 = new mojs.Shape({
  ...object,
  delay: 800,
});

const object3 = new mojs.Shape({
  ...object,
  delay: 1100,
});

const timeline = new mojs.Timeline({
  repeat: 100,
  delay: 3000,
})
  .add(burst, object1, object2, object3)
  .play();
