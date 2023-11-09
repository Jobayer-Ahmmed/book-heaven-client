
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../../assets/banner/banner1.jpg"

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
    >
      <SwiperSlide className='relative'>
        <img className='brightness-50' src={img1} alt="Image 1" />
        <div className=''>
          <h2 className='text-gray-200 text-center text-2xl font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Libraries are the quiet reservoirs of knowledge, patiently waiting to empower those who seek to explore and innovate</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;

