// locomotive scroll 
 
function closeMenu() {
    menuIcon.classList.remove('rotate');
    menu.classList.remove('activateMenu');
}

var sc = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    duration: 2
});




// pointer dot
function mouseCirclePointer(xscale, yscale){
    window.addEventListener("mousemove", function(e){
        document.querySelector("#pointer-cir").style.display = `unset`
        // document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(${xscale}, ${yscale})`
        document.querySelector("#pointer-cir").style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1,1)`
    })
}
mouseCirclePointer();


let menuNavText = document.getElementById('menu')
let menu = document.getElementById('clickMenu')
let menuIcon = document.querySelector(".ri-menu-line")
let click = 0
console.log(menu);

menuNavText.addEventListener('click',function(){
    menu.classList.toggle('activateMenu')
    menuIcon.classList.toggle('rotate')
})


document.addEventListener('scroll', function(){
    console.log('scrolling');
});


document.addEventListener('click', function(event) {
    // Check if the clicked element is not the menu or the menu button
    if (!menu.contains(event.target) && event.target !== menuNavText && !menuIcon.contains(event.target)) {
        closeMenu();
    }
});



sc.on('scroll', closeMenu);