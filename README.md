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
