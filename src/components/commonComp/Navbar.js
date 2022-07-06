import React, { useState } from "react";
import {
  NavbarToggler,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  NavbarBrand,
  Navbar as Navbaar,
} from "reactstrap";
import mainLogo from "../../assests/icons/mainLogo.png";
import nav1 from "../../assests/icons/nav1.png";
import nav2 from "../../assests/icons/nav2.png";
import nav3 from "../../assests/icons/nav3.png";
const Navbar = () => {
  const [IsCollapseOpen, setIsCollapseOpen] = useState(false);
  return (
    <div className="container-fluid roes_navcon">
      <Navbaar light className="skola_nav" expand="lg">
        <NavbarBrand href="/">
          <div className="roes_logo">
            <NavLink href="/">
              <img src={mainLogo} alt="LogoImage" />
            </NavLink>
          </div>
        </NavbarBrand>
        <NavbarToggler
          onClick={() => setIsCollapseOpen(!IsCollapseOpen)}
          className="collapser"
        />
        <Collapse
          isOpen={IsCollapseOpen}
          navbar
          className="justify-content-end"
        >
          <Nav className="skola_cutom_nav me-auto mr-4 " navbar>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/">
                Shop
              </NavLink>
            </NavItem>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/pricing">
                ABONNEMENT
              </NavLink>
            </NavItem>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/coursedetails">
                ZAKELIJK
              </NavLink>
            </NavItem>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/aboutus">
                OUR STORY
              </NavLink>
            </NavItem>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/aboutus">
                <img src={nav1} alt="LogoImage" />
              </NavLink>
            </NavItem>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/aboutus">
                <img src={nav2} alt="LogoImage" />
              </NavLink>
            </NavItem>
            <NavItem className="roes_li">
              <NavLink className="roes_item" href="/aboutus">
                <img src={nav3} alt="LogoImage" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbaar>
    </div>
  );
};

export default Navbar;
