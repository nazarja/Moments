import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import logo from "../../assets/images/logo.png";
import '../../styles/NavigationBar.css';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" fixed="top" className="navigation-bar">
            <Container>
                <Nav.Link as={Link} to="/" className="navbar-logo">
                    <Navbar.Brand>
                        <Image src={logo} alt="logo" height={45} />
                    </Navbar.Brand>
                </Nav.Link>
                <NavigationMenu />
            </Container>
        </Navbar>
    );
};

export default NavigationBar;