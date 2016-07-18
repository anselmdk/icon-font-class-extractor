var fs = require('fs');
var extract = require('extract-from-css');

var cssFile = null;
if (process.argv[2]) {
  cssFile = process.argv[2];
} else {
  console.log('please provide css location');
  process.exit();
}

var css = fs.readFileSync(cssFile,'utf8');
extract(['classes'], css);
var arr = extract.extractClasses(css);
var yml = '';
arr.map(function(item){
  yml += '- ' + item + "\n";
});
console.log(yml);

