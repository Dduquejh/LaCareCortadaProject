import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface CardSliderProps {
    image: string;
    name?: string;
}

interface CardSliderComponentProps {
    list: CardSliderProps[];
    showName?: boolean;
}

export const CardSlider = ( { list, showName = true }: CardSliderComponentProps) => {
    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
    }

    return(
        <div className="h-80 w-3/4 m-auto bg-black pt-6">
            <Slider {...settings}>
                {list.map((item, index) => (
                    <div key={index} className="px-5">
                        <img src={item.image} alt={item.name} className="bg-black"/>
                        {showName && item.name && (
                            <h3 className="bg-red-700 text-white">{item.name}</h3>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    )
}