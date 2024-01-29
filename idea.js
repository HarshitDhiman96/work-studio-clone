function loading() {
    let t1 = gsap.timeline()


    t1.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    })
    t1.from(".yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "same")
    t1.to("#loader h1", {
        color: "black",
        delay: 0.6,
        duration: 0.5
    }, "same")
    t1.to("#loader", {
        display: "none",
        opacity: 0
    })
}
loading()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let elem = document.querySelectorAll(".elem")
let page2 = document.querySelectorAll(".page2")
elem.forEach(function (ele) {
    ele.addEventListener("mouseenter",function(){
        let bgimg=ele.getAttribute("data-img")
    })
});

