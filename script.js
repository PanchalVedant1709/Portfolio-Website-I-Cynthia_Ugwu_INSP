// locomotive scroll 
var sc = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    duration: 2
});


//internal redirecting page
const next_btn = document.getElementById('sc_next')
next_btn.addEventListener('click',function () {
    sc.scrollTo(document.querySelector("#second"),200) //first argument is target, second is offset
})

const end_btn  = document.getElementById('sc_end')
end_btn.addEventListener('click',function () {
    sc.scrollTo(document.body.scrollHeight)
})




// pointer dot
function mouseCirclePointer(xscale, yscale){
    window.addEventListener("mousemove", function(e){
        document.querySelector("#pointer-cir").style.display = `unset`
        // document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`
        document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`
    })
}
mouseCirclePointer();



//skew animation
// var timeout;
// function skewPointerWhenMoving(){

//     // default scale value
//     var xscale = 1;
//     var yscale = 1;
//     var xprev ;
//     var yprev ;  
//     window.addEventListener('mousemove', function(e){
//        clearTimeout(timeout)

//         xscale = gsap.utils.clamp(.8,1.2,e.clientY- yprev)
//         yscale = gsap.utils.clamp(.8,1.2,e.clientX- xprev)

//         xprev = e.clientX
//         yprev = e.clientY

//         mouseCirclePointer(xscale, yscale)
//         timeout = setTimeout(() => {
//             document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1, 1)`
//         }, 100);
//     })
// }
// skewPointerWhenMoving()



//arrow animation
// Argument pass fn call==========>hoverEvent() =========> arrowTransition() 
let nextCircle = document.querySelector('#sc_next')
hoverEvent(nextCircle);
let endCircle = document.querySelector('#sc_end')
hoverEvent(endCircle);



function hoverEvent(element){
    element.addEventListener('mouseenter',function(e){
        var arr_ele = element.firstChild;
        console.log(arr_ele);
        arrowTransition(arr_ele)
            
})
}

function arrowTransition(scrollele)
{
    scrollsvg = scrollele;

    gsap.to(scrollsvg,{
        y:'100%',
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: ()=>{
            
            gsap.fromTo(scrollsvg,{
                y: '-100%',
                duration: 0.8,
                ease: 'power2.inOut'
            },
            {   y:'0%',
                duration: 0.5,
                ease: 'power2.inOut'
            })
        }
    })

}
  


// first page animation
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



//timestamp footer
function displayFooter(){


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



Array.prototype.randomNum = function(){
    return this[Math.floor((Math.random()*this.length))];

}



function getLanguageName(langCode){
    const laguagename = {
        "en":"English",
        "kor": "Korean",
        "hi":"Hindi",
        "guj" : "Gujarati",
        "ja": "Japanese",
        "ger": "German", 
        "fr": "French", 
        "ar": "Arabic", 
        "es": "Spanish"
    }
    console.log(laguagename[langCode]);
    return laguagename[langCode] || langCode;
}


let previousLang;
weekdslot.addEventListener('click',function(){
    

    const lang = ["en", "kor", "hi", "guj", "ja", "ger", "fr", "ar", "es"]
    // const lang = ["en", "kor", "hi"]
    let randolang

    do {
        randolang = lang.randomNum()
       
    } while(randolang===previousLang)

    previousLang = randolang;

   
    let weekday = new Date().toLocaleDateString(randolang, op_wd)
    weekdslot.innerHTML = `${weekday}`


    let langslot = document.querySelector("#footer_bottom")
    // creating language name element
    let langName = document.createElement("p")
    langName.textContent = getLanguageName(randolang);
    langName.className = "lang-name"

    let existingLangName = langslot.querySelector(".lang-name");
    if (existingLangName) {
        langslot.removeChild(existingLangName);
    }
    langslot.appendChild(langName)
   


    //  fade in animation
    gsap.fromTo(langName, { opacity: 0 }, { opacity: 1, duration: 0.5 });

    // this will remove the langname after one second
    setTimeout(function () {
        // Use GSAP to animate the fade-out
        gsap.to(langName, { opacity: 0, duration: 0.5, onComplete: function () {
            if (langName.parentElement === langslot) {
                langslot.removeChild(langName);
            }
        }});
    }, 1000);





   




    //function for getting language name
   

})}
displayFooter()
