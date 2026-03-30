// data/api.ts
import { dashboardData, insightsData, marketData } from "./mockData";

export const fetchDashboardData = () => {
  return new Promise<typeof dashboardData>((resolve) => {
    setTimeout(() => {
      resolve(dashboardData);
    }, 1000); // simulate 1-second API delay
  });
};

export const fetchInsightsData = () => {
  return new Promise<typeof insightsData>((resolve) => {
    setTimeout(() => {
      resolve(insightsData);
    }, 1000); // simulate 1-second API delay
  });
};

export const fetchMarketData = () => {
  return new Promise<typeof marketData>((resolve) => {
    setTimeout(() => {
      resolve(marketData);
    }, 1000); // simulate 1-second API delay
  });
};
