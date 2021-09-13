import { Link } from 'react-router-dom';
import { usePlanets } from '../hooks/usePlanets';
import '../styles/list.scss';

export function ListPlanets() {
    const { planets } = usePlanets();

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