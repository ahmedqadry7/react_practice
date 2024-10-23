import { useEffect, useState, useContext } from "react"
import TrendingMovieCard from "./TrendingMovieCard";
import TrendingPeopleCard from "./TrendingPeopleCard";
import { Outlet } from "react-router-dom";
import TrendingTvCard from "./TrendingTvCard";
import { moviesContext } from "../../Store";

export default function Movies() {
    const media = useContext(moviesContext)

    if (!media) {
        return <div>Unable to fetch data</div>;
    }
    const trendingMovies = media.trendingMovies
    const trendingTv = media.trendingTv
    const trendingPeople = media.trendingPeople


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
                    trendingTv.length > 0 ?
                        (trendingTv.map((tv, i) => (
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
