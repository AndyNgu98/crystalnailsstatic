const pricing = [
    {
        key: 'table__natural-nails',
        services: [
            { name: 'Manicure', price: '£15 (20 mins)' },
            { name: 'Shaped & Revarnished Normal Polish', price: '£9 (10 mins)' },
            { name: 'manicure & Gel Polish', price: '£25 (15-20 mins)' },
            { name: 'Additional Gel Colour Removal', price: '£5' },
            { name: 'Gel Removal, Shap (+ Clear)', price: '£10' },
            { name: 'Gel Removal and Manicure', price: '£20' },
            { name: 'Extra American or White tip', price: '£4' }

        ]
    },
    {
        key: 'table__spa-pedicure',
        services: [
            { name: 'Spa Pedicure with normal polish', price: '£26 (40 mins)' },
            { name: 'Spa Pedicure with gel Polish', price: '£35 (40 mins)' },
            { name: 'Gel Polish On toes ONLY', price: '£25 (15-20 mins)' },
            { name: 'Gel polish removal', price: '£10' },
            { name: 'Manicure & Pedicure (clear or colour)	', price: '£36 (50-60 mins)' },
            { name: 'Manicure & Pedicure with Shellac on both', price: '£60 (60 mins)' },
            { name: 'Manicure Gel Polish & Spa Pedicure', price: '£51 (60 mins)' },
            { name: 'Manicure & Spa Pedicure Gel Polish', price: '£51 (60 mins)' }

        ]
    },
    {
        key: 'table__sns',
        services: [
            { name: 'Fullset SNS', price: '£35' },
            { name: 'Take Off Fullset SNS', price: '£35' },
            { name: 'Natural Nails', price: '£30' },
            { name: 'Add Ombre design', price: 'From £10' }
        ]
    },
    {
        key: 'table__ombre',
        services: [
            { name: 'FullSet Ombre/Glitter Ombre', price: '£40' },
            { name: 'Infill Ombre / Glitter', price: '£33' },
            { name: 'Infill 1 Colour', price: '£33' },
            { name: 'Fullset 3+ Colours', price: '£45' },
            { name: 'Infill 3+ Colours', price: '£38' }
        ]
    },
    {
        key: 'table__fullset',
        services: [
            { name: 'Acrylic', price: '£28 (30-40 mins)' },
            { name: 'Infill Acrylic	', price: '£19 (30-40 mins)' },
            { name: 'Fullset Permanent White Tips/Acrylic Overlay', price: '£28 (28 mins)' },
            { name: 'Takeoff/Redo Acrylic', price: '£33' },
            { name: 'Gel Powder', price: '£30 (30-40 mins)' },
            { name: 'Gel Powder Infill', price: '£20 (30 mins)' },
            { name: 'Gel Polish Fullset', price: '£35 (30-40 mins)' },
            { name: 'Gel Polish Infill', price: '£28 (30 mins)' },
            { name: 'Gel Polish Takeoff', price: '£33 (30 mins)' },
            { name: 'Soak off only', price: '£13 (20 mins)' },
            { name: 'Single Nails', price: 'From £5' },
            { name: 'Extra 3+ Colour', price: '£5 (20 mins)' },
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
            { name: 'Extra Long Nails', price: 'Additional £5' },
            { name: 'XXL Tips', price: '£20' },
            { name: 'XL Tips', price: '£15' },
            { name: 'Long Tips', price: '£5 - £10' },

        ]
    },
    {
        key: 'table__tips',
        services: [
            { name: 'Pink and white tips (powder) Fullset', price: '£40' },
            { name: 'Fullset / Overlay', price: '£35 (50-60 mins)' },
            { name: 'Chrome / Flames', price: '£28 (50-60 mins)' },
            { name: 'Pink Infills', price: '£26 (30 mins)' },
            { name: 'Infills', price: '£33 (30 mins)' }
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
