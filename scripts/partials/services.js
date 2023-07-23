const pricing = [
    {
        key: 'table__natural-nails',
        services: [
            { name: 'Manicure', price: '£18' },
            { name: 'Shaped & Revarnished Normal Polish', price: '£13' },
            { name: 'manicure & Gel Polish', price: '£28' },
            { name: 'Additional Gel Colour Removal', price: '£5' },
            { name: 'Gel Removal, Shap (+ Clear)', price: '£13' },
            { name: 'Gel Removal and Manicure', price: '£23' },
            { name: 'Extra American or White tip', price: '£4' }

        ]
    },
    {
        key: 'table__spa-pedicure',
        services: [
            { name: 'Spa Pedicure with normal polish', price: '£28' },
            { name: 'Spa Pedicure with gel Polish', price: '£38' },
            { name: 'Gel Polish On toes ONLY', price: '£26' },
            { name: 'Gel polish removal', price: '£10' },
            { name: 'Manicure & Pedicure (clear or colour)	', price: '£43' },
            { name: 'Manicure & Pedicure with Shellac on both', price: '£66' },
            { name: 'Manicure Gel Polish & Spa Pedicure', price: '£56' },
            { name: 'Manicure & Spa Pedicure Gel Polish', price: '£56' }

        ]
    },
    {
        key: 'table__sns',
        services: [
            { name: 'Fullset SNS', price: '£35' },
            { name: 'Fullset extension', price: '£38' },
            { name: 'Take Off Fullset SNS', price: '£35' },
            { name: 'Takeoff and new set', price: '£40' },
            { name: 'Takeoff and redone natural', price: '£36' },
            { name: 'Natural Nails', price: '£33' },
            { name: 'Add Ombre design', price: 'From £10' }
        ]
    },
    {
        key: 'table__ombre',
        services: [
            { name: 'FullSet Ombre/Glitter Ombre', price: '£43' },
            { name: 'Infill Ombre / Glitter', price: '£35' },
            { name: 'Infill 1 Colour', price: '£35' },
            { name: 'Fullset 3+ Colours', price: '£45' },
            { name: 'Infill 3+ Colours', price: '£38' }
        ]
    },
    {
        key: 'table__fullset',
        services: [
            { name: 'Fullset Acrylic', price: '£33' },
            { name: 'Infill Acrylic	', price: '£28' },
            { name: 'Fullset Permanent White Tips/Acrylic Overlay', price: '£33' },
            { name: 'Takeoff/Redo Acrylic', price: '£35' },
            { name: 'Takeoff and redone gel powder', price: '£40' },
            { name: 'Gel Powder', price: '£33' },
            { name: 'Gel Powder Infill', price: '£24' },
            { name: 'Gel Polish Fullset', price: '£38' },
            { name: 'Gel Polish Infill', price: '£30' },
            { name: 'Soak off only', price: '£15' },
            { name: 'Single Nails', price: 'From £5' },
            { name: 'Extra 3+ Colour', price: '£5' },
            { name: 'Take off or Remove Fullset', price: '£38' }


        ]
    },
    {
        key: 'table__extra',
        services: [
            { name: 'Clear Tips', price: '£5' },
            { name: 'Chrome / Flames', price: '£5-£5+' },
            { name: 'V Tips / Outline / Half', price: '£4' },
            { name: 'Sticker print', price: '£5+' },
            { name: 'Gold Flakes', price: '£5+' },
            { name: 'Gems', price: 'PLEASE ASK FOR QUOTE' },
            { name: 'Specific Nail Design', price: 'PLEASE ASK FOR QUOTE / DM us a photo prior appointment' },
            { name: 'Marble', price: '£3-£5' },
            { name: 'Ink Design', price: '£5' },
            { name: 'XXL Tips', price: '£20' },
            { name: 'XL Tips', price: '£15' },
            { name: 'Long Tips', price: '£5 - £10' },

        ]
    },
    {
        key: 'table__tips',
        services: [
            { name: 'Pink and white tips (powder) Fullset', price: '£43' },
            { name: 'Fullset / Overlay', price: '£40' },
            { name: 'Pink Infills', price: '£30' },
            { name: 'Infills', price: '£35' }
        ]
    },
    {
        key: 'table__gel',
        services: [
            { name: 'On natural gel', price: '£33' },
            { name: 'Extension fullset', price: '£36' },
            { name: 'Infill (clear or same colour)', price: '£30' },
            { name: 'Takeoff and redone natural nails', price: '£36' },
            { name: 'Takeoff and redone fullset', price: '£40' }
        ]
    }
]

const renderService = (selector, data) => {
    const html = `
    <tbody>
        <td>${data.name}</td>
        <td>${data.price}</td>
    </tbody>
    `
    selector.insertAdjacentHTML('afterbegin', html);
}

export {
    renderService,
    pricing
}
