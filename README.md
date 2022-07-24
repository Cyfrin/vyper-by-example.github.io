# vyper-by-example.github.io

[Vyper By Example](https://vyper-by-example.org)

### License

[MIT License](LICENSE)

### Memo

```shell
## Deploy ##
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/function

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# deploy
npm run deploy
```

- [x] Hello World (basic)
- [x] Data Types - Values (basic, variable)
- [x] Data Types - References (basic, variable)
- [x] Dynamic Arrays (basic, variable)
- [x] Function Intro (basic, function)
- [x] Internal and External Functions (basic, function)
- [x] View and Pure Functions (basic, function)
- [x] Constructor (basic, function)
- [x] Private and Public State Variables (basic, variable)
- [x] Constants (basic, variable)
- [x] Immutable (basic, variable)
- [x] If Else (basic, control flow)
- [x] For Loop (basic, control flow)
- [x] Error (basic, control flow)
- [x] Event (basic, events)
- [x] Payable (basic, payment, function)
- [x] Default Function (basic, function)
- [x] Send Ether (basic, payment)
- [x] Raw Call (basic, advanced, function)
- [x] Delegate Call (basic, advanced, function)
- [x] Interface (basic, misc)
- [x] Hash Function (basic, crypto)
- [x] Verify Signature (basic, crypto)
- [x] Create Forwarder To (basic)
- [x] Re-entrancy Lock (basic, security)
- [x] Self Destruct (basic, misc)
