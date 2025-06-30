import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserAlbum.css';

function UserAlbum() {
    const { id } = useParams();
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
            .then(res => res.json())
            .then(data => {
                setAlbums(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading Albums...</div>;

    return (
        <div className="album-container">
            <h2>User #{id} - Albums</h2>
            {albums.map(album => (
                <div key={album.id} className="album-card">
                    <h3>{album.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default UserAlbum;
