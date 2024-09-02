import { FC, Fragment, memo } from "react";

// Component
import SectionSlider from "../slider/SectionSlider";
import ContinueWatchCard from "../cards/ContinueWatchCard";

// Function
import { generateImgPath } from "../../StaticData/data";

// Define types for the props and data
interface ContinueWatchItem {
  image: string;
  value: number;
  leftTime: string;
}

interface ContinueWatchingProps {
  data: ContinueWatchItem[];
}

const ContinueWatching: FC<ContinueWatchingProps> = memo(({ data }) => {
  const title = "Continue Watching";

  // Ensure data is available and properly formatted
  const watching = data && data.length > 0 ? data : [
    {
      image: generateImgPath("/assets/images/continue-watch/01.webp"),
      value: 50,
      leftTime: "70 of 230 m",
    },
    // Add more default items if necessary
  ];

  return (
    <Fragment>
      <SectionSlider
        title={title}
        list={watching}
        className="continue-watching-block section-padding-top"
        slidesPerView={5}
      >
        {(item) => (
          <ContinueWatchCard
            key={item.image}  // Ensure unique key if data is an array
            imagePath={item.image}
            progressValue={item.value}
            dataLeftTime={item.leftTime}
            link="/movies/detail"
          />
        )}
      </SectionSlider>
    </Fragment>
  );
});

ContinueWatching.displayName = "ContinueWatching";
export default ContinueWatching;
