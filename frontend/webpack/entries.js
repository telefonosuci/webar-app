const path = require('path');
//const { root } = require('./utils/rootPath');

const vendorsLibraries = [
  //'@babel/polyfill/browser',
  'react',
  'react-dom',
  'i18next',
  'i18next-xhr-backend',
  'react-i18next',
];

const vendors = 'vendors';

// If entries are <= 1, webpack does not split the code
// and keeps everything inside vendors bundle

const entriesNames = [
  'global',
  'header',
  'footer',
  'homepage',
];
const entries = {};


entriesNames.forEach(entry => {
  console.log('Building: ', entry);
  entries[entry] = path.join(__dirname, '../src/entries', entry, 'entry.js');
  //entries[entry] = path.join('src/modules', entry, 'entry.js');
});



entries[vendors] = vendorsLibraries;


module.exports = {
  entry: entries,
  customNames: entriesNames,
  all: Object.keys(entries),
  vendor: vendors,
};
