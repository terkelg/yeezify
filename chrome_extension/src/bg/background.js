// Browser Action
// https://developer.chrome.com/extensions/browserAction#event-onClicked
chrome.browserAction.onClicked.addListener(function() {

  console.log("I am Warhol. I am the No. 1 most impactful artist of our generation. I am Shakespeare in the flesh. Walt Disney. Nike. Google.")

  chrome.tabs.executeScript(null, {
    file: "src/bg/yeezify.js"
  });

});
