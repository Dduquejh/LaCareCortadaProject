import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Slider from "react-slick";

interface CardSliderProps {
  image: string;
  name?: string;
}

interface CardSliderComponentProps {
  list: CardSliderProps[];
  showName?: boolean;
}

export const CardSlider = ({
  list,
  showName = true,
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
        {list.map((item, index) => (
          <div key={index} className="px-5 rounded-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full bg-black rounded-lg"
            />
            {showName && item.name && (
              <h3 className="bg-red-700 text-white">{item.name}</h3>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
