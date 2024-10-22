import { useEffect, useState } from "react"
import TrendingMovieCard from "./TrendingMovieCard";
import TrendingPeopleCard from "./TrendingPeopleCard";
import TrendingMovieInterface from "../../interfaces/TrendingMovieInterface";
import TrendingPersonInterface from "../../interfaces/TrendingPersonInterface";
import { Outlet } from "react-router-dom";
import TrendingTvInterface from "../../interfaces/TrendingTvInterface";
import Axios from "axios";
import TrendingTvCard from "./TrendingTvCard";

export default function Movies() {
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

    return (
        <div className="movies-container">
            <div>Trending Movies:</div>

            <div className="movies-grid">
                {
                    trendingMovies.length > 0 ?
                        (trendingMovies.map((movie) => (
                            <TrendingMovieCard key={movie.id} movie={movie} />)))
                        :
                        (<div className="spinner"></div>)
                }
            </div>

            <div>-------------------------------------------------</div>
            <div>Trending TVs:</div>

            <div className="movies-grid">
                {
                    trendingMovies.length > 0 ?
                        (trendingTv.map((tv , i) => (
                            <TrendingTvCard key={i} tv={tv} />)))
                        :
                        (<div className="spinner"></div>)
                }
            </div>

            <div>-------------------------------------------------</div>
            <div>Trending People:</div>
            <div className="movies-grid">
                {
                    trendingPeople.length > 0 ?
                        (trendingPeople.map((person, i) => (
                            <TrendingPeopleCard key={i} person={person} />)))
                        :
                        (<div className="spinner"></div>)
                }
            </div>
            <Outlet />
        </div>
    );
}
