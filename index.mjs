import { query } from "gql-query-builder";
import Arweave from "arweave";
import * as fs from "fs";

const arweave = Arweave.init({
                host: "arweave.net",
                port: 443,
                protocol: "https",
                timeout: 20000,
                logging: false,
        });

let response;
var stream = fs.createWriteStream("rewardees.txt", { flags: 'a' });
const height = parseInt(process.argv[2]);
for (let i = height; i > 940605; i--) {
	try {
		response = await arweave.api.get(`/block/height/${i}`);
	} catch (error) {
		try {
                	response = await arweave.api.get(`/block/height/${i}`);
        	} catch (error) {
                	response = await arweave.api.get(`/block/height/${i}`);
        	}
	}
	const reward_addr = response.data.reward_addr;
	const prev_block = response.data.previous_block;
	console.log(`saved rewardee ${reward_addr} for height ${i}`);
	await stream.write(reward_addr+"\n");
}
