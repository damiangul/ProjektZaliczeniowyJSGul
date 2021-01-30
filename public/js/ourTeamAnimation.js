let pathEls = document.querySelectorAll("#SecondAnimation .SecondAnimation_g path");
for (let i = 0; i < pathEls.length; i++) {
    let pathEl = pathEls[i];
    let offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute('stroke-dashoffset', offset);
    anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(2000, 6000),
        delay: anime.random(0, 4000),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
        autoplay: true
    });
}