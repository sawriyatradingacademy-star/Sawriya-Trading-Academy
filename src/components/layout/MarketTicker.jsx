import { marketItems } from '../../data/marketData'

export default function MarketTicker() {
  // Duplicate list to achieve infinite marquee animation
  const tickerItems = [...marketItems, ...marketItems]

  return (
    <div
      className="bg-slate-50/95 border-b border-slate-200/90 text-xs py-2 px-4 ticker-wrap backdrop-blur-sm select-none"
      title="Live Global Market Watch"
    >
      <div className="ticker-move font-mono space-x-8 inline-flex items-center">
        {tickerItems.map((item, index) => (
          <span
            key={`${item.symbol}-${index}`}
            className="inline-flex items-center space-x-2 transition-opacity hover:opacity-100 opacity-90"
          >
            <strong className="text-slate-500 font-semibold">{item.symbol}</strong>
            <span className="text-slate-900 font-medium">{item.price}</span>
            <span
              className={`inline-flex items-center space-x-1 font-bold ${
                item.isUp ? 'market-up' : 'market-down'
              }`}
            >
              <span>{item.change}</span>
              <i
                className={`fa-solid ${
                  item.isUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'
                } text-[10px]`}
              ></i>
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
