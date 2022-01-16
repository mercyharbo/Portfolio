const Navbar = () => {
    const navbarToggleShow = () => {
        const navs = document.querySelectorAll('.Navbar_items')
  
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }

    return (
        <div className="Navbar">
            <div className="Navbar_link_brand">
                <a href='/'> Code With Mercy </a>
            </div>

            <div className="Navbar_link_toggle">
                <img src="menu.png" alt="Hamburger" onClick={navbarToggleShow} />
            </div>

            <div className="Navbar_items">
                <a href="mailto:damilare791@gmail.com"> damilare791@gmail.com </a>
            </div>
        </div>
     );
}
 
export default Navbar;