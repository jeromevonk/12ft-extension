chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, (tabs) => {
  // Get URL from current tab
  const tab = tabs[0];
  chrome.tabs.update({
    url: `http://12ft.io/${tab.url}`
  });
});