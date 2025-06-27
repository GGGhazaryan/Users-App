import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div style={{ padding: 20 }}>
            <h2>User #{id} - Albums</h2>
            {albums.map(album => (
                <div key={album.id} style={{ marginBottom: 20, border: '1px solid black', padding: 10, borderRadius: 8 }}>
                    <h3 style={{ color: 'black' }}>{album.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default UserAlbum;
