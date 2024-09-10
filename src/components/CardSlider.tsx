import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

interface CardSliderProps {
  id: number;
  image: string;
  name?: string;
}

interface CardSliderComponentProps {
  list: CardSliderProps[];
  showName?: boolean;
  contentType?: string | false;
}

export const CardSlider = ({
  list,
  showName = true,
  contentType = false,
}: CardSliderComponentProps) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {list.map((item) => {
          const cardContent = (
            <div className="px-5 rounded-xl cursor-pointer">
              <img
                src={item.image}
                alt={item.name}
                className={`w-full bg-black rounded-lg ${
                  contentType == "media" ? "blur-sm" : ""
                }`}
              />
              {showName && item.name && (
                <h3 className="bg-sky-950 text-white text-center font-semibold py-2">
                  {item.name}
                </h3>
              )}
            </div>
          );

          return (
            <div key={item.id}>
              {contentType ? (
                <Link to={`/${contentType}/${item.id}`}>{cardContent}</Link>
              ) : (
                cardContent
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
