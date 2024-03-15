import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostService } from '../../services/postService';
import Post from './Post';
import Loading from '../../components/UI/Loading';

const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await getPostService(id);
            setPost(response);
            setLoaded(true);
        })();
    }, [id]);

    return loaded && post
        ? <Post post={post} />
        : <Loading />;
};

export default PostPage;