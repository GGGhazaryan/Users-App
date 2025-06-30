 import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserPost.css';

function UserPost() {
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [activePostId, setActivePostId] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            });
    }, [id]);

    const fetchComments = (postId) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data);
                setActivePostId(postId);
                setShowPopup(true);
            });
    };

    if (loading) return <div>Loading posts...</div>;

    return (
        <div className="post-container">
            <h2>User #{id} - Posts</h2>
            {posts.map(post => (
                <div key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => fetchComments(post.id)} className="comment-btn">
                        Comments
                    </button>
                </div>
            ))}

            {showPopup && (
                <div className="popup">
                    <button className="close-btn" onClick={() => setShowPopup(false)}>Close</button>
                    <h3>Comments for Post #{activePostId}</h3>
                    {comments.map(comment => (
                        <div key={comment.id} className="comment">
                            <p><strong>{comment.name}</strong> ({comment.email})</p>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserPost;
