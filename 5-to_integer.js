const args = process.argv.slice(2);
const numberarg = Number(args[0])

if (!isNaN(numberarg)) {
  console.log('My number: ' + numberarg);
} else {
  console.log('Not a number');
}