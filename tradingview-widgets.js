// tradingview-widgets.js

// List of widget container IDs expected in the HTML
export const widgetContainers = [
  'ticker-tape',
  'symbol-info',
  'advanced-chart',
  'company-profile',
  'fundamental-data',
  'technical-analysis',
  'top-stories'
];

// Returns the TradingView widget theme string ("light" or "dark") based on a dark mode toggle checkbox element
export function getTradingViewTheme(darkToggleer) {
  return darkToggleer.checked ? "dark" : "light";
}

// Clears the innerHTML of all widget containers
export function clearWidgets(widgetContainers) {
  widgetContainers.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = "";
  });
}

// Creates and appends a TradingView widget script inside the specified container
export function createWidget(containerId, src, config) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = ''; // Clear previous widgets if any
  const widgetDiv = document.createElement('div');
  widgetDiv.className = 'tradingview-widget-container__widget';
  container.appendChild(widgetDiv);
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = src;
  script.textContent = JSON.stringify(config);
  container.appendChild(script);
}

// Load and render all TradingView widgets for a given symbol and current darkToggle element
export function loadWidgets(symbol, darkToggle, widgetContainers, symbolsArray) {
  clearWidgets(widgetContainers);
  const TVWidgets = getTradingViewTheme(darkToggle);
  const SYMBOL = symbol;

  const widgetSymbols = symbolsArray.map(symbol => ({ description: "", proName: symbol.trim() }));

  createWidget('ticker-tape', 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js', {
    symbols: widgetSymbols,
    colorTheme: TVWidgets,
    locale: "en",
    largeChartUrl: "",
    isTransparent: true,
    showSymbolLogo: true,
    displayMode: "compact"
  });

  createWidget('symbol-info', 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js', {
    symbol: SYMBOL,
    width: "100%",
    locale: "en",
    colorTheme: TVWidgets,
    isTransparent: true
  });

  createWidget('advanced-chart', 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js', {
    allow_symbol_change: true,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: "D",
    locale: "en",
    save_image: true,
    style: "1",
    symbol: SYMBOL, 
    theme: TVWidgets,
    timezone: "exchange",
    backgroundColor: (TVWidgets === "light") ? "#ffffff" : "#0F0F0F",
    gridColor: "rgba(242, 242, 242, 0.06)",
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: ["STD;EMA"],
    autosize: true
  });

  createWidget('company-profile', 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js', {
    symbol: SYMBOL,
    colorTheme: TVWidgets,
    isTransparent: true,
    locale: "en",
    width: "100%",
    height: "100%"
  });

  createWidget('fundamental-data', 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js', {
    symbol: SYMBOL,
    colorTheme: TVWidgets,
    displayMode: "regular",
    isTransparent: true,
    locale: "en",
    width: "100%",
    height: "100%"
  });

  createWidget('technical-analysis', 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js', {
    colorTheme: TVWidgets,
    displayMode: "multiple",
    isTransparent: true,
    locale: "en",
    interval: "1D",
    disableInterval: false,
    width: "100%",
    height: "100%",
    symbol: SYMBOL,
    showIntervalTabs: true
  });

  createWidget('top-stories', 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js', {
    displayMode: "compact",
    feedMode: "symbol",
    symbol: SYMBOL,
    colorTheme: TVWidgets,
    isTransparent: true,
    locale: "en",
    width: "100%",
    height: "100%"
  });
}
