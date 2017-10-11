let fs = require('fs');

const copySync = (src, dest, overwrite) => {
  if (overwrite && fs.existsSync(dest)) {
    fs.unlinkSync(dest);
  }
  const data = fs.readFileSync(src);
  fs.writeFileSync(dest, data);
};

const createIfDoesntExist = dest => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest);
  }
};

createIfDoesntExist('./build');
createIfDoesntExist('./build/public');
createIfDoesntExist('./build/public/data');
copySync('./src/apple-touch-icon.png', './build/public/apple-touch-icon.png', true);
copySync('./src/favicon.ico', './build/public/favicon.ico', true);
copySync('./src/favicon-16x16.png', './build/public/favicon-16x16.png', true);
copySync('./src/favicon-32x32.png', './build/public/favicon-32x32.png', true);
copySync('./src/safari-pinned-tab.svg', './build/public/safari-pinned-tab.svg', true);
copySync('./config/webpack/jquery-stub.js', './build/jquery-stub.js', true);
copySync('./data/indicators.json', './build/public/data/indicators.json', true);
copySync('./data/ministries_stats.json', './build/public/data/ministries_stats.json', true);
copySync('./data/counties_stats.json', './build/public/data/counties_stats.json', true);
