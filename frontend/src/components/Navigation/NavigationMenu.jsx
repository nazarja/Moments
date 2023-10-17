import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import '../../styles/NavigationBar.css';

const Menu = () => {
    const user = useSelector(state => state.user);
    const { pathname } = useLocation();
    const linkClassName = param =>
        param === pathname
            ? "navlink-active"
            : "";

    return (
        <Nav>
            {user.isAuthenticated
                ? <LoggedInLinks linkClassName={linkClassName} />
                : <LoggedOutLinks linkClassName={linkClassName} />
            }
        </Nav>
    );
};

export default Menu;