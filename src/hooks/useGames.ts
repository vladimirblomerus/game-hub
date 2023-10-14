import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    released: string;
}
  
interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
const controller = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then(({ data }) => setGames(data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
        });
        console.log("Fetched games")
        return () => controller.abort();
    }, []);

    return {games, error}
}

export default useGames;