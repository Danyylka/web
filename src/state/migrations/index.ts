import { clearAssets } from './clearAssets'
import { clearMarketData } from './clearMarketData'
import { clearNfts } from './clearNfts'
import { clearOpportunities } from './clearOpportunities'
import { clearPortfolio } from './clearPortfolio'
import { clearSnapshot } from './clearSnapshot'
import { clearTxHistory } from './clearTxHistory'

export const migrations = {
  0: clearOpportunities,
  1: clearOpportunities,
  2: clearPortfolio,
  3: clearOpportunities,
  4: clearOpportunities,
  5: clearNfts,
  6: clearAssets,
  7: clearPortfolio,
  8: clearOpportunities,
  9: clearAssets,
  10: clearTxHistory,
  11: clearAssets,
  12: clearAssets,
  13: clearPortfolio,
  14: clearTxHistory,
  15: clearAssets,
  16: clearOpportunities,
  17: clearTxHistory,
  18: clearTxHistory,
  19: clearMarketData,
  20: clearTxHistory,
  21: clearAssets,
  22: clearTxHistory,
  23: clearPortfolio,
  24: clearTxHistory,
  25: clearAssets,
  26: clearAssets,
  27: clearPortfolio,
  28: clearAssets,
  29: clearAssets,
  30: clearTxHistory,
  31: clearAssets,
  32: clearSnapshot,
  33: clearAssets,
  34: clearTxHistory,
  35: clearAssets,
  36: clearTxHistory,
  37: clearPortfolio,
  38: clearOpportunities,
  39: clearAssets,
  40: clearAssets,
  41: clearAssets,
  42: clearAssets,
  43: clearAssets,
  44: clearAssets,
  45: clearAssets,
  46: clearAssets,
  47: clearAssets,
  48: clearAssets,
  49: clearAssets,
  50: clearPortfolio,
  51: clearAssets,
  52: clearPortfolio,
  53: clearAssets,
  54: clearAssets,
  55: clearAssets,
  56: clearPortfolio,
  57: clearAssets,
  58: clearAssets,
  59: clearAssets,
  60: clearAssets,
  61: clearOpportunities,
  62: clearAssets,
  63: clearAssets,
  64: clearPortfolio,
}
