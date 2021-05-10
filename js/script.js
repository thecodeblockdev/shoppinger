const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }

}

showMenu('nav-toggle', 'nav-menu')

// Remove menu 

const navLinks = document.querySelectorAll('.nav__links');

function mylinkAction(){
    //Active linkAction
    navLinks.forEach(n=> n.classList.remove('active'));
    this.classList.add('active');

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');

}

navLinks.forEach(n=> n.addEventListener('click', mylinkAction));