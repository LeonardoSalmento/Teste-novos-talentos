import React, {useState} from 'react';
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap';
import { Link,useHistory } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
 
  const toggle = () => {
    setOpen(!open);
  }

  const history = useHistory();
    function handleLogout () {
        localStorage.clear();
        history.push('/login');

    }
  return (
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={ Link } to={'/'}>Tarefas</NavbarBrand>
      <NavbarToggler onClick={ toggle } />
      <Collapse isOpen={open} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            { <NavLink tag={Link} onClick={handleLogout}>Logout</NavLink>}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Header;