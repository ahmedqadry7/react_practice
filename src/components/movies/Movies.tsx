import { useEffect, useState } from "react"
import Axios from "axios";
import Movie from "../../interfaces/Movie";
import MovieCard from "./MovieCard";

export default function Movies() {
    const apiKey = "1fa432ee18877d5a1dbb6bea9c6c4df5"

    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

    async function getMovies() {
        try {
            let { data } = await Axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${apiKey}`)
            console.log(data.results);
            setTrendingMovies(data.results)
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    //Fetching data in mount
    useEffect(() => {
        getMovies()
        console.log('Comonent did mount');
    }, [])

    return (
        <div className="movies-container">
            <div className="movies-grid">
                {
                    trendingMovies.length > 0 ?
                        (trendingMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />)))
                        :
                        (<div className="spinner"></div>)
                }
            </div>
        </div>
    );
}
