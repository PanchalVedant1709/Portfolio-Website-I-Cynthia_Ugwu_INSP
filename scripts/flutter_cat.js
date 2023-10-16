
// ------------------- Flutter Project ---------------------
let contain = null
let video = null
let playButton = null
let vanishButton = null
let clicked = false;




window.addEventListener('click',function(e)
    {

        console.log(e.target);
        clearTimeout(vanishButton);
        if(e.target.id == 'play-button')
        {
            clicked = true;
            // console.log("clicked is true");
            playButton = e.target;
            video = playButton.parentElement.childNodes[1];
            contain = playButton.parentElement
           
      

     if(video.paused || video.ended)
     {
         video.play()
         console.log("video is playing");
        playButton.classList.remove("activeBtn");
        playButton.classList.remove("play");
        playButton.classList.add("pause");
        contain.style.opacity = "1"
   
        vanishButton = setTimeout(
        function()
        {
            playButton.classList.add("activeBtn")
        },
        1000)
    
    }
    else
    {
        video.pause()
        console.log("video is stopping");
        playButton.classList.remove("activeBtn")
        playButton.classList.remove("pause");
        playButton.classList.add("play");
        contain.style.opacity = "0.6"
    }

   
    }


    
    if(clicked)
    {
        //when hovering 
        contain.addEventListener('mouseover',function(e){
            if(!video.paused)
            {  
                playButton.classList.remove("activeBtn")
                playButton.classList.remove("play")
                playButton.classList.add("pause")
                clearTimeout(vanishButton);

            }
        })
        
        //when unhover mouse
        contain.addEventListener('mouseleave', function(e){
            if(!video.paused)
            {
                    console.log("mouse exit");
                    playButton.classList.add("activeBtn")
                
            }
           
        })    
    
    
        //when video ends
        video.addEventListener('ended', function(){
            playButton.classList.remove("activeBtn");
            playButton.classList.remove("pause");
            playButton.classList.add("play");
            contain.style.opacity = "0.6"
            clearTimeout(vanishButton);

        })
    }
    else{
        clicked = false;
        // console.log("Clicked is false");
    }
}
)






