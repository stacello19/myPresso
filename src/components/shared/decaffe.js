import arpeggio from './image/decaffeinato/arpeggio.png';
import ristretto from './image/decaffeinato/ristretto.png';
import vivalto from './image/decaffeinato/vivalto.png';
import vollutoDecafe from './image/decaffeinato/volluto.png';

const DECAFFE = [
    {
        id: 0,
        name: 'arpeggioDecafe',
        image: `${arpeggio}`,
        price: '0.70',
        flavor: 'Intense & Creamy',
        description: 'Dark roasted and rich in flavour, Arpeggio Decaffeinato boasts the same strong character, intense body and indulgent cocoa notes as the original Arpeggio Grand Cru. A selection of the best Arabicas from South and Central Americas enriches this blend with intense, cocoa-like notes. A split roast reveals the specificities of each origin, carefully protected during the decaffeination process, which respects the coffee bean’s true nature, allowing us to maintain the blend`s aromatic strength and richness.'
    },
    {
        id: 1,
        name: 'ristrettoDecafe',
        image: `${ristretto}`,
        price: '0.70',
        flavor: 'Powerful & Contrasting',
        description: 'Intensely roasted and rich in flavor, Ristretto Decaffeinato has the same powerful character and contrasting taste as the original Ristretto. A selection of the best Latin American and East African Arabicas is sophisticatedly blended with a touch of Robusta, roasted separately to create the subtle fruity note of this full bodied, intense Espresso.'
    },
    {
        id: 2,
        name: 'vivaltoDecafe',
        image: `${vivalto}`,
        price: '0.70',
        flavor: 'Complex & Balanced',
        description: 'A complex yet balanced blend, Vivalto Lungo Decaffeinato has the same rich character as the original Vivalto Lungo Grand Cru: roasted, lightly woody with sweet cereal and subtle floral notes. It is a pure Arabica blend from several origins including South America and East Africa. The aromatic profile of these coffees is carefully preserved during the decaffeination process, which respects the coffee bean’s true nature, allowing us to maintain the strength and richness of its aromas.'
    },
    {
        id: 3,
        name: 'vollutoDecafe',
        image: `${vollutoDecafe}`,
        price: '0.70',
        flavor: 'Sweet & Light',
        description: 'Delightfully sweet and smooth, Volluto Decaffeinato has the same rich flavours and round body as the original Volluto Grand Cru. The selected pure Arabica beans from South America are roasted lightly and separately to highlight their specificities and reveal the sweet biscuity, fresh and fruity notes. The aromatic profile of these coffees is carefully preserved during the decaffeination process, which respects the coffee bean’s true nature, allowing us to maintain the strength and richness of its aromas.'
    }
];

export default DECAFFE;