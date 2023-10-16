# IIIrd section image custom

# css

<!-- #about{
    width: 100%;
    height: 100vh;
    color: #fff;
    display: flex;
   justify-content: center;
}

#aboutsec{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

#container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-left: 30vw;

}

#imageabout{
    display: flex;
    align-items: start;

}

#imageabout img{
    width: 17vw;
    height: 17vw;
    border-radius: 100%;
    object-fit: cover;
    padding: 10px;
}

#textabout{
    margin-left: 50px;
}

#textabout h5{
   opacity: 0.6;
   line-height: 1;
   font-size: 1.1vw;
   line-height: 1.5;
}


#textabout p{
    /* font-size: 1.1vw; */
    font-size: 17px;
    width: 50vh;
    font-weight: 400;
    line-height: 1.5;
}

#btn-lt{
    /* font-size: 1vw; */
    font-size: 17px;
    padding: 8px 20px;
    background-color: black;
    color: #fff;
    border: 1px white solid;
    font-weight: 400;
    border-radius: 25px;
    cursor: pointer;
    transition: 0.5s ease-in-out;
}

#btn-lt:hover{
    background-color: #fff;
    color: black;
} -->

# html

  <!-- <div id="about">

            <div id="aboutsec">
                <div id="container">
                    <div id="imageabout">
                        <img src="./img/me.jpg" alt="">
                    </div>
                    <div id="textabout">
                        <h5>(About me)</h5>
                        <p>I'm a product designer with a passion for creating products that not only look good but also solve real problems. When I'm not sketching ideas on paper, you can find me binge-watching a Netflix series or playing video games. My design philosophy is simple: make it visually appealing, functional, and bring a smile to people's faces. I'm the designer you want on your team if you want to make people say 'I need that in my life!'.</p>   <br>
                        <button id="btn-lt">Let's Talk</button> 
                    </div>

                </div>

                
            </div>
        </div> -->

   <div class="footerContainer">
        <div id="footer">
            <div id="footerleft">
                <h5 id="weekday">WEEKDAY</h5>
                <h5 id="datestamp">DATE</h5>
                <h5 id="timestamp">TIME</h5>
            </div>
            <div id="footerright">
                <a href="mailto:vedant7panchal@gmail.com" target="_blank">
                    <i class="ri-mail-fill"></i>
                    <!-- <p>Github</p> -->
                </a>
                <a href="https://github.com/PanchalVedant1709" target="_blank"> 
                    <i class="ri-github-fill"></i>
                    <!-- <p>Github</p> -->
                </a>
                <a href="spotify:playlist:7JgS7uTwlUciqgnPCFbcBq" target="_blank">
                    <i class="ri-spotify-fill"></i>
                    <!-- <p>Instagram</p> -->
                </a>
                <a href="https://www.linkedin.com/in/panchal-vedant-2130b7261" target="_blank">
                    <i class="ri-linkedin-fill"></i>
                    <!-- <p>LinkedIn</p> -->
                </a>
                <a href="https://twitter.com/idiot_samwitch" target="_blank">
                    <i class="ri-twitter-x-fill"></i>
                    <!-- <p>Twitter</p> -->
                </a>
    
            </div>
        </div>
        <div id="footer_bottom">
            <!-- <p class="lang-name"> name </p> -->
        </div>
        </div>

# video player

// ------------------- Flutter Project ---------------------

// ------------------- Flutter Project ---------------------
// let playButton = document.querySelector("#play-button")
let contain
let video = null
let playButton = null
let vanishButton
let clicked = false;

