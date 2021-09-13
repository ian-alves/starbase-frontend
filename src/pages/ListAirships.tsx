import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/list.scss';

type Airship = {
    _id: string;
    name: string;
    capacity: number;
}

export function ListAirships() {
    const [airships, setAirships] = useState<Airship[]>();

    useEffect(() => {
        async function loadAirships() {
            const response = await api.get('/airships')

            setAirships(response.data);
        }
        loadAirships();
    }, [])

    return (
        <div className="list-content">
            <ul>
                {airships?.map(airship => (
                    <li key={airship._id}>
                        {airship.name}
                    </li>
                ))}
            </ul>

            <Link to="/">
                <button type="button">Home</button>
            </Link>
        </div>
    );
}