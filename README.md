## Description

Test compatibility rarible sdk with build config

## Run 
```
> yarn install
> yarn start
```

## Error

Error after start
``` Uncaught TypeError: createKeccakHash is not a function
    at eval (keccak.ts:10:1)
    at eval (hash-utils.ts:7:1)
    at keccak (hash.ts:19:1)
    at keccak256 (hash.ts:38:1)
    at id32 (id.js:11:1)
    at eval (mainnet.js:29:1)
    at ./node_modules/@rarible/protocol-ethereum-sdk/build/config/mainnet.js (main.73b66658fa0783a90b48.js:10895:1)
    at options.factory (main.73b66658fa0783a90b48.js:28511:31)
    at options.factory (main.73b66658fa0783a90b48.js:28572:31)
    at __webpack_require__ (main.73b66658fa0783a90b48.js:27951:33)
```

