import * as React from "react"
import Link from "gatsby-link";
import {Container, Nav, Navbar} from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controles={'responsive-navbar-nav'}/>
                <Navbar.Collapse id={"responsive-navbar-nav"}>
                    <Nav>
                        <Link className="nav-link" to="/">Főoldal</Link>
                        <Link className="nav-link" to="/contact/">Kapcsolat</Link>
                        <Link className="nav-link" to="/language-certificate/">Nyelvvizsga</Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
