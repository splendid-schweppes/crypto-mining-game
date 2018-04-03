import pc1 from './svg_assets/pc.svg'
import pc2 from './svg_assets/pc2.svg'
import pc3 from './svg_assets/pc3.svg'
import gpu1fan from './svg_assets/gpu1fan.svg'
import gpu2fan from './svg_assets/gpu2fan.svg'
import gpu3fan from './svg_assets/gpu3fan.svg'
import motherboard1 from './svg_assets/motherboard.svg'
import motherboard2 from './svg_assets/motherboard2.svg'
import motherboard3 from './svg_assets/motherboard3.svg'
import powersupply1 from './svg_assets/powersupply.svg'
import powersupply2 from './svg_assets/powersupply2.svg'
import powersupply3 from './svg_assets/powersupply3.svg'

export const shopAssets = [
  {type: 'pc', title: 'Basic PC', lvl: 1, details: 'The Oversoul', hashingRate: 0.01, electricity: 1400, price: 1200, img: pc1},
  {type: 'pc', title: 'Power PC', lvl: 1, details: 'Illustrated Primer', hashingRate: 0.02, electricity: 2400, price: 1800, img: pc2},
  {type: 'pc', title: 'Super PC', lvl: 1, details: 'The Quark 9000', hashingRate: 0.03, electricity: 3400, price: 2200, img: pc3},

  {type: 'gpu', title: 'Basic GPU', lvl: 1, details: 'Miniac', hashingRate: 0.004, electricity: 300, price: 400, img: gpu1fan},
  {type: 'gpu', title: 'Power GPU', lvl: 1, details: 'Teletraan', hashingRate: 0.006, electricity: 400, price: 600, img: gpu2fan},
  {type: 'gpu', title: 'Super GPU', lvl: 1, details: 'Illustrated', hashingRate: 0.008, electricity: 500, price: 800, img: gpu3fan},

  {type: 'motherboard', title: 'Basic Motherboard', lvl: 1, details: 'Upoc', hashingRate: 0.001, electricity: 50, price: 100, img: motherboard1},
  {type: 'motherboard', title: 'Power Motherboard', lvl: 1, details: 'Distilling X5', hashingRate: 0.002, electricity: 100, price: 200, img: motherboard2},
  {type: 'motherboard', title: 'Super Motherboard', lvl: 1, details: 'Dypado 500', hashingRate: 0.003, electricity: 200, price: 300, img: motherboard3},

  {type: 'power', title: 'Basic Powersupply', lvl: 1, details: 'Trixter', hashingRate: 0, electricity: 400, price: 200, img: powersupply1},
  {type: 'power', title: 'Power Powersupply', lvl: 1, details: 'The Nuclear Plant', hashingRate: 0, electricity: 800, price: 400, img: powersupply2},
  {type: 'power', title: 'Super Powersupply', lvl: 1, details: 'Solar', hashingRate: 0, electricity: 1400, price: 800, img: powersupply3},
]
