import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const CarouselComp = ({
    imgList,
    classText,
    slidesPerView,
    imgClass
}) => {

    return (
        <div className=' container lg:mt-[20rem] mt-4 mb-[2rem]'>
            <Swiper
                className={`${classText}`}
                modules={[ Pagination , Autoplay]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                // navigation
                autoplay
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {imgList.map((ele) => (
                    <SwiperSlide className=' h-full  w-full flex items-center justify-center rounded-md overflow-hidden'>
                        <img className={` w-full ${imgClass}`} src={ele.img} alt="" />
                        {ele.name != "" && (
                            <div className='mt-4 text-center'>
                                <h4 className=' text-[#1B3C74] '>{ele.name}</h4>
                                <p className='text-[#2AA7FF]'>{ele.presence}</p>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
