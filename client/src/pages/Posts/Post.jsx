import { Card } from 'react-bootstrap';
import Avatar from '../../components/UI/Avatar';
// import '../../styles/posts.css';

const Post = ({ post }) => {
    return (
        <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
                <Avatar src={post.profile_image} username={post.owner} size={50} />
                <span>{post.updated_at}</span>
            </Card.Header>
            <Card.Img src={post.image} alt={post.title} />
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