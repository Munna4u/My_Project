	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    // let darkmode = document.querySelector('#darkmode');
     
    // darkmode.onclick = () => {
    //     if(darkmode.classList.contains('bx-moon')){
    //         darkmode.classList.replace('bx-moon','bx-sun');
    //         document.body.classList.add('active');
    //     }else{
    //         darkmode.classList.replace('bx-sun','bx-moon');
    //         document.body.classList.remove('active');
    //     }
    // }
    
   // Project Section
    let more = document.querySelectorAll('.p-more');
    for(let i = 0; i < more.length; i++)
    {
        more[i].addEventListener('click', function()
        {
            more[i].parentNode.classList.toggle('active');
        })
    }
