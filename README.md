# vyper-by-example.github.io

[Vyper By Example](https://vyper-by-example.org)

### License

[MIT License](LICENSE)

### Development

```shell
npm i
npm start
```

### Production

```shell
npm run build
# Preview produciton
npm run preview
# Deploy
npm run deploy
```

### Memo

```shell
## Deploy ##

# Compile contracts
find vy -type f -exec vyper --enable-decimals {} \;

# Copy contracts
npx ts-node scripts/copy.ts

# md to react
npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts src/pages/function

# md to react all pages
find src/pages -type d -not -path "*/__snapshots__" -exec npx ts-node --project ./scripts/tsconfig.json scripts/md-to-react.ts {} \;

# build routes
npx ts-node --project ./scripts/tsconfig.json scripts/build-routes.ts

# build search index
npx ts-node --project ./scripts/tsconfig.json scripts/build-search-index.ts

```
