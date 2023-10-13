const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});





// pointer dot
function mouseCirclePointer(xscale, yscale){
    window.addEventListener("mousemove", function(e){
        document.querySelector("#pointer-cir").style.display = `unset`
        document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`
    })
}
mouseCirclePointer();


//skew animation
var timeout;
function skewPointerWhenMoving(){

    // default scale value
    var xscale = 1;
    var yscale = 1;
    var xprev ;
    var yprev ;  
    window.addEventListener('mousemove', function(e){
       clearTimeout(timeout)

        xscale = gsap.utils.clamp(.8,1.2,e.clientY- yprev)
        yscale = gsap.utils.clamp(.8,1.2,e.clientX- xprev)

        xprev = e.clientX
        yprev = e.clientY

        mouseCirclePointer(xscale, yscale)
        timeout = setTimeout(() => {
            document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`
        }, 100);
    })
}
skewPointerWhenMoving()




// first page slidde up animation
function firstPageAnimation(){
    var tl = gsap.timeline();
    


    tl.from("#nav", {       
        y: '-10',               // from this to current position
        opacity: 0,                       
        duration: 1,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,            //from current position [transformed] to this position  
        delay: -1,              
        stagger: 0.10
    })
    .from("#herofooter",{
        y:-10,
        opacity: 0,                    // from this to current position
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}
firstPageAnimation()

//elem image float 
// document.querySelectorAll(".elem").forEach(function (elem){
//     var rotate = 0;
//     var diffrot = 0;
    
   

//     // elem.addEventListener('mousemove', function(e){
//     //    var diff = e.clientY - elem.getBoundingClientRect().top;
//     //    diffrot = e.clientX - rotate;
//     //    rotate = e.clientX;
    
//     //    gsap.to(elem.querySelector("img"), {
//     //     opacity: 1,
//     //     ease: Power3,
//     //     top: diff,
//     //     left: e.clientX,
//     //     rotate: gsap.utils.clamp(-20,20,diffrot * 0.2)
//     //    }) 
//     // })

   

//     elem.addEventListener('mouseleave', function(e){
//        gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 1
//        }) 
//     })

// })


//timestamp footer

let timeslot = document.querySelector("#timestamp")
let dateslot = document.querySelector("#datestamp")
let weekdslot = document.querySelector("#weekday")

const op_d_m = {
    month: "long",
    day: "numeric"
}

const op_y = {
    year: "numeric",
}

const op_wd = {
    weekday: "long"
}
let weekday = new Date().toLocaleDateString("en", op_wd)
let date_month = new Date().toLocaleDateString("en-US",op_d_m)
let year = new Date().toLocaleDateString("en-US",op_y)

weekdslot.innerHTML = `${weekday}`
dateslot.innerHTML = `${date_month} - ${year}`

const timechange = setInterval(() => {
    // let date = new Date().toLocaleTimeString()
    // let date = new Date().toLocaleDateString()
    let time = new Date().toLocaleTimeString()
    
   
    timeslot.innerHTML = `${time}`

    
}, 1000);


Array.prototype.random = function(){
    return this[Math.floor((Math.random()*this.length))];

}

weekdslot.addEventListener('click',function(){
    let lang = ["en", "kor", "hi", "guj","jap"]

    let randolang = lang.random();
   
    let weekday = new Date().toLocaleDateString(randolang, op_wd)
    weekdslot.innerHTML = `${weekday}`

        
  


})
// weekdslot.addEventListener('mouseleave',function(){
//       setTimeout(() => {
//           let weekday = new Date().toLocaleDateString("en", op_wd)
//           weekdslot.innerHTML = `${weekday}`
        
//       }, 300);


// })
