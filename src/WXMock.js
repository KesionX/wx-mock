var Mock = require('mockjs');

var __request = wx.request;
Object.defineProperty(wx, "request", {writable: true});
wx.request = function (config) {
  console.log('wx to request', config.url, Mock._mocked);
  if (typeof Mock._mocked[config.url] == 'undefined') {
    __request(config);
    return;
  }
  var resTemplate = Mock._mocked[config.url].template;
  var response = Mock.mock(resTemplate);
  if (typeof config.success == 'function') {
    config.success(response);
  }
  if (typeof config.complete == 'function') {
    config.complete(response);
  }
};
module.exports = Mock;