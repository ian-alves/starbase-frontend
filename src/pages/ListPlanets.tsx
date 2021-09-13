import { Link } from 'react-router-dom';
import { usePlanet } from '../hooks/usePlanet';
import '../styles/list.scss';

export function ListPlanets() {
    const { planets } = usePlanet();

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