document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
