const fs = require('node:fs');

function FS(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data
  } catch (err) {
    console.error(err);
    return null
  }
}

module.exports = FS
