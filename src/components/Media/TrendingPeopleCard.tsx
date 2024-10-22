import TrendingPersonInterface from '../../interfaces/TrendingPersonInterface';

interface PersonProps {
    person: TrendingPersonInterface
}

export default function TrendingPeopleCard({ person }: PersonProps) {
    return (
        <div className="movie-card">
            <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
            />
            <div className="movie-info">
                <h5>{person.name === null ? "Not exists" : `${person.name}`}</h5>
                <p>{person.popularity}</p>
            </div>
        </div>
    );
}
