import { useEffect, useState } from "react";
import api from "../services/api";

type Airship = {
    _id: string;
    name: string;
    capacity: number;
}

export function useAirship() {
    const [airships, setAirships] = useState<Airship[]>([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        api
            .get('/airships')
            .then((res) => {
                setAirships(res.data);
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

    return { airships, error, loading };
}