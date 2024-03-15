import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from '../app/Layout';
import Home from '../pages/Home/Home';
import ProtectedRoute from './ProtectedRoute';
import RedirectRoute from './RedirectRoute';
import PageNotFound from '../components/UI/PageNotFound';
import Profile from '../pages/Profiles/Profile';
import AuthSignUp from '../pages/Auth/AuthSignUp';
import AuthSignIn from '../pages/Auth/AuthSignIn';
import PostCreate from '../pages/Posts/PostCreate';
import PostDetailPage from '../pages/Posts/PostDetailPage';

export const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:id' element={<PostDetailPage />} />


        <Route element={<RedirectRoute />}>
            <Route path='/signin' element={<AuthSignIn />} />
            <Route path='/signup' element={<AuthSignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/posts/create' element={<PostCreate />} />
        </Route>
        
        <Route path="/404" element={<PageNotFound />}/>
        <Route path="*" element={<PageNotFound />}/>
    </Route>
));
