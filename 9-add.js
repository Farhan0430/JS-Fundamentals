const args = process.argv.slice(2);
const numberarga = Number(args[0]);
const numberargb = Number(args[1]);

function add(a,b){
    console.log(a + b);
}

add(numberarga, numberargb);