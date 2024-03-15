import { Navbar, Nav, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useClickOutsideToggle from '../../hooks/useClickOutsideToggle';
import NavigationBarLogo from './NavigationBarLogo';
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';

const NavigationBar = () => {
    const isAuthenticated = useSelector(state => state.user.auth.isAuthenticated);
    const { ref, expanded ,setExpanded } = useClickOutsideToggle();
    const { pathname } = useLocation();


    const linkClassName = param =>
        param === pathname
            ? 'navlink-active'
            : '';

    return (
        <Navbar expanded={expanded} expand="md" fixed="top" className="navigation-bar">
            <Container>
                <NavigationBarLogo />
                <Navbar.Toggle
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse>
                    <Nav className='pt-0'>
                        {
                            isAuthenticated
                                ? <LoggedInLinks linkClassName={linkClassName} />
                                : <LoggedOutLinks linkClassName={linkClassName} />
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;