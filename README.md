# vyper-by-example.github.io

[Vyper By Example](https://vyper-by-example.org)

### License

[MIT License](LICENSE)

### Memo

```shell
## Deploy ##
# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/array

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# deploy
npm run deploy
```

- [x] Hello World (basic)
- [x] Data Types - Values (basic, data)
- [x] Data Types - References (basic, data)
- [x] Dynamic Arrays (basic, data)
- [ ] Function Intro (basic, function)
- [ ] Internal and External Functions (basic, function)
- [ ] View and Pure Functions (basic, function)
- [ ] Constructor (basic, function)
- [ ] Private and Public State Variables (basic, data)
- [ ] Constants (basic, data)
- [ ] Immutable (basic, data)
- [ ] If Else (basic, control flow)
- [ ] For Loop (basic, control flow)
- [ ] Error (basic, control flow)
- [ ] Event (basic, events)
- [ ] Payable (basic, payment, function)
- [ ] Default Function (basic, function)
- [ ] Send Ether (basic, payment)
- [ ] Raw Call (basic, advanced, function)
- [ ] Delegate Call (basic, advanced, function)
- [ ] Interface (basic, misc)
- [ ] Hash Function (basic, crypto)
- [ ] Verify Signature (basic, crypto)
- [ ] Create Forwarder To (basic)
- [ ] Re-entrancy Lock (basic, security)
- [ ] Self Destruct (basic, misc)
