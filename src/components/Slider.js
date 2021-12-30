import React from "react";
import Carousel from "react-elastic-carousel";
import '../styles/slider.css';


class Slider extends React.Component {
    render() {
        return (
            <div>
                <div className="slider">
                    <Carousel ref={ref => (this.carousel = ref)}>
                        <div className="container">
                            <div className="slider__inner">
                                <div className="slider__tag">Другое</div>
                                <div className="slider__title">Tesla Megafactory: новый вид <br /> заводов Tesla для производства <br /> Megapac</div>
                                <div className="wrapper">
                                    <div className="slider__article">читать статью</div>
                                    <div className="stream__arrow"><svg className='svg__arrow' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M0 8.5H17" stroke-width="1.5" />
                                        <path d="M9.27295 16L17.0002 8.5L9.27295 1" stroke-width="1.5" />
                                    </svg></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="slider__inner">
                                <div className="slider__tag">Другое</div>
                                <div className="slider__title">Tesla Megafactory: новый вид <br /> заводов Tesla для производства <br /> Megapac</div>
                                <div className="wrapper">
                                    <div className="slider__article">читать статью</div>
                                    <div className="stream__arrow"><svg className='svg__arrow' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M0 8.5H17" stroke-width="1.5" />
                                        <path d="M9.27295 16L17.0002 8.5L9.27295 1" stroke-width="1.5" />
                                    </svg></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="slider__inner">
                                <div className="slider__tag">Другое</div>
                                <div className="slider__title">Tesla Megafactory: новый вид <br /> заводов Tesla для производства <br /> Megapac</div>
                                <div className="wrapper">
                                    <div className="slider__article">читать статью</div>
                                    <div className="stream__arrow"><svg className='svg__arrow' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M0 8.5H17" stroke-width="1.5" />
                                        <path d="M9.27295 16L17.0002 8.5L9.27295 1" stroke-width="1.5" />
                                    </svg></div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="slider__inner">
                                <div className="slider__tag">Другое</div>
                                <div className="slider__title">Tesla Megafactory: новый вид <br /> заводов Tesla для производства <br /> Megapac</div>
                                <div className="wrapper">
                                    <div className="slider__article">читать статью</div>
                                    <div className="stream__arrow"><svg className='svg__arrow' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M0 8.5H17" stroke-width="1.5" />
                                        <path d="M9.27295 16L17.0002 8.5L9.27295 1" stroke-width="1.5" />
                                    </svg></div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default Slider;





