import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/home.scss';
import api from '../services/api'
import { FormEvent } from 'react';

export function Home() {
    const [planetName, setPlanetName] = useState('');
    const history = useHistory();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await api.post('/planets', {
            planetName: planetName,
        });

        history.push('/planets');
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