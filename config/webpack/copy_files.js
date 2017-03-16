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
copySync('./src/favicon.ico', './build/public/favicon.ico', true);
copySync('./data/indicators.json', './build/public/data/indicators.json', true);
copySync('./data/ministries_stats.json', './build/public/data/ministries_stats.json', true);
