(function() {
  const tabStorage = {};
  const networkFilters = {
    urls: [
      "<all_urls>"
    ]
  };
  chrome.webRequest.onHeadersReceived.addListener(({ statusCode, tabId, requestId, type }) => {
    if (type === 'main_frame') {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabId, { showStatusCode: { statusCode } });
      }, 500);
    }
  }, networkFilters);
}());
