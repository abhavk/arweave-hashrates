# Arweave Hashrates

This package allows you to check the hashrate of Arweave nodes

In order to fetch the reward addresses for each of the last `n` blocks, run:

```
npm install
node index.mjs <to_block> <from_block>
```

Convert the obtained information into a dictionary:
```
node toDict.mjs
```

Render the dictionary (copy the dictionary to the `index.html` file), and then open it. 
