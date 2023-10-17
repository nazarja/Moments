import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../app/Layout';
import Home from '../pages/Home/Home';
import ProtectedRoute from './ProtectedRoute';
import RedirectRoute from './RedirectRoute';
import Profile from '../pages/Profiles/Profile';
import SignUp from '../pages/Auth/SignUp';
import SignIn from '../pages/Auth/SignIn';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path='/' element={<Home />} />

        <Route element={<RedirectRoute />}>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
            <Route path='profile' element={<Profile />} />
        </Route>
    </Route>
));
