import TrendingMovie from '../../interfaces/TrendingMovieInterface';
import TrendingTvInterface from '../../interfaces/TrendingTvInterface';

interface MovieProps {
    tv: TrendingTvInterface
}

export default function TrendingTvCard({ tv }: MovieProps) {
    return (
        <div className="movie-card">
            <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500${tv.backdrop_path}`}
            />
            <div className="movie-info">
                <h5>{ tv.name === null ? "Not exists" : `${tv.name || tv.original_name}`}</h5>
                <p>{tv.overview}</p>
            </div>
        </div>
    );
}
