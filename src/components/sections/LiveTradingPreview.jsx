import { useState } from 'react'

const tradingSetups = {
  nifty: {
    symbol: 'NIFTY 50',
    timeframe: '1H Timeframe',
    signal: 'Bullish Breakout',
    signalType: 'bullish',
    targetEntry: '₹22,400.00',
    targetExit: '₹22,780.00',
    riskReward: '1 : 3.5 Ratio',
    stopLoss: '₹22,290.00',
    moduleNote: 'Covered in Module 4: Risk Engine Setup',
    candles: [
      { height: 42, isUp: false, label: 'C1', o: '22,350', c: '22,310', h: '22,360', l: '22,290' },
      { height: 68, isUp: true, label: 'C2', o: '22,310', c: '22,380', h: '22,395', l: '22,305' },
      { height: 52, isUp: false, label: 'C3', o: '22,380', c: '22,335', h: '22,390', l: '22,330' },
      { height: 86, isUp: true, label: 'C4', o: '22,335', c: '22,420', h: '22,430', l: '22,330' },
      { height: 96, isUp: true, label: 'C5', o: '22,420', c: '22,450', h: '22,465', l: '22,410' },
    ],
  },
  btc: {
    symbol: 'BTC/USD',
    timeframe: '4H Timeframe',
    signal: 'Liquidity Sweep',
    signalType: 'bullish',
    targetEntry: '$67,800.00',
    targetExit: '$71,200.00',
    riskReward: '1 : 4.2 Ratio',
    stopLoss: '$66,950.00',
    moduleNote: 'Covered in Module 2: Order Flow Liquidity',
    candles: [
      { height: 50, isUp: false, label: 'C1', o: '67,200', c: '66,800', h: '67,350', l: '66,600' },
      { height: 75, isUp: true, label: 'C2', o: '66,800', c: '67,400', h: '67,500', l: '66,750' },
      { height: 60, isUp: false, label: 'C3', o: '67,400', c: '67,100', h: '67,450', l: '67,050' },
      { height: 90, isUp: true, label: 'C4', o: '67,100', c: '68,100', h: '68,250', l: '67,050' },
      { height: 100, isUp: true, label: 'C5', o: '68,100', c: '68,420', h: '68,600', l: '68,000' },
    ],
  },
  banknifty: {
    symbol: 'BANK NIFTY',
    timeframe: '15M Scalp',
    signal: 'Volume Expansion',
    signalType: 'bullish',
    targetEntry: '₹47,950.00',
    targetExit: '₹48,450.00',
    riskReward: '1 : 3.0 Ratio',
    stopLoss: '₹47,780.00',
    moduleNote: 'Covered in Module 3: Dynamic Sizing',
    candles: [
      { height: 38, isUp: false, label: 'C1', o: '47,900', c: '47,850', h: '47,930', l: '47,820' },
      { height: 62, isUp: true, label: 'C2', o: '47,850', c: '47,980', h: '48,010', l: '47,840' },
      { height: 48, isUp: false, label: 'C3', o: '47,980', c: '47,920', h: '48,000', l: '47,910' },
      { height: 82, isUp: true, label: 'C4', o: '47,920', c: '48,080', h: '48,100', l: '47,910' },
      { height: 92, isUp: true, label: 'C5', o: '48,080', c: '48,120', h: '48,160', l: '48,050' },
    ],
  },
}

export default function LiveTradingPreview() {
  const [activeTab, setActiveTab] = useState('nifty')
  const [hoveredCandle, setHoveredCandle] = useState(null)

  const setup = tradingSetups[activeTab]

  return (
    <div className="bg-brand-card border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl relative glow-effect transition-all duration-300">
      {/* Asset Switcher Tabs */}
      <div className="flex items-center space-x-2 mb-5 pb-3 border-b border-slate-800/80 overflow-x-auto text-xs">
        {Object.keys(tradingSetups).map((key) => {
          const item = tradingSetups[key]
          const isActive = activeTab === key
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1.5 rounded-lg font-mono font-medium transition-all ${
                isActive
                  ? 'bg-brand-600 text-slate-950 font-bold shadow-md shadow-brand-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {item.symbol}
            </button>
          )
        })}
      </div>

      {/* Header Info */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-white font-mono tracking-tight">
            {setup.symbol}
          </span>
          <span className="bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
            {setup.signal}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-2 py-1 rounded border border-slate-800">
          {setup.timeframe}
        </span>
      </div>

      {/* Simulated Candlestick Chart Preview */}
      <div className="py-6 space-y-4">
        <div className="h-44 w-full relative flex items-end space-x-3 sm:space-x-4 pt-6 px-4 bg-slate-900/80 rounded-2xl border border-slate-800/80">
          {setup.candles.map((candle, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCandle(candle)}
              onMouseLeave={() => setHoveredCandle(null)}
              className="flex-1 flex flex-col items-center group relative cursor-pointer"
              style={{ height: `${candle.height}%` }}
            >
              {/* Wick */}
              <div
                className={`w-0.5 h-full ${
                  candle.isUp ? 'bg-brand-400' : 'bg-rose-400'
                } group-hover:scale-110 transition-transform`}
              ></div>

              {/* Body */}
              <div
                className={`w-full rounded-sm absolute top-1 bottom-1 transition-all group-hover:brightness-125 ${
                  candle.isUp
                    ? 'bg-brand-500/85 border border-brand-400 shadow-sm shadow-brand-500/30'
                    : 'bg-rose-500/85 border border-rose-400 shadow-sm shadow-rose-500/30'
                }`}
              ></div>
            </div>
          ))}

          {/* Candle Hover Tooltip */}
          {hoveredCandle && (
            <div className="absolute top-2 left-3 right-3 bg-slate-950/95 border border-brand-500/40 px-3 py-1.5 rounded-lg text-[11px] font-mono flex items-center justify-between text-slate-300 pointer-events-none shadow-xl">
              <span>O: {hoveredCandle.o}</span>
              <span>H: {hoveredCandle.h}</span>
              <span>L: {hoveredCandle.l}</span>
              <span className={hoveredCandle.isUp ? 'text-brand-400 font-bold' : 'text-rose-400 font-bold'}>
                C: {hoveredCandle.c}
              </span>
            </div>
          )}
        </div>

        {/* Target Metrics */}
        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80">
            <div className="text-slate-400 flex items-center justify-between">
              <span>Target Entry</span>
              <i className="fa-solid fa-bullseye text-brand-400 text-[10px]"></i>
            </div>
            <div className="text-white font-bold text-sm mt-1">{setup.targetEntry}</div>
          </div>
          <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/80">
            <div className="text-slate-400 flex items-center justify-between">
              <span>Risk/Reward</span>
              <i className="fa-solid fa-scale-balanced text-brand-400 text-[10px]"></i>
            </div>
            <div className="text-brand-400 font-bold text-sm mt-1">{setup.riskReward}</div>
          </div>
        </div>
      </div>

      {/* Module Highlight */}
      <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center">
          <i className="fa-solid fa-graduation-cap text-brand-400 mr-2 text-sm"></i>
          {setup.moduleNote}
        </span>
        <span className="text-slate-300 font-semibold font-mono text-[11px]">
          Verified Rule
        </span>
      </div>
    </div>
  )
}
