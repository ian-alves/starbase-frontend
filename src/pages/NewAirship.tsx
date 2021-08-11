import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import '../styles/home.scss';
import api from '../services/api'
import { FormEvent } from 'react';
import { useAuth } from '../hooks/useAuth';

export function NewAirship() {
    const { user, signInWithGoogle } = useAuth();
    const [airshipName, setAirshipName] = useState('');
    const [airshipCapacity, setAirshipCapacity] = useState('0');
    const history = useHistory();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!user) {
            await signInWithGoogle();
        }

        await api.post('/airships', {
            authorId: user?.id,
            airshipName: airshipName,
            airshipCapacity: airshipCapacity
        });

        history.push('/airships/list');
    }

    return (
        <div className="home-content">
            <form onSubmit={handleSubmit}>
                <input placeholder="Nome Nave"
                    value={airshipName}
                    onChange={e => setAirshipName(e.target.value)}
                />
                <input type="number"
                    value={airshipCapacity}
                    onChange={e => setAirshipCapacity(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};