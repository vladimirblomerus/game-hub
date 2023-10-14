import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Genre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchGenresResponse>("/genres", {signal: controller.signal})
            .then(({ data }) => {
                setGenres(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false)
            });
            console.log("Fetched genres")
            return () => controller.abort();
    }, []);

    return {genres, error, isLoading}
}

export default useGenres;