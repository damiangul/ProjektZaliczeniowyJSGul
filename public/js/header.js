let whichText = 0;
let lengthText = 0;
let activeLetter = -11;
let activeText = 0;
const txt = [
  "<bkgTeam>",
  "Zaufali nam nie jedni",
  "Front-end grupa do zadań specjalnych",
  "Zjedź na dół i poznaj nas",
  "</bkgTeam>",
];
const divs = $(".textInfo > div");

particlesJS.load("logoAnimation", "public/js/particles.json", () =>
  console.log("Particle załadowało się poprawnie")
);

const addLetter = () => {
  // Użyj w środku setTimeout
  if (activeLetter >= 0) {
    $(divs[activeText]).text(function (i, oldText) {
      return (oldText += txt[activeText][activeLetter]);
    });
  }

  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      activeLetter = -11;
      addLetter();
    }, 400);
  }
  setTimeout(addLetter, 30);
};

setTimeout(addLetter, 2400);
