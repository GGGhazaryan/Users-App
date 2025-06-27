import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div style={{ padding: 20 }}>
            <h2>User #{id} - Posts</h2>
            {posts.map(post => (
                <div key={post.id} style={{ marginBottom: 20, border: '1px solid black', padding: 10, borderRadius: 8 }}>
                    <h3 style={{ color: 'black' }}>{post.title}</h3>
                    <p>{post.body}</p>
                    <button
                        onClick={() => fetchComments(post.id)}
                        className="commentBtn"
                        style={{ marginTop: '10px' }}
                    >
                        Comments
                    </button>
                </div>
            ))}

            {showPopup && (
                <div style={{
                    position: 'fixed',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'gray',
                    border: '2px solid black',
                    padding: '20px',
                    zIndex: 9999,
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    width: '80%',
                    borderRadius: '10px'
                }}>
                    <h3 style={{color: 'black'}}>Comments for Post #{activePostId}</h3>
                    <button onClick={() => setShowPopup(false)} style={{ float: 'right', marginBottom: 10 }}>
                        Close
                    </button>
                    {comments.map(comment => (
                        <div key={comment.id} style={{borderBottom: '1px solid #ccc', marginBottom: 10 }}>
                            <p><strong>{comment.name}</strong> ({comment.email})</p>
                            <p> {comment.body}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserPost;
