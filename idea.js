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


function bgimgchanger(){
    let elems =document.querySelectorAll(".elem")
    let page2 =document.querySelector("#page2")
    elems.forEach(function(ele){
        ele.addEventListener("mouseenter",function(){
            let bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage=`url(${bgimg})`
        })
    })
}
bgimgchanger()


function navbutton(){
    let btn = document.querySelector(".btn")

    let flag = 0;
    btn.addEventListener("click", function () {
        if (flag == 0) {
            let t2 = gsap.timeline()
            t2.to(".list", {
                // display: "none",
                x: 375,
                color: "#F5E41B",
                    
            })
            t2.to("#mainlist", {
                color: "black",
            })
            flag=1;
        }
        else{
            let t3 = gsap.timeline()
            t3.to(".list", {
                // display: "none",
                x: -35,
                color:"black"
            })
            flag=0;
    
        }
    
    })
}
navbutton()

 function downbtn(){
    document.querySelector(".button").addEventListener("click",function(){
    scroll.scrollTo("#page2")
})
 }
 downbtn()

//  gsap for downbtn
gsap.to(".button",{
    y:15,
    duration:0.85,
    repeat:-1,
    yoyo:true
})

// back to top


function topbtn(){
    document.querySelector(".topbtn").addEventListener("click",function(){
    scroll.scrollTo(".page1")
})
}
topbtn()
