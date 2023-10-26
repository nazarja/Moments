import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const AuthHeroSwitcher = ({ url }) =>
    <Nav.Link as={Link} to={url} className="auth-form-switcher">
        {
            url === '/signup'
                ? <>Already have an account? <span>Sign in</span></>
                : <>Don't have an account? <span>Sign up</span></>
        }
    </Nav.Link>;

export default AuthHeroSwitcher;