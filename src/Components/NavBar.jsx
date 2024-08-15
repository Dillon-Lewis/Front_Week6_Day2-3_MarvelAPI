import { NavLink, Link } from "react-router-dom";

function NavBar(){
    return(
        <>
        <Link to="/">
            <img src="banner.jpg" alt="marvel logo" height="200" />
        </Link>
        <nav className="clearfix">
            <NavLink to="/characters" activeClassName='active'>Marvel Character List</NavLink>
            <NavLink to="/comics" activeClassName='active'>Comics</NavLink>
        </nav>
        </>
    )
}


export default NavBar;