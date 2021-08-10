import { useHistory } from 'react-router-dom';
import '../styles/home.scss';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

export function Home() {
    const { user, signInWithGoogle } = useAuth();
    const history = useHistory();

    async function handleCreatePlanet() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/planets/new');
    }

    async function handleCreateAirship() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/airship/new');
    }

    return (
        <div className="home-content">
            <Button type="button" onClick={handleCreatePlanet}>Criar Planeta</Button>
            <Button type="button" onClick={handleCreateAirship}>Criar Nave</Button>
        </div>
    );
};