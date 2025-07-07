import Slider from "../components/slider.js";
import Accordion from "../components/accordion.js";
import Collapse from "../components/collapse.js";
import {Autoplay, Pagination} from 'swiper/modules';
import {BREAKPOINT_MOBILE, BREAKPOINT_TABLET} from "../constans/breakpoints.js";

class HomeCtrl {
    constructor() {
        this.init();
    }

    init () {
        this.initPartnersSliders();
        this.initHeroSlider();
        this.initProductSlider();
        this.initFaqAccordion();
        this.initCollapseHowItsWork();
    }

    initPartnersSliders () {
        const commonOptions = {
            modules: [Autoplay],
            loop: true,
            autoplay: {
                delay: 0,
            },
            slidesPerView: 3,
            loopedSlides: 10,
            breakpoints: {
                [BREAKPOINT_MOBILE]: {
                    slidesPerView: 4
                },
                [BREAKPOINT_TABLET]: {
                    slidesPerView: 5
                },
            }
        };

        new Slider('.js-partners-slider-top', {
            ...commonOptions,
            infinite: true,
            speed: 1500,

        });
        new Slider('.js-partners-slider-bottom', {
            ...commonOptions,
            speed: 1200,
        });
    }

    initHeroSlider () {
        const options = {
            modules: [Autoplay,Pagination],
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".js-hero-slider-pagination",
                bulletClass: 'hero__slider-paginator-bullet',
                bulletActiveClass: 'hero__slider-paginator-bullet--active',
            }
        };

        new Slider('.js-hero-slider', options);
    }

    initProductSlider () {
        const options = {
            modules: [Autoplay],
            loop: true,
            autoplay: {
                delay: 3000,
            },
            slidesPerView: 1,
            spaceBetween: 16,
            breakpoints: {
                [BREAKPOINT_MOBILE]: {
                    slidesPerView: 3
                },
                [BREAKPOINT_TABLET]: {
                    slidesPerView: 4
                }
            }
        };

        new Slider('.js-product-slider', options);
    }

    initFaqAccordion () {
        const accordionDomNode = document.querySelector('.js-badger-accordion'),
            options = {
                openHeadersOnLoad: [1],
            }

        new Accordion(accordionDomNode, options);
    }

    initCollapseHowItsWork () {
        new Collapse('.js-collapse-how-it-work')
    }
}

export default HomeCtrl;
