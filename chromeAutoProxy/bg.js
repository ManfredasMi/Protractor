chrome.webRequest.onAuthRequired.addListener(
  function(details) {
    return ({
      authCredentials: {
        'username': 'p998cbc',
        'password': 'p998cbc'
      }
    });
  }, {
    urls: ["<all_urls>"]
  }, ["blocking"]
);
