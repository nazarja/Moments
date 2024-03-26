import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from '../../components/UI/Avatar';

const Post = ({ post }) => {
    return (
        <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <Nav.Link as={Link} to={`/profile/${post.profile_id}/`} className="text-capitalize">
                    <Avatar src={post.profile_image} username={post.owner} size={45} />
                </Nav.Link>
                <span>{post.updated_at}</span>
            </Card.Header>
            <Nav.Link as={Link} to={`/posts/${post.id}`}>
                <Card.Img src={post.image} alt={post.title} />
            </Nav.Link>
            <Card.Body className="text-center">
                <Card.Title className="my-2 text-capitalize">{post.title}</Card.Title>
                <Card.Text className="mt-3 mb-2">{post.content}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center align-items-center">
                <span className="d-inline-flex align-items-center me-3">
                    <i className={`fas fa-heart`} /> {post.likes_count}
                </span>
                <span className="d-inline-flex align-items-center">
                    <i className="far fa-comments" /> {post.comments_count}
                </span>
            </Card.Footer>
        </Card>
    );
};

export default Post;