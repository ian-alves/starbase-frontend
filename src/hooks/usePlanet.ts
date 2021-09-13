import { useEffect, useState } from "react";
import api from "../services/api";

type Planet = {
    _id: string;
    name: string;
}

export function usePlanet() {
    const [planets, setPlanets] = useState<Planet[]>([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        api
            .get('/planets')
            .then((res) => {
                setPlanets(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { planets, error, loading };
}