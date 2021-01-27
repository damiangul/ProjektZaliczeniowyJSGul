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
  const windowsWidth = $(window).width();
  const scrollValue = $(this).scrollTop();

  const shortInfoFirstFromTop = $firstInfo.offset().top;
  const shortInfoFirstHeight = $firstInfo.outerHeight();

  const shortInfoSecondFromTop = $secondInfo.offset().top;
  const shortInfoSecondHeight = $secondInfo.outerHeight();

  const shortInfoThirdFromTop = $thirdInfo.offset().top;
  const shortInfoThirdHeight = $thirdInfo.outerHeight();

  if (windowsWidth <= 840) {
    if (scrollValue > shortInfoFirstFromTop + shortInfoFirstHeight - windowHeight) {
      $firstInfo.addClass("activeElement");
    }

    if (scrollValue > shortInfoSecondFromTop + shortInfoSecondHeight - windowHeight) {
      $secondInfo.addClass("showElement");
    } 
    
    if (scrollValue > shortInfoThirdFromTop + shortInfoThirdHeight - windowHeight) {
      $thirdInfo.addClass("activeElement");
    }
  } else {
    if (scrollValue > shortInfoFirstFromTop + shortInfoFirstHeight - windowHeight) {
      $firstInfo.addClass("activeElement");
      $thirdInfo.addClass("activeElement");
      setTimeout(addClassToThirdInfo, 200);
    }
  }
});

const addClassToThirdInfo = () => $secondInfo.addClass("showElement");
