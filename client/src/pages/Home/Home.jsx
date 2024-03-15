import { useState, useEffect } from 'react';
import { getPostsService } from '../../services/postService';
import SearchBar from '../../components/Forms/FormSearchBar';
import NoResultsFound from '../../components/UI/NoResultsFound';
import Post from '../Posts/Post';
import Loading from '../../components/UI/Loading';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const posts = await getPostsService();
            setPosts(state => [...state, ...posts]);
            setLoaded(true);
        })();
    }, []);

    return loaded
        ? (
            <>
                <SearchBar />
                {
                    posts.length
                        ? posts.map(post => <Post key={post.id} post={post} />)
                        : <NoResultsFound text={"No posts yet, be the first and create a post."} />
                }
            </>

        )
        : <Loading />
};

export default Home;