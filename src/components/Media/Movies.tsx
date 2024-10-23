import React, { useContext } from 'react'
import { moviesContext } from '../../Store';
import TrendingMovieCard from './TrendingMovieCard';

export default function Movies() {
    const media = useContext(moviesContext)

    if (!media) {
        return <div>Unable to fetch data</div>;
    }
    const trendingMovies = media.trendingMovies


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
        </div>
    );
}
