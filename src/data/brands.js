// Brands shown in the "Brands we manufacture for" strip.
// NOTE: `lines` is placeholder data shown in the hover tooltip. Replace it with real data
// (e.g. from the backend) once it is available; keep `name` in the order brands should appear.
const DEFAULT_LINES = ['Men', 'Women', 'Kids']

// logo is a file in public/assets/brands/.

const brand = (name, logo, lines = DEFAULT_LINES) => ({ name, logo, lines })

export const brands = [
  brand('MC', '6ed9f.png', ['Men', 'Women']),
  brand('Karsten', 'c4e1d.png', ['Karsten Men', 'Karsten Women', 'Karsten Home']),
  brand('Altonadock', 'c1eec.png', ['Men', 'Women', 'Accessories']),
  brand('Orsay', '551b1.png', ['Orsay Women', 'Orsay Plus Size']),
  brand('LC Waikiki', '7ef7f.png', ['LC Waikiki Men', 'LC Waikiki Women', 'LC Waikiki Kids', 'LC Waikiki Baby']),
  brand('Zara', 'b2eda.png', ['Zara Men', 'Zara Women', 'Zara Kids']),
  brand('TDM', 'f17bd.png', ['Men', 'Women']),
  brand('Noon', 'e946b.png', ['Noon Men', 'Noon Women', 'Noon Kids']),
  brand('DPAM', 'fbd87.png', ['Boys', 'Girls', 'Baby']),
  brand('Mango', 'c360c.png', ['Mango Men', 'Mango Women', 'Mango Kids']),
  brand('Elis', '2ac89.png', ['Workwear', 'Uniforms']),
  brand('Stier', 'd846e.png', ['Men', 'Women', 'Workwear']),
  brand('Primark', '397d4.png', ['Primark Men', 'Primark Women', 'Primark Kids', 'Primark Home']),
  brand('MDM', 'a3876.png', ['Men', 'Women']),
  brand('Lunelli', '971dc.png', ['Women', 'Kids']),
  brand('Pepe Jeans', 'ccd0c.png', ['Pepe Jeans Men', 'Pepe Jeans Women', 'Pepe Jeans Kids']),
  brand('Street One', '974eb.png', ['Street One Women', 'Street One Plus Size']),
  brand('Parfois', 'b42a1.png', ['Women', 'Accessories']),
  brand('Free Country', '2c2ad.png', ['Men', 'Women', 'Outerwear']),
  brand('Ey Edlic', '2f588.png', ['Men', 'Women']),
  brand('Mm.', 'cb2b1.png', ['Men', 'Women']),
  brand('Cardone', '1d134.png', ['Men', 'Women', 'Kids']),
  brand('Pampero', '5b642.png', ['Men', 'Women']),
]
