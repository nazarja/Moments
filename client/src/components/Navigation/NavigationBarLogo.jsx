import { Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/default-logo.png';

const Logo = () =>
    <Nav.Link as={Link} to="/">
        <Navbar.Brand>
            <Image src={logo} alt="logo" height={45} />
        </Navbar.Brand>
    </Nav.Link>;

export default Logo;