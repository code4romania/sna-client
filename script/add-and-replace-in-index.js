let fs = require('fs');

if (!fs.existsSync('./build') || !fs.existsSync('./build/manifest.json')) {
  console.error('No /build folder or no /build/manifest.json file present.');
  process.exit(1);
}

if (!fs.existsSync('./src') || !fs.existsSync('./src/index.html')) {
  console.error('No /src folder or no /src/index.html file present.');
  process.exit(1);
}

const writeFileSync = (data, dest, overwrite) => {
  if (overwrite && fs.existsSync(dest)) {
    fs.unlinkSync(dest);
  }

  fs.writeFileSync(dest, data);
};

let manifest = require('../build/manifest.json');
let indexFile = fs.readFileSync('./src/index.html', "utf8");

if (!(manifest['vendor.css'] && manifest['app.css'])) {
  console.error('Missing manifest.json entries. Probably because of wrong NODE_ENV flag setup?');
  process.exit(1);
}

indexFile = indexFile.replace('css/vendor.css', manifest['vendor.css']);
indexFile = indexFile.replace('css/app.css', manifest['app.css']);
indexFile = indexFile.replace('js/vendor.js', manifest['vendor.js']);
indexFile = indexFile.replace('js/app.js', manifest['app.js']);

writeFileSync(indexFile, './build/index.html', true);
console.info('index.html added and edited successfully.');
