import { Fragment, memo } from "react";

// Components
import SectionSlider from "../slider/SectionSlider";
import CardStyle from "../cards/CardStyle";

// Define types for the props and data
interface UpcomingMovieItem {
  image: string;
  title: string;
  movieTime: string;
}

interface UpcomingMoviesProps {
  data: UpcomingMovieItem[];
}

const UpcomingMovies = memo(({ data }: UpcomingMoviesProps) => {
  const title = "Upcoming Movies";

  // Use the provided data or fallback to empty array if no data is provided
  const movies = data.length > 0 ? data : [];

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={movies}
        className="upcoming-block streamit-block"
        slidesPerView={6}
      >
        {(item) => (
          <CardStyle
            key={item.image}  // Ensure unique key if data is an array
            image={item.image}
            title={item.title}
            movieTime={item.movieTime}
            watchlistLink="/play-list"
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

UpcomingMovies.displayName = "UpcomingMovies";
export default UpcomingMovies;
