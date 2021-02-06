import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

const Header = () => {
    const [open, setOpen] = useState(false)
  
    const Toogle = () => {
      setOpen(!open)
    }
  
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Minhas Series</NavbarBrand>
        <NavbarToggler onClick={Toogle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/generos">Generos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
}

export default Header;