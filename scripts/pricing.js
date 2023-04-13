import elements from './partials/elements.js'
import { toggleMenu } from './partials/ui.js'
import { pricing, renderService } from './partials/services.js'

toggleMenu(elements.burger, elements.nav);

pricing.forEach(treatment => {
    const selector = document.querySelector(`.${treatment.key}`)
    for (let index = treatment.services.length - 1; index >= 0; index--) {
        const service = treatment.services[index];
        renderService(selector, service)
    }
});
