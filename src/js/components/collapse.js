class Collapse {
    static defaultProps = {
        triggerSelector: '.js-collapse-trigger',
        triggerTextSelector: '.js-collapse-trigger-text',

    }

    constructor(selector = '',  options = {} ) {
        this.options = {...Collapse.defaultProps, ...options};

        this.$element = document.querySelector(selector) ;
        if (!this.$element) {
            throw new Error(`No element found for ${selector}`);
        }

        this.$trigger = this.$element.querySelector(this.options.triggerSelector);
        if (!this.$trigger) {
            throw new Error(`No trigger found for ${this.options.triggerSelector}`);
        }

        this.$triggerText = this.$trigger.querySelector(this.options.triggerTextSelector);

        this.init();
    }

    init () {
        this.addListeners();
    }

    addListeners () {
        this.$trigger.addEventListener('click', () => {
            this.$element.classList.toggle('is-open');

            if (this.$triggerText) {
                this.$triggerText.innerText = this.$element.classList.contains('is-open') ? 'Згорнути': 'Розгорнути';
            }
        });
    }
}

export default Collapse;
