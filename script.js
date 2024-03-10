gsap.registerPlugin(ScrollTrigger);
gsap.to("#nav",{
    backgroundColor : "rgba(0, 0, 0, 0.700)",
    height : "10vh",
    duration : "0.5",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers: "true",
        start:"top, -10%",
        end:"top, -11%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor : "rgba(0, 0, 0, 0.900)",
    duration: "0.5",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:"true",
        start:"top, 80%",
        end:"top, 50%",
        scrub:2,
    }
})
// gsap.to("#effect",{
//     color:"#fff",
//     duration:0.5,
//     scrollTrigger:{
//         // markers:true,
//         start:"top -30%",
//         end:"top -80%",
//         scrub:2,
//     }
// })


