import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Header = ({ title, path }) => {
    const navigate = useNavigate();
    const handleSelect = () => navigate(path);

    return (
        <Navbar>
            <Container style={{ margin: "0" }}>
                <Navbar.Collapse className="justify-content-start" style={{ fontSize: "20px", color: "blue" }}>
                    {title}
                </Navbar.Collapse>
                <button onClick={handleSelect} style={{ color: "blue", border: "none", backgroundColor: "white" }}>More...</button>
            </Container>
        </Navbar>
    )
}

export default Header;