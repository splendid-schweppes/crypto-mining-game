import {defaultBlocks, initialHashingRate} from './Config'
import {random} from 'lodash'
import {shopAssets} from './shopAssets'
import {powerUps} from './powerUpAssets'

const getRandomConversionRate = () => random(10, 1100, true)

const getStorage = (name, defaultValue) =>
  JSON.parse(window.localStorage.getItem(name) || defaultValue)

export const loadBlocks = () =>
  Number(getStorage('blocks', defaultBlocks))

export const loadClicks = () =>
  getStorage('clicks', '[]')

export const loadHashingRate = () =>
  Number(getStorage('hashingRate', initialHashingRate))

export const loadCoins = () =>
  Number(getStorage('coins', 0))

export const loadCoinLog = () =>
  Number(getStorage('coinlog', 0))

export const loadMoney = () =>
  Number(getStorage('money', 0))

export const loadAssets = () =>
  getStorage('assets', '[]')

export const loadAchievements = () =>
  getStorage('achievements', '[]')

export const loadSellingRate = () =>
  getStorage('sellingrate', getRandomConversionRate())

export const loadElectricity = () =>
  Number(getStorage('electricity', 0))

export const loadShopAssets = () =>
  getStorage('shopAssets') || shopAssets

export const loadPowerUps = () =>
  getStorage('powerUps') || powerUps

export const loadPowerUpsOwned = () =>
  getStorage('powerUpsOwned', '[]')

export const gameOverShown = () =>
  getStorage('gameOverShown', false)

// TODO: this should be in redux middleware
export const saveSellingRate = sellingrate =>
  window.localStorage.setItem('sellingrate', JSON.stringify(sellingrate))
