var self = require("sdk/self");

var button = require("sdk/ui/button/action").ActionButton({
  id: "Yeezify",
  label: "Yeezify This",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
      contentScriptFile: self.data.url("yeezify.js")
    });
  }
});
