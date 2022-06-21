import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const Header = ({ title, path }) => {
    const navigate = useNavigate();
    const handleSelect = (eventKey) => navigate(eventKey);

    return (
        <Navbar>
            <Container style={{margin: "0"}}>
                <Navbar.Collapse className="justify-content-start" style={{ fontSize: "20px" }}>
                    {title}
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" >
                    <Nav onSelect={handleSelect}>
                        <Nav.Item>
                            <Nav.Link href={path} style={{color: "blue"}}>
                                More ...
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;