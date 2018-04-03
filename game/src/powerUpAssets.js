import hamster from './svg_assets/hamster.png'
import spacerocket from './svg_assets/spacerocket.png'
import chinese from './svg_assets/chinese.png'
import overclock from './svg_assets/overclock.png'
import penguin from './svg_assets/penguin.png'
import clouddata from './svg_assets/clouddata.png'
import russian from './svg_assets/russian.png'
import power from './svg_assets/power.png'
import overclock2 from './svg_assets/overclock2.png'

export const powerUps = [
  {type: 'addPower', title: 'Hamster on spinning wheel', lvl: 0, details: 'Hamster farm to boost your electricity', hashingRate: 0, electricity: 10000, price: 2500, img: hamster, locked: true, unlocklvl: 2, maxlvl: 5},
  {type: 'powerup', title: 'Chinese hackers', lvl: 0, details: 'Hire chinese hackers to hash faster', hashingRate: 0.1, electricity: 0, price: 8000, img: chinese, locked: true, unlocklvl: 4, maxlvl: 5},
  {type: 'powerup', title: 'Overclock lvl 1', lvl: 0, details: 'Overclock to boost your hashing by 0.3', hashingRate: 0.3, electricity: 10000, price: 1000, img: overclock, locked: true, unlocklvl: 6, maxlvl: 5},

  {type: 'addPower', title: 'Chernobyl Power Plant', lvl: 0, details: '20 000 electricity for lifetime', hashingRate: 0.00, electricity: 20000, price: 5000, img: power, locked: true, unlocklvl: 8, maxlvl: 5},
  {type: 'powerup', title: 'Overclock lvl 2', lvl: 0, details: 'Overclock to boost your hashing rate by 0.5', hashingRate: 0.5, electricity: 15000, price: 5000, img: overclock2, locked: true, unlocklvl: 10, maxlvl: 5},
  {type: 'powerup', title: 'Cloud hashing', lvl: 0, details: 'Cloud datacenter for lifetime hashing', hashingRate: 0.9, electricity: 0, price: 20000, img: clouddata, locked: true, unlocklvl: 12, maxlvl: 5},

  {type: 'powerup', title: 'Russian datacenter', lvl: 0, details: 'Russian datacenter for hashing Putin fast', hashingRate: 2, electricity: 0, price: 40000, img: russian, locked: true, unlocklvl: 14, maxlvl: 5},
  {type: 'powerup', title: 'Stuxnet computer virus', lvl: 0, details: 'Spread Stuxnet virus to hash on infected pc', hashingRate: 3, electricity: 0, price: 70000, img: penguin, locked: true, unlocklvl: 16, maxlvl: 5},
  {type: 'powerup', title: 'To The Moon', lvl: 0, details: 'Steal Nasa blueprints to build a space rocket', hashingRate: 8, electricity: 40000, price: 100000, img: spacerocket, locked: true, unlocklvl: 18, maxlvl: 5},
]
