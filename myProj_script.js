

let page_options;



const cardContainer = document.querySelector('.card-Container')
const card = document.querySelectorAll('#card')
// console.log(card);

cardContainer.addEventListener('click',function(event){
    const element = String(event.target.textContent);
    console.log(element);
    
    
    // if(element.includes('Catalog Flutter'))
    if(element.toUpperCase().match("CATALOG FLUTTER"))
    {
        console.log(element.innerHTML);
        window.open("http://127.0.0.1:5500/subpages/flutter_cat.html","_self");
        // window.location.href = "http://127.0.0.1:5500/index.html"
    }
    
})

