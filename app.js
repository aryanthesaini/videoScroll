const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

const section = document.querySelector('section')
const end = section.querySelector('h1')


//SCROLL MAGIC

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:3000,
    triggerElemnt: intro,
    triggerHook:0
})
    // .addIndicators()
    .setPin(intro)
    .addTo(controller)

    //text animation

const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0})



const scene2= new ScrollMagic.Scene({
    duration:1000,
    triggerElemnt: intro,
    triggerHook:0
})

.setTween(textAnim)
.addTo(controller)





//video animation

let accelamount = 0.1
let scrollPos = 0
let delay =0


scene.on("update", e=>{
    scrollPos = e.scrollPos/1000
})


setInterval(()=>{
    delay+=(scrollPos-delay)* accelamount
    video.currentTime= scrollPos
}, 210)