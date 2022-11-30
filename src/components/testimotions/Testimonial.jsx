import React from "react";
import './testimonial.css';
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

export const Testimonials = () => {
    return (
       <section className="testimonial container section" id="testimonial">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonials</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{clickable: true}}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48
                    }
                }}
                modules={[Pagination]}>
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <div className="testimonial__card_img">
                                <img src={image} alt="" className="testimonial__img" />
                            </div>
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
       </section>
    )
};