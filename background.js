function clearCache() {
  browser.browsingData.removeCache({}).then(() => {
    console.log("Cache cleared");
  });
}

// Set up alarm to clear cache every 30 minutes
browser.alarms.create("clearCacheAlarm", { periodInMinutes: 30 });

// Listen for alarm and clear cache when it fires
browser.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "clearCacheAlarm") {
    clearCache();
  }
});

// Clear cache on startup
clearCache();
