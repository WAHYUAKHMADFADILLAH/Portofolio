// Toggle class active

const navbarNav = document.querySelector('.navbar-nav')

// Ketika Humberger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
   navbarNav.classList.toggle('active')
}

// Click diluar sidebar unruk menghlangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active'); 
  }
})


