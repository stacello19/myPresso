import cafecito from './image/nespressoExclusives/cafecitoDeCuba.png';
import esperanza from './image/nespressoExclusives/esperanzaDeColombia.png';
import flatWhite from './image/nespressoExclusives/flatWhiteOverIce.png';
import hawaiiKona from './image/nespressoExclusives/hawaiiKona.png';
import longBlack from './image/nespressoExclusives/longBlackOverIce.png';
import tamuka from './image/nespressoExclusives/tamukaMuZimbabwe.png';

const EXCLUSIVES =[
    {
        id: 0,
        name:'Hawaii Kona',
        image:`${hawaiiKona}`,
        price:'2.00',
        flavor:'Fruity & Nutty',
        description:'Grown on Mauna Loa\'s mountain slopes on the island of Hawaii, this single-estate coffee reveals an exceptional aromatic richness. Coffee connoisseurs will be astonished by the fruity bouquet that reveals subtle nutty notes. Its round and silky texture completes the unique character of this highly sought after coffee.'
    },
    {
        id: 1,
        name: 'Tamuka mu Zimbabwe - Limited Edition',
        image:`${tamuka}`,
        price: '1.10',
        flavor:'Fruity & Flowery',
        description:'The world almost lost Zimbabwe’s coffee to climate and political issues. But farmers joined Nespresso’s REVIVING ORIGINS program with a plan to bring it back. Working closely with the farming community, bringing expert trainers and establishing sustainable practices will help restore Zimbabwe’s coffee industry in the long term. It’s not an over-night goal, but we’re in it for the long haul. This year we get to celebrate the return of an Arabica bursting with complex fruitiness and zesty, bright acidity. You’ll catch notes of everything from cranberry to red berries, and currant to grape. Try TAMUKA mu ZIMBABWE as a Latte Macchiato, and taste how milk gives this REVIVING ORIGINS coffee a creamy, smooth texture and brings out sweet notes of caramel and toffee. Zimbabwe’s coffee has awakened. The supply is still limited, but it’s a sign of more to come.'
    },
    {
        id: 2,
        name:'Esperanza de Colombia - Limited Edition',
        image:`${esperanza}`,
        price:'1.10',
        flavor:'Balanced & Fruity',
        description:'Coffee almost disappeared in Caquetá, Colombia. 50 years of conflict meant many farmers abandoned their lands. When the peace agreement was sealed, we started to partner with local farmers. Our long-term REVIVING ORIGINS program supports farming cooperatives and improves infrastructure and agricultural practices so coffee can thrive again. Every year we’ll bring you more ESPERANZA de COLOMBIA – a rich and balanced Arabica with fruity notes and fine acidity - which will benefit the Caquetá farmers more each year.'
    },
    {
        id: 3,
        name: 'Cafecito de Cuba',
        image:`${cafecito}`,
        price:'1.25',
        flavor:'Dark Roasted & Dense',
        description:''
    },
    {
        id: 4,
        name:'Flat White Over Ice - Limited Edition',
        image:`${flatWhite}`,
        price:'0.80',
        flavor:'Roasted & Spicy Ristretto',
        description:'The dark roasted, intense character of this coffee echoes the passionate rhythms of authentic Cuban culture and boasts powerful and delightful smoky notes of wood and tobacco leaves.'
    },
    {
        id: 5,
        name:'Long Black Over Ice - Limited Edition',
        image:`${longBlack}`,
        price:'0.80',
        flavor:'Fruity & Flowery Ristretto',
        description:'The Long Black Over Ice blend has a stronger acidic note and fruit aromas that create that refreshing taste. It helps the coffee stand alone as a black coffee without milk. Those characteristics also complement the sparkling water, and tropical flavor of coconut syrup you may add.'
    }
];

export default EXCLUSIVES;