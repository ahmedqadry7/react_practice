import TrendingMovieInterface from "./TrendingMovieInterface";
import TrendingPersonInterface from "./TrendingPersonInterface";
import TrendingTvInterface from "./TrendingTvInterface";

export default interface MediaInterface {
    trendingMovies: TrendingMovieInterface[];
    trendingPeople: TrendingPersonInterface[];
    trendingTv: TrendingTvInterface[];
}