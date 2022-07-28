const menuToggler =  () => {
    const btn = document.getElementById("MenuToggler");
    const menu = document.getElementById("MainMenu");
    const icon = document.getElementById("MenuIcon" );

    btn.addEventListener("click", ()  =>  { 
        menu.classList.toggle("showMenu") 
        if (menu.classList.contains("showMenu")) {
            icon.src = "./images/icon-close.svg";
        } else {
            icon.src ="./images/icon-hamburger.svg";
        }
            
     } );
}

const showGreeting = () => {
    const title = document.getElementById('Greeting');
    const hour = new Date().getHours();
    let text = null;
    if( hour >= 6 && hour < 12)  text = "Good Morning!"
    else if (hour >= 12 && hour < 18) text = "Good Afternoon!"
    else if (hour >= 18)  text = "Good Evening!"
    title.textContent = text;
}

window.addEventListener ("DOMContentLoaded", () => {
    menuToggler();
    showGreeting();
})



