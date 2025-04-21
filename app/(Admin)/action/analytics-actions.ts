"use server";

import {
  getAnalyticsData,
  getBrowsers,
  getDeviceCategories,
  getTopPages,
  getTopReferrers,
} from "@/app/(Admin)/helper/google-analytics";

export async function fetchDashboardData(days = 30) {
  try {
    const [analyticsData, topPages, topReferrers, deviceCategories, browsers] =
      await Promise.all([
        getAnalyticsData(days),
        getTopPages(days),
        getTopReferrers(days),
        getDeviceCategories(days),
        getBrowsers(days),
      ]);

    return {
      analyticsData,
      topPages,
      topReferrers,
      deviceCategories,
      browsers,
      days,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
}
