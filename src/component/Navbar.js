import { Link } from 'react-router-dom'

const Navbar = () => {
    const navbarToggleShow = () => {
        const navs = document.querySelectorAll('.Navbar_items')
  
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
    }

    return (
        <div className="Navbar">
            <div className="Navbar_link_brand">
                <Link to='/'> Code With Mercy </Link>
            </div>

            <div className="Navbar_link_toggle">
                <img src="menu.png" alt="Hamburger" onClick={navbarToggleShow} />
            </div>

            <div className="Navbar_items">
                <Link to='/about'> About </Link>
                <Link to='/project'> Projects </Link>
                <Link to='/skills'> Skills </Link>
                <Link to='/contact'> Contact </Link>
            </div>
        </div>
     );
}
 
export default Navbar;