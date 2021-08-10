import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/list-planets.scss';

type Planet = {
    _id: string;
    name: string;
}

export function ListAirships() {
    const [planets, setPlanets] = useState<Planet[]>();

    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/planets')

            setPlanets(response.data);
        }
        loadUsers();
    })

    return (
        <div className="planet-content">
            <ul>
                {planets?.map(planet => (
                    <li key={planet._id}>
                        {planet.name}
                    </li>
                ))}
            </ul>

            <Link to="/">
                <button type="button">Home</button>
            </Link>
        </div>
    );
}