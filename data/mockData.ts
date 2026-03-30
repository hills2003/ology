// data/mockData.ts

type ChartData = {
  value: number;
};
export const dashboardData = {
  userName: "Christina",
  clarityIndex: 50,
  portfolio: {
    totalValue: 12500,
    change24h: 2140,
    winRate: 0.7,
    activePositions: 6,
    percentageChange: "+1.75",
    dayCount: 30,
    lastUpdated: " 5 hours ago",
  },
  alerts: [
    {
      title: "Mercury Stations Retrograde",
      description:
        "Mercury stations retrograde at 22°33' Pisces — clarity dissolves, signals invert. The shadow period is live. Your Volatility Warden instincts activate now. What others misread, you hold steady.",
    },
  ],

  chartData: [
    { value: 40 },
    { value: 70 },
    { value: 30 },
    { value: 90 },
    { value: 60 },
    { value: 50 },
  ],
};

export const insightsData = {
  author: "Stanley Druckenmiller",
  profileImg: "",
  date: "FEBRUARY 26, 2026",
  insight: "The goal is not to be right. The goal is to make money.",
  do: [
    "Audit open positions",
    "Trust pattern, not noise",
    "Document the signal",
  ],
  dont: [
    "Initiate new positions",
    "Chase reversals",
    "Ignore the storm warning",
  ],
};

export const marketData = {
  assets: [
    {
      symbol: "NVDA",
      name: "NVIDIA",
      price: 873.12,
      change: 2.45,
      chart: [420, 130, 825, 940, 360, 870, 873],
    },
    {
      symbol: "TSLA",
      name: "Tesla",
      price: 178.34,
      change: -1.32,
      chart: [190, 185, 382, 580, 179, 177, 978],
    },
    {
      symbol: "AAPL",
      name: "Apple",
      price: 192.55,
      change: 0.85,
      chart: [185, 287, 688, 490, 791, 993, 92],
    },

    {
      symbol: "BTC",
      name: "Bitcoin",
      price: 68250.45,
      change: 3.76,
      chart: [64000, 65000, 65500, 66000, 67000, 67800, 68250],
    },
  ],

  trending: [
    { symbol: "BTC", change: -3.76 },
    { symbol: "NVDA", change: -2.45 },
    { symbol: "ETH", change: -2.18 },
    { symbol: "MSFT", change: -1.14 },
    { symbol: "GOOGL", change: -1.02 },
    { symbol: "AAPL", change: -0.85 },
    { symbol: "TSLA", change: -1.32 },
    { symbol: "AMZN", change: -0.67 },
  ],
};
