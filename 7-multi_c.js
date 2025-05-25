const args = process.argv.slice(2);
const numberarg = Number(args[0])


if (!isNaN(numberarg) && numberarg > 0) {
  for (let i = 0; i < numberarg; i++) {
  console.log('C is fun');
}
} else if (isNaN(numberarg)) {
  console.log('Missing number of occurrences');
} else {
    return 
}