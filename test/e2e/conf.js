exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./*Feature.js'],
  capabilities: {
    browserName: 'chrome'
  }
};
