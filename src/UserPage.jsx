import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './User.css';

function UserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);

    if (!user) return <div>Loading...</div>;

    return (
        <div className="user-container">
            <img
                src="https://avatars.mds.yandex.net/i?id=d44a2f9b7950ac31d2f42efc65d5e508bb88c229-5239568-images-thumbs&n=13"
                alt="user"
                className="user-img"
            />
            <h1 className="normal-p">{user.name}</h1>
            <p className="normal-p">Email: {user.email}</p>
            <p className="normal-p">City: {user.address.city}</p>
            <p className="normal-p">Phone: {user.phone}</p>
            <p className="normal-p">Street: {user.address.street}</p>
            <p className="normal-p">Zip-Code: {user.address.zipcode}</p>
            <p className="normal-p">Website: {user.website}</p>
            <p className="normal-p">Company name: {user.company.name}</p>
            <p className="normal-p">CatchPhrase: {user.company.catchPhrase}</p>

            <div className="button-group">
                <button onClick={() => navigate(`/users/${id}/post`)}>Post</button>
                <button onClick={() => navigate(`/users/${id}/album`)}>Album</button>
            </div>
        </div>
    );
}

export default UserPage;
