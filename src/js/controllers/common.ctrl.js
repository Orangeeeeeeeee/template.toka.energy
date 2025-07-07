import Header from "../components/header.js";
import Slider from "../components/slider.js";
import {Autoplay} from 'swiper/modules';

class CommonController {
    constructor() {
        this.init();
    }

    init () {
        this.initFooterSlider();
        this.initHeader();
    }

    initFooterSlider () {
        new Slider('.js-footer-slider', {
            modules: [Autoplay],
            loop: true,
            autoplay: {
                delay: 0,
                reverseDirection: true,
            },
            slidesPerView: 'auto',
            loopedSlides: 10,
            spaceBetween: 15,
            infinite: true,
            speed: 1500,
        });
    }

    initHeader () {
        new Header();
    }
}

export default CommonController;
