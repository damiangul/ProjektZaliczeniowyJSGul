const $firstInfo = $(".shortInfo__first");
const $secondInfo = $(".shortInfo__second");
const $thirdInfo = $(".shortInfo__third");
const $numberOfDays = $(".numberOfDays");

const currentDay = new Date();
const establishmentDate = new Date("01/12/2021");

let timeDifference = currentDay.getTime() - establishmentDate.getTime();
let timeDifferenceInDays = timeDifference / (1000 * 3600 * 24);

$numberOfDays.text(Math.floor(timeDifferenceInDays));

$(document).on("scroll", function () {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();

  const shortInfosFromTop = $firstInfo.offset().top;
  const shortInfosHeight = $firstInfo.outerHeight();

  if (scrollValue > shortInfosFromTop + shortInfosHeight - windowHeight) {
    $firstInfo.addClass("activeElement");
    $thirdInfo.addClass("activeElement");
    setTimeout(addClassToThirdInfo, 200);
  }
});

const addClassToThirdInfo = () => $secondInfo.addClass("showElement");
