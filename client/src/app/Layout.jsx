import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from '../components/Navigation/NavigationBar';

const Layout = () =>
    <>
        <NavigationBar />
        <main>
            <Container>
                <Outlet />
            </Container>
        </main>
    </>;

export default Layout;