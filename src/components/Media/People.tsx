import React, { useContext } from 'react'
import { moviesContext } from '../../Store'
import TrendingPeopleCard from './TrendingPeopleCard'

export default function People() {
    const media = useContext(moviesContext)

    if (!media) {
        return <div>Unable to fetch data</div>
    }
    const trendingPeople = media.trendingPeople


    return (
        <div className="movies-container">
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
        </div>
    )
}
