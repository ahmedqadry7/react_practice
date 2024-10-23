import React, { useContext } from 'react'
import { moviesContext } from '../../Store'
import TrendingTvCard from './TrendingTvCard';

export default function Tv() {
    const media = useContext(moviesContext)

    if (!media) {
        return <div>Unable to fetch data</div>
    };

    const trendingTv = media.trendingTv;

    return (
        <div className="movies-container">
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
        </div>
    );
}
