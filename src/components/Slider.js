import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/slider.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function App() {
	return (
		<>
			<Swiper
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={require("../assets/img/cheesecake/cheesecake1.jpg")} alt="products" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require("../assets/img/sansrival/sansrival1.jpg")} alt="products" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require("../assets/img/banana cake/bananaCake2.jpg")} alt="products" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require("../assets/img/brownie/brownie4.jpg")} alt="products" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require("../assets/img/crinkle/crinkle1.jpg")} alt="products" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={require("../assets/img/cake/cake8.jpg")} alt="products" />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
