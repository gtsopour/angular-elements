const fs = require('fs');

(async function build() {
  await fs.rename('./dist/elements/elements.html', './dist/elements/index.html', function(error) {})
})()
