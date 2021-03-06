import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/home" activeStyle>
			Home
		</NavLink>
		<NavLink to="/favorite" activeStyle>
			Favorite
		</NavLink>
		<NavLink to="/search" activeStyle>
			Search
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;