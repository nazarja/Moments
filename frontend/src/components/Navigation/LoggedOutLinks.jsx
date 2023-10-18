import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const LoggedOutLinks = ({ linkClassName }) => {
    return (
        <>
            <Nav.Link as={Link} className={linkClassName('/')} to="/">
                <i className="fas fa-home"></i>
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className={linkClassName('/signin')}>
                <i className="fas fa-sign-in-alt" />
                Sign In
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className={linkClassName('/signup')}>
                <i className="fas fa-user-plus" />
                Sign Up
            </Nav.Link>
        </>
    );
};

export default LoggedOutLinks;