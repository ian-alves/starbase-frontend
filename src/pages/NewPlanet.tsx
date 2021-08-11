import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../styles/home.scss';
import api from '../services/api'
import { FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

export function NewPlanet() {
    const { user, signInWithGoogle } = useAuth();
    const [planetName, setPlanetName] = useState('');
    const history = useHistory();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!user) {
            await signInWithGoogle();
        }

        await api.post('/planets', {
            authorId: user?.id,
            planetName: planetName
        });

        history.push('/planets/list');
    }

    return (
        <div className="home-content">
            <form onSubmit={handleSubmit}>
                <input placeholder="Nome Planeta"
                    value={planetName}
                    onChange={e => setPlanetName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};