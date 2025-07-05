import BadgerAccordion from 'badger-accordion';

class Accordion {
    static defaultProps = {}

    constructor(accordionDomNode,  options = {} ) {
        this.accordionDomNode = accordionDomNode;
        this.options = {...Accordion.defaultProps, ...options};

        this.initAccordion();
    }

    initAccordion () {
        if (!this.accordionDomNode) {
            return;
        }

        new BadgerAccordion(this.accordionDomNode, this.options);
    }
}

export default Accordion;