window.addEventListener('click',function(e)
{
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
        video.addEventListener('mouseenter',function(e){
            if(!video.paused)
            {
                console.log("mouse eneter");
                playButton.classList.remove("activeBtn")
                playButton.classList.remove("play")
                playButton.classList.add("pause")
                clearTimeout(vanishButton);

            }
        })

        //when unhover mouse
        video.addEventListener('mouseleave', function(e){
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

/_ Global CSS file _/

\*{
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: "General Sans";
font-weight: 400;
height: fit-content;
}

::selection{
background-color: #fff;
color: black;
}

html, body{
width: 100%;
height: 100%;
background-color: black;
color: #fff;

}

#pointer-cir{
display: none;
width: 10px;
height: 10px;
background-color: #fff;
position: absolute;
z-index: 999999;
border-radius: 50%;
transition: all cubic-bezier(0.19, 1, 0.22, 1) .7s;
pointer-events: none;
}

#main{
width: 100%;

}

/_ --------------------------------------------------------------------------- _/

/_ header _/

.navbar{
z-index: 9999;
position: fixed;
top: 0;
width: 100%;
/_ background-color: rgba(255, 255, 255, 0.6); _/
background-color: black
}

#nav{
height: 10%;
display: flex;
/_ align-items: center; _/
justify-content: space-between;
width: 100%;
padding: 40px 40px;
/_ color: #fff; _/
color: white;

}

#nav a{
text-decoration: none;
font-size: 18px;
/_ color: #fff; _/
color: white;
}

#my-name{
font-weight: 900;
transition: transform 1s ease, opacity 1s;
}

#my-name:hover{
transform: scale(1.05);
opacity: 0.6;

}

#nav h4{
font-weight: 900;
cursor: pointer;
user-select: none;
}

#nav h4:hover{
opacity: 0.6;
}

.ri-menu-line{
display: inline-block;
transition: transform 0.6s ease;
}

.ri-menu-line.rotate{
transform: rotate(90deg);
}

/_ #nav h4::after{
content: '+';
font-size: 1.2vw;
display: inline-block;
transition: transform 0.6s ease;
} _/

/_ #nav h4:active::after{
transform: rotate(45deg);
} _/

#menuContainer{
width: fit-content;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

/_ #menuContainer ul{ _/
#clickMenu{
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
list-style: none;
background-color: #fff;
border-radius: 25px;
top: 140%;
right: -50%;
left: -50%;
transition: opacity 1s ease, visibility 1s ease;
opacity: 0;
visibility: hidden;
/_ transform: translate(-50%,-50%); _/
pointer-events: none;

}

#menuContainer ul.activateMenu{
visibility: visible;
opacity: 100%;
transition: opacity 2s ease;
pointer-events: all;
}

#menuContainer ul li{
width: 100%;
cursor: pointer;
text-align: center;
padding: 1vw;
/_ border-radius: 25px; _/
transition: background-color 0.5s;

}

#menuContainer ul li:not(:last-child){
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: grey;
}

#menuContainer ul li a{
font-weight: 900;
font-size: 15px;
color:black;
transition: color 0.5s;
}

#menuContainer ul li:hover{
background-color: rgba(8, 8, 8, 0.2);
}

#menuContainer ul li:hover a{
color: #666;
}

/_ -------------------------------------------------------------------------- _/

/_ footer _/

.footerContainer{
position: absolute;
width: 100%;
height: 15vh;
bottom: 0;  
 padding: 40px 0px 40px 0px;
display: flex;
flex-direction: column;
align-items: start;
}

#footer{
padding: 0px 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
}

#footerleft{
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
}

#footerleft h5{
font-size: 1vw;
font-weight: 500;
text-transform: uppercase;
}

#footerright{
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
}

#footerright a{
text-decoration: none;
color: #fff;
font-size: 1vw;
font-weight: 500;
text-transform: uppercase;
transition: transform 1s ease-in-out, opacity 1s;
text-align: center;

}

#footerright a i{
font-size: 25px;
}

#footerright a i:hover{
opacity: 0.6;
}

#footerright a:hover{
transform: scale(1.2);

}

#weekday{
cursor: pointer;
}
#weekday:hover{
color: grey;
user-select: none;
-webkit-user-select: none;
}

#footer_bottom{
/_ position: absolute; _/
padding: 0px 40px;
width: fit-content;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
}

.lang-name{

    font-size: 12px;
    color: #888;

}
/\* ---------------------------------------------------------------------------------------------------------------------
