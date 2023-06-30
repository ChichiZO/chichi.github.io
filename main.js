
const sr = ScrollReveal(
    {
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})
sr.reveal(`.home, .map`,{delay: 600, origin:'top'})
sr.reveal(`.history, .hist_content`,{delay: 600})
sr.reveal(`.hist2_content`,{delay: 700})
sr.reveal(`.hist3_content`,{delay: 800})

sr.reveal(`.footer`,{origin: 'top', interval: 100})
// sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
// sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
// sr.reveal(`.case__img`,{origin: 'top'})
// sr.reveal(`.case__data`)