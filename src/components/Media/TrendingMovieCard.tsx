import TrendingMovieInterface from '../../interfaces/TrendingMovieInterface';

interface MovieProps {
    movie: TrendingMovieInterface
}

export default function TrendingMovieCard({ movie }: MovieProps) {
    return (
        <div className="movie-card">
            <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
            />
            <div className="movie-info">
                <h5>{ movie.title === null ? "Not exists" : `${movie.title}`}</h5>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}
