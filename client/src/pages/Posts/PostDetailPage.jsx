import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { getPostService } from '../../services/postService';
import { getCommentsService } from '../../services/commentService';
import Post from './Post';
import Loading from '../../components/UI/Loading';
import Comment from '../Comments/Comment';
import CommentForm from '../Comments/CommentForm';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const postResponse = await getPostService(id);
            const commentsResponse = await getCommentsService(id);
            setPost(postResponse);
            setComments(commentsResponse);
            setLoaded(true);
        })();
    }, [id]);

    return loaded && post
        ? (
            <div className="mb-5">
                <Post post={post} />
                <CommentForm id={post.id} />
                {
                    comments.length
                        ? (
                            <Container className="container-border m-0">
                                {
                                    comments.map(comment => <Comment key={`comment-${comment.id}`} comment={comment} />)
                                }
                            </Container>
                        )
                        : null
                }
            </div>
        )
        : <Loading />;
};

export default PostPage;