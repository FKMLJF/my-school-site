import * as React from "react"
import Link from "gatsby-link";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import Logo from "../images/logo_2_kozepes.png"

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Brand>
                <Link to="/" className={"p-0 m-0 display-5 primary-red text-decoration-none"}>MySchool</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className={"border-0"} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Link className="nav-link" activeClassName={"active"} to="/">Főoldal</Link>
                    <Link className="nav-link" activeClassName={"active"} to="/language-certificate/">Nyelvvizsga</Link>
                    <Link className="nav-link my-primary" activeClassName={"active"} to="/contact/">Kapcsolat</Link>
                </Nav>
                <Nav className="ms-auto">
                    <a className="nav-link card" target={"_blank"} href={"https://euro.nyelvvizsgajelentkezes.hu"}>Nyelvvizsga jelentkezés!</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>);

}

export default MyNavbar
