import Axios from "axios";
import { createContext, useEffect, useState } from "react";
import TrendingMovieInterface from "./interfaces/TrendingMovieInterface";
import TrendingPersonInterface from "./interfaces/TrendingPersonInterface";
import TrendingTvInterface from "./interfaces/TrendingTvInterface";
import MediaInterface from "./interfaces/MediaInterface";

export const moviesContext = createContext<MediaInterface | null>(null);

export default function MoviesContextProvider(props: any) {
    const apiKey = "1fa432ee18877d5a1dbb6bea9c6c4df5"


    const [trendingMovies, setTrendingMovies] = useState<TrendingMovieInterface[]>([]);
    const [trendingPeople, setTrendingPeople] = useState<TrendingPersonInterface[]>([]);
    const [trendingTv, setTrendingTv] = useState<TrendingTvInterface[]>([]);

    async function getMedia(mediaType: string, callback: Function) {
        try {
            let { data } = await Axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?language=en-US&api_key=${apiKey}`)
            callback(data.results)
            console.log(data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    //Fetching data in mount
    useEffect(() => {
        getMedia('movie', setTrendingMovies)
        getMedia('person', setTrendingPeople)
        getMedia('tv', setTrendingTv)
        console.log('Comonent did mount');
    }, [])

    return <moviesContext.Provider value={{ trendingMovies, trendingPeople, trendingTv }}>
        {props.children}
    </moviesContext.Provider>
}