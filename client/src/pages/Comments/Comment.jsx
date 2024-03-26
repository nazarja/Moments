import Avatar from '../../components/UI/Avatar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Comment = ({ comment }) => {
    return (
        <div className="d-flex align-items-top py-2">
            <div className="d-inline-block me-3">
                <Avatar src={comment.profile_image} size={50} />
            </div>
            <div className="d-inline-block">
                <div>
                    <span className="d-inline-block pe-2 text-primary text-capitalize">
                        <Nav.Link as={Link} to={`/profile/${comment.profile_id}/`}>
                            {comment.owner}
                        </Nav.Link>
                    </span>
                    <span className="text-secondary">{comment.updated_at}</span>
                </div>
                <p>{comment.content}</p>
            </div>
        </div>
    );
};

export default Comment;