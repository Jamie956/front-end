const path = require('path');

console.log('basename => '+path.basename('/foo/bar/baz/asdf/quux.html', '.html'));

console.log('dirname => '+path.dirname('/foo/bar/baz/asdf/quux'));

console.log('extname => '+path.extname('index.html'));

console.log('__dirname => '+__dirname);

console.log('join => '+path.join(__dirname, 'css'));

console.log('join => '+path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log('parse => '+path.parse('C:\\path\\dir\\file.txt'));

console.log('resolve => '+path.resolve());

console.log('resolve => '+path.resolve('css'));

console.log('resolve => '+path.resolve('/foo/bar', './baz'));

// const css = require('../../build/bundle.server');