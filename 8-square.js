const args = process.argv.slice(2);
const numberarg = Number(args[0])


if (!isNaN(numberarg) && numberarg > 0) {
  for (let i = 0; i < numberarg; i++) {
  console.log('x'.repeat(numberarg));
}
} else if (isNaN(numberarg)) {
  console.log('Missing size');
} else {
    return 
}