console.log('injected');
chrome.runtime.onMessage.addListener((request) => {
  if (request['showStatusCode'] && !document.getElementById('statuscode_extension')){
    const element = document.createElement("div");
    const badCode = request.showStatusCode.statusCode < 200 || request.showStatusCode.statusCode >= 300;
    const color = badCode ? '#ffcccc' : 'white';
    element.style = `position:fixed;top:0;right:0;background-color:${color};border:1px solid black; padding: 10px;font-size:20px;font-weight: bold; z-index: 100000;`;
    const text = document.createTextNode(request.showStatusCode.statusCode);
    element.setAttribute("id", "statuscode_extension");
    element.appendChild(text);
    if (document.body) {
      console.log('injecting', element);
      document.body.appendChild(element);
    }
  }
});
