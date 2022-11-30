chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(
    {
      id: '12ft.io',
      title: 'Remove paywall',
      contexts: ['link']
    }
  ) 
});

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.create({
    url: `http://12ft.io/${info.linkUrl}`
  });
})