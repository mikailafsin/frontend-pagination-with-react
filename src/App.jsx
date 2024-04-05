import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./components/Posts";

function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    return (
        <div className="container p-6">
            <h1 className="mb-3 text-2xl font-medium text-green-600">My Blog</h1>
            <Posts posts={posts} loading={loading} />
        </div>
    );
}

export default App;
