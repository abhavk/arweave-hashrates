import * as fs from "fs";

const file = fs.readFileSync("rewardees.txt");

const array = file.toString().split("\n");

console.log(array.slice(0,10)); 

const dict = {};

for (var idx = 0; idx < array.length; idx++) {
	const str = array[idx];
	console.log(str);
	if (dict[str] != undefined) {
		dict[str] = dict[str] + 1;
	} else dict[str] = 1;
}

console.log(dict);
