import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Navigation/NavigationBar';
import { Container } from 'react-bootstrap';

const Layout = () =>
    <>
        <NavigationBar />
        <Container>
            <main>
                <Outlet />
            </main>
        </Container>
    </>;




export default Layout;