import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import ProtectedRoute from './ProtectedRoute';
import RedirectRoute from './RedirectRoute';
import Profile from '../pages/Profiles/Profile';
import Login from '../pages/Auth/Login';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path='/' element={<Home />} />

        <Route element={<RedirectRoute />}>
            <Route path='/login' element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
            <Route path='profile' element={<Profile />} />
        </Route>
    </Route>
));
