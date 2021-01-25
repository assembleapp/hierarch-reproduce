Run:

```bash
git clone https://github.com/assembleapp/hierarch-reproduce
cd hierarch-reproduce
yarn
node run
```

... and you should see an output `0`;
[no query matches] are in the program.

[no query matches]: https://github.com/assembleapp/hierarch-reproduce/blob/main/run.js#L9

Run:

```
docker build -t hierarch-reproduce .
docker run hierarch-reproduce node run
```

or:

```
docker-compose up
```

and you likely see an error, boo hoo.

```bash
eagle:reproduce grace$ dc up
Starting reproduce_node_1 ... done
Attaching to reproduce_node_1
node_1  | /launch/run.js:9
node_1  | const query = new Parser.Query(JavaScript, `
node_1  |               ^
node_1  | 
node_1  | Error: Query error of type TSQueryErrorNodeType at position 1
node_1  |     at Object.<anonymous> (/launch/run.js:9:15)
node_1  |     at Module._compile (node:internal/modules/cjs/loader:1108:14)
node_1  |     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1137:10)
node_1  |     at Module.load (node:internal/modules/cjs/loader:973:32)
node_1  |     at Function.Module._load (node:internal/modules/cjs/loader:813:14)
node_1  |     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
node_1  |     at node:internal/main/run_main_module:17:47
reproduce_node_1 exited with code 1
```
