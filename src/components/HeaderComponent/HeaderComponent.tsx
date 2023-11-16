import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  border-bottom: 5px solid lightgray;
  padding: 10px;
`;

const HamburgerMenu = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin-left: 10px;
  color: white;
`;

const Sidebar = styled.aside`
  background-color: black; /* Change the background color to black */
  color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: -250px;
  transition: left 0.3s;
  z-index: 1;
`;

const SidebarContent = styled.div`
  padding: 20px;
`;

const Nav = styled.nav`
  position: relative;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
  font-size: 1.2rem;
  cursor: pointer;
  a {
    color: white; /* Change the text color to white */
    text-decoration: none;
  }
`;

export default function HeaderComponent() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    if (isSidebarVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <>
      <Header>
        <Nav>
          <NavList>
            <NavItem>
              <HamburgerMenu onClick={toggleSidebar}>☰</HamburgerMenu>
            </NavItem>
            <NavItem>
              <Link to="https://www.google.com" target="_blank" rel="noopener noreferrer">
                Google
              </Link>
            </NavItem>
          </NavList>
        </Nav>
        <Nav>
          <NavList>
            <NavItem>
              <Link to="./welcome/pgautam" style={{ marginLeft: 'auto' }}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="./scores" style={{ marginLeft: 'auto' }}>Scores</Link>
            </NavItem>
            <NavItem>
              <Link to="./about" style={{ marginLeft: 'auto' }}>About</Link>
            </NavItem>
            <NavItem style={{ backgroundColor: '#76b5c5', borderRadius: '20px', padding: '5px 10px' }}>
              <Link to="/logout" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
            </NavItem>
          </NavList>
        </Nav>
      </Header>
      <Sidebar ref={sidebarRef} style={{ left: isSidebarVisible ? '0' : '-250px' }}>
      <SidebarContent>
        <NavItem style={{ marginBottom: '10px' }}>
          <Link to="/welcome/pgautam">Home</Link>
        </NavItem>
        <NavItem style={{ marginBottom: '10px' }}>
          <Link to="/quiz">Quiz</Link>
        </NavItem>
        <NavItem style={{ marginBottom: '10px' }}>
          <Link to="/todos">ToDo</Link>
        </NavItem>
        <NavItem style={{ marginBottom: '10px' }}>
          <Link to="/login">Login</Link>
        </NavItem>
        <NavItem style={{ marginBottom: '10px' }}>
          <Link to="/logout">Logout</Link>
        </NavItem>
      </SidebarContent>
      </Sidebar>
    </>
  );
}
