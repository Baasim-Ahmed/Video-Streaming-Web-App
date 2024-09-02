import { GetServerSideProps } from 'next';
import { memo } from 'react';

// hero slider
import HomeHeroSlider from '@/components/slider/HomeHeroSlider';

// sections
import ContinueWatching from '@/components/sections/ContinueWatching';
import UpcomingMovies from '@/components/sections/UpcomingMovies';
import LatestMovies from '@/components/sections/LatestMovies';
import VerticalSectionSlider from '@/components/slider/VerticalSectionSlider';
import TrendingSlider from '@/components/sections/Trending';
import SuggestedBlock from '@/components/sections/SuggestedBlock';
import RecommendedTVShow from '@/components/sections/RecommendedTVShow';
import ParallexSection from '@/components/sections/ParallexSection';

// static data
import { verticleLatestMovies } from '@/StaticData/data';

// API fetching function
const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/flixhq/recent-movies'); // Example endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return { movies: [], shows: [] }; // Fallback data structure
  }
};

// Page component
const Home = memo(({ recentMovies, recentShows }: { recentMovies: any; recentShows: any }) => {
  return (
    <>
      <HomeHeroSlider />
      <ContinueWatching data={recentMovies} />
      <UpcomingMovies data={recentShows} />
      <LatestMovies />
      <VerticalSectionSlider sliderData={verticleLatestMovies} />
      <SuggestedBlock />
      <ParallexSection />
      <TrendingSlider />
      <RecommendedTVShow />
    </>
  );
});

Home.displayName = 'Home';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: {
      recentMovies: data.movies,  // Adjust according to the actual structure of the fetched data
      recentShows: data.shows,    // Adjust according to the actual structure of the fetched data
    },
  };
};

export default Home;
