import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/list.scss';

type Planet = {
    _id: string;
    name: string;
}

export function ListPlanets() {
    const [planets, setPlanets] = useState<Planet[]>();

    useEffect(() => {
        async function loadPlanets() {
            const response = await api.get('/planets')

            setPlanets(response.data);
        }
        loadPlanets();
    }, [])

    return (
        <div className="list-content">
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