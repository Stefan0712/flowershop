const toggleMenu = () =>{
    const menu = document.querySelector('.nav-links')
    const icon = document.querySelector('.nav-icon')
    icon.style.backgroundImage = '../images/close.png';
    menu.classList.toggle('show')
  }
  
  