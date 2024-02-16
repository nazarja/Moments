import { useSelector } from 'react-redux';
import { signOutService } from '../../services/userService';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Avatar from '../UI/Avatar';

const LoggedInLinks = ({ linkClassName }) => {
    const profile = useSelector(state => state.user.profile);  

    return (
        <>
            <Nav.Link as={Link} className={`add-post-link ${linkClassName('/posts/create')}`} to="/posts/create">
                <i className="far fa-plus-square"></i>
                Add Post
            </Nav.Link>
            <Nav.Link as={Link} className={linkClassName('/')} to="/">
                <i className="fas fa-home"></i>
                Home
            </Nav.Link>
            <Nav.Link as={Link} className={linkClassName('/feed')} to="/feed">
                <i className="fas fa-stream"></i>
                Feed
            </Nav.Link>
            <Nav.Link as={Link} className={linkClassName('/liked')} to="/liked">
                <i className="fas fa-heart"></i>
                Liked
            </Nav.Link>
            <Nav.Link as={Link} className={linkClassName('')} to="/" onClick={() => signOutService()}>
                <i className="fas fa-sign-out-alt"></i>
                Sign Out
            </Nav.Link>
            <Nav.Link as={Link} className={linkClassName('/profile')} to={`/profile`}>
                <Avatar src={profile.profile_image} username={profile.username} />
            </Nav.Link>
        </>
    );
};

export default LoggedInLinks;