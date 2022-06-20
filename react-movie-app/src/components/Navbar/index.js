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
		<NavLink to="/moviePage" activeStyle>
			MoviePage
		</NavLink>
		<NavLink to="/popular" activeStyle>
			Popular
		</NavLink>
		<NavLink to="/search" activeStyle>
			Search
		</NavLink>
		<NavLink to="/topRated" activeStyle>
			TopRated
		</NavLink>
		<NavLink to="/upcoming" activeStyle>
			Upcoming
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;