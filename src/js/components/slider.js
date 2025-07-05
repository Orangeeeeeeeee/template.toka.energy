import Swiper from 'swiper';

class Slider {
    constructor(selector = '',  options = {} ) {
        this.selector = selector;
        this.options = {...options};

        this.initSlider();
    }

    initSlider () {
        if (!this.selector) {
            return;
        }

        new Swiper(
            this.selector,
            {
                ...this.options,
            }
        );
    }
}

export default Slider;
