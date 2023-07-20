import React from 'react';
import './topBrand.css';
import NextArrow from '../../Common/carousel/nextArrow';
import PrevArrow from '../../Common/carousel/prevArrow';
import Slider from 'react-slick';
const topbrandList=[
    {
        id:1,
        time:"22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
        title: "McDonald's"
    },
    {
        id:2,
        time:"26 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
        title: "Burger King"
    },
    {
        id:3,
        time:"20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520868.png?output-format=webp",
        title: "Subway"
    },
    {
        id:4,
        time:"22 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
        title: "La Pino'z Pizza"
    },
    {
        id:5,
        time:"31 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
        title: "Royal Cafe - Colours"
    },
    {
        id:6,
        time:"24 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
        title: "KFC"
    },
    {
        id:7,
        time:"33 min",
        title: "Aryan Family's Delight",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png?output-format=webp"
    },
    {
        id:8,
        time:"26 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7162970d4c4b94a60e25d91facab0407_1600683841.png?output-format=webp",
        title: "Sharma Chai"
    },
    {
        id:9,
        time:"18 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/df5afe8b7789b8ff2b9abcd014b00c87_1646380179.png?output-format=webp",
        title: "Mr. Brown - Danbro"
    },
    {
        id:10,
        time:"20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b39fb9a7762ce2a19750d676cf5ffcde_1669619331.png?output-format=webp",
        title: "NIC Ice Creams"
    },
]
const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/> ,
    prevArrow: <PrevArrow/>,
  };

const TopBrand = () => {
  return (
    <div className='top-Brand max-width'>
     <div className='collection-title'>Top brands for you</div>
     <Slider {...settings}>
        {topbrandList.map((brand)=>{
            return <div>
                <div className='top-brand-cover'>
                    <img src={brand.cover} className='top-brand-image' alt={brand.time} />
                </div>
                <div className='top-brand-title'>{brand.title}</div>
                <div className='top-brand-time'>{brand.time}</div>
            </div>
        })}
     </Slider>
    </div>
  )
}

export default TopBrand
