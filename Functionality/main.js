// const Navmenue =document.getElementById('navmenue')
// Navmenue.addEventListener('click',togglehamburger)

const hamburgermenu =document.getElementById(`hamburger-menue`)
hamburgermenu.addEventListener(`click`,togglehamburger)
function togglehamburger(){
    hamburgermenu.style.display="flex";
}

function closehamburger(){
    hamburgermenu.addEventListener(`click`,()=>{
        hamburgermenu.style.display="none";
    })
}

const threeline =document.getElementsByClassName(`ham3line`)
// threeline.addEventListener(`click`)

function fixnavicon(){
    let con =1 
    if(togglehamburger){
        threeline.style.display="none"
    }
     else if (closehamburger){
        threeline.style.display="flex"
     }
     con=(con-1)
}
//functions for the hamburger menu to redirect to the page clicked //
//Home//
function home(){
    window.location.href="home.html"
}
//gallery//
function gallery(){
    window.location.href="gallery.html"
}
//contactUs//

function contactUs(){
    window.location.href="contactUs.html"
}
//cart//
function cart(){
    window.location.href="cart.html"
}
//login//
function login(){
    window.location.href="login.html"
}

// const locatiom =['home.html','gallery.html','contactUs.html','login.html']

// function locationpage(){
//     for(let i=0;i<locatiom.length; i++){
//         locatiom[i]
//     }
// }
// co
// function togglehamburger(){

// }

