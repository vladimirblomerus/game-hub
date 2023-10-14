import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    released: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
}

const useGames = () => useData<Game>("/games");
            

export default useGames;