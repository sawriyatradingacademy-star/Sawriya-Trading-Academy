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
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-xl relative glow-effect transition-all duration-300">
      {/* Asset Switcher Tabs */}
      <div className="flex items-center space-x-2 mb-5 pb-3 border-b border-slate-100 overflow-x-auto text-xs">
        {Object.keys(tradingSetups).map((key) => {
          const item = tradingSetups[key]
          const isActive = activeTab === key
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3 py-1.5 rounded-lg font-mono font-medium transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-600 text-white font-bold shadow-sm shadow-brand-600/30'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-200/60'
              }`}
            >
              {item.symbol}
            </button>
          )
        })}
      </div>

      {/* Header Info */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-slate-900 font-mono tracking-tight">
            {setup.symbol}
          </span>
          <span className="bg-brand-50 text-brand-700 border border-brand-200 text-xs px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            {setup.signal}
          </span>
        </div>
        <span className="text-xs font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 font-medium">
          {setup.timeframe}
        </span>
      </div>

      {/* Simulated Candlestick Chart Preview */}
      <div className="py-6 space-y-4">
        <div className="h-44 w-full relative flex items-end space-x-3 sm:space-x-4 pt-6 px-4 bg-slate-50/90 rounded-2xl border border-slate-200/80">
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
                  candle.isUp ? 'bg-emerald-500' : 'bg-rose-500'
                } group-hover:scale-110 transition-transform`}
              ></div>

              {/* Body */}
              <div
                className={`w-full rounded-sm absolute top-1 bottom-1 transition-all group-hover:brightness-105 ${
                  candle.isUp
                    ? 'bg-emerald-500 border border-emerald-600 shadow-xs shadow-emerald-500/20'
                    : 'bg-rose-500 border border-rose-600 shadow-xs shadow-rose-500/20'
                }`}
              ></div>
            </div>
          ))}

          {/* Candle Hover Tooltip */}
          {hoveredCandle && (
            <div className="absolute top-2 left-3 right-3 bg-slate-900 text-white border border-slate-700 px-3 py-1.5 rounded-lg text-[11px] font-mono flex items-center justify-between pointer-events-none shadow-xl">
              <span>O: {hoveredCandle.o}</span>
              <span>H: {hoveredCandle.h}</span>
              <span>L: {hoveredCandle.l}</span>
              <span className={hoveredCandle.isUp ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                C: {hoveredCandle.c}
              </span>
            </div>
          )}
        </div>

        {/* Target Metrics */}
        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80">
            <div className="text-slate-500 flex items-center justify-between">
              <span>Target Entry</span>
              <i className="fa-solid fa-bullseye text-brand-600 text-[10px]"></i>
            </div>
            <div className="text-slate-900 font-bold text-sm mt-1">{setup.targetEntry}</div>
          </div>
          <div className="bg-slate-50/90 p-3.5 rounded-xl border border-slate-200/80">
            <div className="text-slate-500 flex items-center justify-between">
              <span>Risk/Reward</span>
              <i className="fa-solid fa-scale-balanced text-brand-600 text-[10px]"></i>
            </div>
            <div className="text-brand-600 font-bold text-sm mt-1">{setup.riskReward}</div>
          </div>
        </div>
      </div>

      {/* Module Highlight */}
      <div className="p-4 bg-slate-50/90 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
        <span className="flex items-center">
          <i className="fa-solid fa-graduation-cap text-brand-600 mr-2 text-sm"></i>
          {setup.moduleNote}
        </span>
        <span className="text-slate-700 font-semibold font-mono text-[11px]">
          Verified Rule
        </span>
      </div>
    </div>
  )
}
