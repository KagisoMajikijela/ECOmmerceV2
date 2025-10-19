// const Navmenue =document.getElementById('navmenue')
// Navmenue.addEventListener('click',togglehamburger)

function togglehamburger(){
    window.alert('i will hide the navmenue')
    Navmenue.style.display="None";
}

function closehamburger(){
    window.alert('Coder required')
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