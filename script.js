gsap.registerPlugin(ScrollTrigger);
const curtains = document.querySelectorAll('.curtain');
const cursor = document.querySelector('.cursor');
const body = document.querySelector('body');



var initialPath = `M 10 100 Q 500 100 1300 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;
var string1 = document.querySelector(".string-1");
var string2 = document.querySelector(".string-2");
string1.addEventListener("mousemove", (dets) => {
    finalPath = `M 10 100 Q ${dets.x} ${dets.y} 1300 100`;   
    gsap.to("svg path",{
       
        attr:{
            d:finalPath,
            

        },
        duration:0.2,
            ease:"power3.out"
    })
});


string1.addEventListener("mouseleave", () => {
    gsap.to("svg path",{
       
        attr:{
            d:initialPath,
           
        },
         duration:1.5,
            ease:"elastic.out(1,0.2)"
    })
});

string2.addEventListener("mousemove", (dets) => {
    finalPath = `M 10 100 Q ${dets.x} ${dets.y} 1300 100`;   
    gsap.to("svg path",{
       
        attr:{
            d:finalPath,
            

        },
        duration:0.2,
            ease:"power3.out"
    })
});

string2.addEventListener("mouseleave", () => {
    gsap.to("svg path",{
       
        attr:{
            d:initialPath,
           
        },
         duration:1.5,
            ease:"elastic.out(1,0.2)"
    })
});




let tl = gsap.timeline();

document.body.style.cursor = 'none';

body.addEventListener('mousemove', (event) => {
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 0.1
    });
});

tl.fromTo(
    '.curtain-1 h1',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.1, ease: "power2.out" }
)
.to(
    '.curtain-1',
    { y: "-100%", duration: 0.1, ease: "power2.inOut" },
    "+=0.7" 
)
.fromTo(
    '.curtain-2 h1',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
)
.to(
    '.curtain-2',
    { y: "-100%", duration: 0.1, ease: "power2.inOut" },
    "+=1" 
)
.add(() => {
    curtains.forEach(curtain => curtain.style.display = 'none');
    document.body.style.overflow = 'auto';
    document.body.style.cursor = 'auto';
})
.to("#page-3 h1",{
    transform:"translateX(-90%)",
    scrollTrigger:{
        trigger:".skills",
        scroller:"body",
        start:"top -10%",
        end:"top -100%",
        markers:true,
        scrub:2,
        pin:true,
    }
})
.to("#page-5 h1",{
    transform:"translateX(-90%)",
    scrollTrigger:{
        trigger:".projects",
        scroller:"body",
        start:"top -10%",
        end:"top -100%",
        markers:true,
        scrub:2,
        pin:true,
    }
});





