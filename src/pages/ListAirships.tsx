import { Link } from 'react-router-dom';
import { useAirship } from '../hooks/useAirship';
import '../styles/list.scss';

export function ListAirships() {
    const { airships } = useAirship();

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