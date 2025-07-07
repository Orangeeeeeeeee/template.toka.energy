class Header {
    static defaultProps = {
        burgerBtnSelector: '.js-burger-btn',
        scrollTrigger: 100,
    }

    constructor(selector = '.js-header',  options = {} ) {
        this.options = {...Header.defaultProps, ...options};

        this.$header = document.querySelector(selector) ;
        if (!this.$header) {
            throw new Error(`No element found for ${selector}`);
        }

        this.$burderBtn = this.$header.querySelector(this.options.burgerBtnSelector);
        if (!this.$burderBtn) {
            throw new Error(`No trigger found for ${this.options.burgerBtnSelector}`);
        }

        this.init();
    }

    init () {
        this.addListeners();
    }

    addListeners () {
        this.handleScroll();

        this.$burderBtn.addEventListener('click', this.handleBurgerClick.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleBurgerClick (event) {
        event.stopPropagation();

        if (this.$header.classList.contains('is-open')) {
            this.closeNavigation();
        } else {
            this.openNavigation();
        }
    }

    handleScroll () {
        const scrollTrigger = this.options.scrollTrigger;

        if (window.scrollY >= this.options.scrollTrigger || window.pageYOffset >= scrollTrigger) {
            this.$header.classList.add('is-scrolled');
        } else {
            this.$header.classList.remove('is-scrolled');
        }
    }

    closeNavigation () {
        document.body.classList.remove('disable-scroll');
        this.$header.classList.remove('is-open');
        this.$burderBtn.classList.remove('is-open');
    }

    openNavigation () {
        document.body.classList.add('disable-scroll');
        this.$header.classList.add('is-open');
        this.$burderBtn.classList.add('is-open');
    }
}

export default Header;
