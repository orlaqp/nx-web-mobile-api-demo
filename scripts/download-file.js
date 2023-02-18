const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

exports.download = (url, output) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(output);
    http.get(url, function (response) {
      response.pipe(file);

      // after download completed close filestream
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
  });
};
