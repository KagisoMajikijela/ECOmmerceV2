let users = [
    {username :'usernavevalue', userprofile :'userimg'},
    {username:'usernavevalue', userprofile :'userimg'}
]
//functtion to chech login username//
const loggedin =false
const Sloogedin =true
const username = document.getElementsByName('username')
const password =document.getElementsByName('password')
const loginbtn =document.getElementById('login-btn')
loginbtn.addEventListener('click',login)
 let prsnusername =JSON.oarse(username)
 

function login(){
    
    //Error in code to be fixed 
    if(!username==username || !password ==password)
        
        window.alert('Wrong Loggin credentials')
    else {
        window.alert(`Welcome back ${users.username}`)
        window.location.href='home.html'
    }

    if(Sloogedin)
        window.location.href='home.html'
    while(loggedin)
        window.alert('You are not logged in')
}