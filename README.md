# Omnitrix
Financial Price Tracker based on CSV and Yahoo Finance

Sidebar navigation with overlay and swipe gestures for mobile usability.
Theme control, including dark/light mode toggle and accent color persistence.
Pushbullet API integration for sending out notifications based on alerts.
Live stock price tracking using Yahoo Finance's WebSocket with protobuf data decoding.
Price tiles UI dynamically displaying subscribed tickers with current prices.
Alerts system that lets the user define price thresholds (above/below conditions) with notes.
Persistence of subscribed tickers, live prices, alerts, and triggered alerts in localStorage.
CSV import functionality to bulk import price alerts.
Accessible UI features, ARIA attributes, and keyboard handling.
Dynamic updates and reconnection logic for the WebSocket connection to maintain data flow.
