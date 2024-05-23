import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export const CarouselComp = ({imgList}) => {

    return (
        <div className=' container mt-[5rem] mb-[2rem]'>
            <Swiper
                className='h-[12rem] py-[2rem]'
                modules={[Navigation, Pagination, Scrollbar, A11y , Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                autoplay
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {imgList.map((ele) => (
                    <SwiperSlide className=' h-full border w-full flex items-center justify-center rounded-md overflow-hidden'>
                        <img className=' w-full h-full object-cover' src={ele.img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
