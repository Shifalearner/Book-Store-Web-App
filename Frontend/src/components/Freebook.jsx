import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import list from '../../public/list.json'
import Slider from "react-slick";
import Cards from "./Cards";

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2 text-blue-600'>Free Offered Courses</h1>
    <p>Explore a treasure trove of captivating stories and insightful reads, all at no cost. Dive into worlds of adventure, laughter, and inspiration with our curated collection of free books. From heartwarming tales to thrilling mysteries, there's something for everyone to enjoy. Discover new authors, rediscover timeless classics, and embark on literary journeys without spending a dime. Start reading today and let your imagination soar!</p>
    </div>
  
   <div>
   <Slider {...settings}>
        {filterData.map((item) =>(
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
   </div>
   </div>
   </>
  )
}

export default Freebook
