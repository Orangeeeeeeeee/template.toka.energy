import Slider from "../components/slider.js";
import {Autoplay} from 'swiper/modules';

class CommonController {
    constructor() {
        this.init();
    }

    init () {
        this.initFooterSlider();
    }

    initFooterSlider () {
        new Slider('.js-footer-slider', {
            modules: [Autoplay],
            loop: true,
            autoplay: {
                delay: 0,
            },
            slidesPerView: 'auto',
            loopedSlides: 10,
            spaceBetween: 15,
            infinite: true,
            speed: 1500,

        });
    }
}

export default CommonController;
