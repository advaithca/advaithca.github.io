import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function ProjectCard(props){
    const deets = props.details
    const deetCards = deets.map((detail)=>(
        <SwiperSlide>
            <div class="flex justify-center m-10">
                <div class="rounded-lg shadow-lg bg-white max-w-lg">
                    <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{detail.name}</h5>
                    <p class="text-gray-700 text-base mb-4">
                       {detail.description}
                    </p>
                    <a href={detail.html_url} data-mdb-ripple="true" data-mdb-ripple-color="light" target='_blank'>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Repo</button>
                    </a>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ))
    return(
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
            {deetCards}
        </Swiper>
    )
}